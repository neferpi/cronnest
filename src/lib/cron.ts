import { CronExpressionParser } from "cron-parser";
import cronstrue from "cronstrue";
import type { CronFlavor } from "./site";

export type CronResult = {
  ok: true;
  expression: string;
  unixExpression: string;
  description: string;
  nextRuns: Date[];
  caveats: string[];
  exports: {
    unix: string;
    quartz: string;
    githubActions: string;
    kubernetesCronJob: string;
  };
} | {
  ok: false;
  error: string;
};

const FIELD_NAMES_5 = ["minute", "hour", "day of month", "month", "day of week"] as const;

function normalizeWhitespace(input: string): string {
  return input.trim().replace(/\s+/g, " ");
}

/** Convert Quartz (6 or 7 fields) to a best-effort 5-field Unix cron. */
export function quartzToUnix(expr: string): { unix: string; caveats: string[] } {
  const parts = normalizeWhitespace(expr).split(" ");
  const caveats: string[] = [
    "Quartz support is best-effort. Features like L, W, #, and overlapping day-of-month/day-of-week semantics may not match Quartz exactly.",
  ];

  if (parts.length === 7) {
    // seconds minutes hours day-of-month month day-of-week year
    const [, minute, hour, dom, month, dow] = parts;
    caveats.push("Year field ignored when converting Quartz → Unix.");
    return {
      unix: [minute, hour, sanitizeQuartzDom(dom), month, sanitizeQuartzDow(dow)].join(" "),
      caveats,
    };
  }

  if (parts.length === 6) {
    // seconds minutes hours day-of-month month day-of-week
    const [, minute, hour, dom, month, dow] = parts;
    caveats.push("Seconds field ignored when converting Quartz → Unix (Unix has no seconds).");
    return {
      unix: [minute, hour, sanitizeQuartzDom(dom), month, sanitizeQuartzDow(dow)].join(" "),
      caveats,
    };
  }

  if (parts.length === 5) {
    caveats.push("Treated as 5-field Unix cron (no Quartz seconds field).");
    return { unix: parts.join(" "), caveats };
  }

  throw new Error(
    `Quartz cron usually has 6 or 7 fields (optional seconds + year). Got ${parts.length}.`,
  );
}

function sanitizeQuartzDom(dom: string): string {
  if (dom === "?") return "*";
  // Strip L / W suffixes for best-effort
  return dom.replace(/[LW]/gi, "");
}

function sanitizeQuartzDow(dow: string): string {
  if (dow === "?") return "*";
  // Quartz: 1=Sun..7=Sat; Unix: 0=Sun..6=Sat (7=Sun also ok)
  // Keep names; strip # and L
  return dow.replace(/#\d+/g, "").replace(/L/gi, "");
}

/** Convert Unix 5-field to a simple Quartz 6-field (seconds=0). */
export function unixToQuartz(unix: string): string {
  const parts = normalizeWhitespace(unix).split(" ");
  if (parts.length !== 5) {
    throw new Error("Unix cron must have exactly 5 fields.");
  }
  const [minute, hour, dom, month, dow] = parts;
  // Quartz requires ? in either DOM or DOW when the other is specific
  let qDom = dom;
  let qDow = dow;
  if (dom !== "*" && dow !== "*") {
    // both specific — Quartz often wants one as ?
    qDow = "?";
  } else if (dom === "*" && dow === "*") {
    qDom = "*";
    qDow = "?";
  } else if (dom === "*") {
    qDom = "?";
  } else {
    qDow = "?";
  }
  return `0 ${minute} ${hour} ${qDom} ${month} ${qDow}`;
}

export function toGithubActionsYaml(unix: string): string {
  return `on:
  schedule:
    - cron: '${unix}'
  workflow_dispatch:`;
}

export function toKubernetesCronJob(
  unix: string,
  name = "example-cronjob",
): string {
  return `apiVersion: batch/v1
kind: CronJob
metadata:
  name: ${name}
spec:
  schedule: "${unix}"
  concurrencyPolicy: Forbid
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 1
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
            - name: ${name}
              image: busybox:1.36
              command:
                - /bin/sh
                - -c
                - echo "CronJob ran at \$(date)"`;
}

function validateUnixFields(expr: string): void {
  const parts = normalizeWhitespace(expr).split(" ");
  if (parts.length !== 5) {
    throw new Error(
      `Unix cron must have 5 fields (${FIELD_NAMES_5.join(", ")}). Got ${parts.length}.`,
    );
  }
}

function describe(unix: string): string {
  try {
    return cronstrue.toString(unix, { use24HourTimeFormat: true, verbose: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Invalid cron expression";
    throw new Error(msg);
  }
}

function nextRuns(unix: string, tz: string, count: number): Date[] {
  const interval = CronExpressionParser.parse(unix, {
    tz,
    currentDate: new Date(),
  });
  const runs: Date[] = [];
  for (let i = 0; i < count; i++) {
    runs.push(interval.next().toDate());
  }
  return runs;
}

export function analyzeCron(
  raw: string,
  flavor: CronFlavor,
  options: { timezone: string; nextCount?: number } = { timezone: "UTC" },
): CronResult {
  const input = normalizeWhitespace(raw);
  if (!input) {
    return { ok: false, error: "Enter a cron expression." };
  }

  const nextCount = options.nextCount ?? 5;
  const caveats: string[] = [];
  let unixExpression = input;

  try {
    if (flavor === "quartz") {
      const converted = quartzToUnix(input);
      unixExpression = converted.unix;
      caveats.push(...converted.caveats);
    } else if (flavor === "github") {
      validateUnixFields(input);
      caveats.push(
        "GitHub Actions schedules run in UTC only. Timezone selection below is for preview; the workflow itself always uses UTC.",
      );
      caveats.push(
        "GitHub may delay scheduled workflows during high load; do not rely on exact-second timing.",
      );
    } else if (flavor === "k8s") {
      validateUnixFields(input);
      caveats.push(
        "Kubernetes CronJob timezone depends on the kube-controller-manager / CronJobTimeZone feature. Many clusters still interpret schedules in the controller’s local time (often UTC).",
      );
    } else {
      validateUnixFields(input);
    }

    const description = describe(unixExpression);
    const runs = nextRuns(unixExpression, options.timezone, nextCount);
    const quartz = unixToQuartz(unixExpression);

    return {
      ok: true,
      expression: input,
      unixExpression,
      description,
      nextRuns: runs,
      caveats,
      exports: {
        unix: unixExpression,
        quartz,
        githubActions: toGithubActionsYaml(unixExpression),
        kubernetesCronJob: toKubernetesCronJob(unixExpression),
      },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Could not parse cron expression.",
    };
  }
}

export const EXAMPLES: Record<CronFlavor, { label: string; value: string }[]> = {
  unix: [
    { label: "Every minute", value: "* * * * *" },
    { label: "Every 5 minutes", value: "*/5 * * * *" },
    { label: "Every hour", value: "0 * * * *" },
    { label: "Daily at 09:00", value: "0 9 * * *" },
    { label: "Weekdays at 09:30", value: "30 9 * * 1-5" },
    { label: "First of month", value: "0 0 1 * *" },
  ],
  quartz: [
    { label: "Every 5 minutes", value: "0 */5 * * * ?" },
    { label: "Daily noon", value: "0 0 12 * * ?" },
    { label: "Weekdays 9:00", value: "0 0 9 ? * MON-FRI" },
    { label: "Every hour", value: "0 0 * * * ?" },
  ],
  github: [
    { label: "Every hour", value: "0 * * * *" },
    { label: "Every 15 minutes", value: "*/15 * * * *" },
    { label: "Daily midnight UTC", value: "0 0 * * *" },
    { label: "Weekdays 6am UTC", value: "0 6 * * 1-5" },
  ],
  k8s: [
    { label: "Every 5 minutes", value: "*/5 * * * *" },
    { label: "Every hour", value: "0 * * * *" },
    { label: "Daily 2am", value: "0 2 * * *" },
    { label: "Sunday midnight", value: "0 0 * * 0" },
  ],
};

export function formatRun(date: Date, timeZone: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone,
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZoneName: "short",
    }).format(date);
  } catch {
    return date.toISOString();
  }
}
