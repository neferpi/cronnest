"use client";

import { useEffect, useMemo, useState } from "react";
import {
  EXAMPLES,
  analyzeCron,
  formatRun,
} from "@/lib/cron";
import type { CronFlavor } from "@/lib/site";
import { TIMEZONE_PRESETS, detectTimezone } from "@/lib/timezones";
import { CopyButton } from "./CopyButton";

const FLAVORS: { id: CronFlavor; label: string; hint: string }[] = [
  { id: "unix", label: "Unix", hint: "5-field: min hour dom month dow" },
  { id: "quartz", label: "Quartz", hint: "6/7-field Scheduler (best-effort)" },
  {
    id: "github",
    label: "GitHub Actions",
    hint: "schedule cron (UTC only in Actions)",
  },
  {
    id: "k8s",
    label: "Kubernetes",
    hint: "CronJob schedule + YAML export",
  },
];

type Props = {
  heading?: string;
  defaultFlavor?: CronFlavor;
  defaultExpression?: string;
  defaultTimezone?: string;
};

export function CronExplainer({
  heading = "Cron explainer",
  defaultFlavor = "unix",
  defaultExpression = "*/5 * * * *",
  defaultTimezone,
}: Props) {
  const [flavor, setFlavor] = useState<CronFlavor>(defaultFlavor);
  const [expression, setExpression] = useState(defaultExpression);
  const [timezone, setTimezone] = useState(defaultTimezone ?? "UTC");
  const [nextCount, setNextCount] = useState(5);
  const [exportTab, setExportTab] = useState<
    "unix" | "quartz" | "github" | "k8s"
  >("unix");

  useEffect(() => {
    if (!defaultTimezone) {
      setTimezone(detectTimezone());
    }
  }, [defaultTimezone]);

  // Sync flavor-specific default when switching flavors if expression empty
  useEffect(() => {
    const examples = EXAMPLES[flavor];
    if (examples[0] && !expression.trim()) {
      setExpression(examples[0].value);
    }
  }, [flavor, expression]);

  const result = useMemo(
    () => analyzeCron(expression, flavor, { timezone, nextCount }),
    [expression, flavor, timezone, nextCount],
  );

  const exportValue = result.ok
    ? exportTab === "unix"
      ? result.exports.unix
      : exportTab === "quartz"
        ? result.exports.quartz
        : exportTab === "github"
          ? result.exports.githubActions
          : result.exports.kubernetesCronJob
    : "";

  return (
    <section
      className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6"
      aria-label={heading}
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {heading}
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Paste a cron → plain English + next runs. Everything stays in your
            browser.
          </p>
        </div>
      </div>

      {/* Flavor tabs */}
      <div
        role="tablist"
        aria-label="Cron flavor"
        className="mb-4 flex flex-wrap gap-1 rounded-xl bg-zinc-100 p-1 dark:bg-zinc-800"
      >
        {FLAVORS.map((f) => {
          const active = flavor === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setFlavor(f.id);
                const first = EXAMPLES[f.id][0];
                if (first) setExpression(first.value);
                if (f.id === "github") setExportTab("github");
                else if (f.id === "k8s") setExportTab("k8s");
                else if (f.id === "quartz") setExportTab("quartz");
                else setExportTab("unix");
              }}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                active
                  ? "bg-white text-violet-700 shadow-sm dark:bg-zinc-950 dark:text-violet-300"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      <p className="mb-4 text-xs text-zinc-500">
        {FLAVORS.find((f) => f.id === flavor)?.hint}
      </p>

      {/* Input */}
      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Cron expression
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-2.5 font-mono text-sm text-zinc-900 outline-none ring-violet-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-100"
          placeholder={EXAMPLES[flavor][0]?.value}
          aria-invalid={result.ok ? undefined : true}
        />
      </label>

      {/* Examples */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {EXAMPLES[flavor].map((ex) => (
          <button
            key={ex.value + ex.label}
            type="button"
            onClick={() => setExpression(ex.value)}
            className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600 transition hover:border-violet-400 hover:text-violet-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-violet-500 dark:hover:text-violet-300"
          >
            {ex.label}
          </button>
        ))}
      </div>

      {/* Timezone + count */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Timezone (preview)
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-violet-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-100"
          >
            {!TIMEZONE_PRESETS.some((t) => t.value === timezone) && (
              <option value={timezone}>{timezone}</option>
            )}
            {TIMEZONE_PRESETS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Next runs
          <select
            value={nextCount}
            onChange={(e) => setNextCount(Number(e.target.value))}
            className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-violet-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-100"
          >
            {[5, 10, 15, 20].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Result */}
      <div className="mt-6 space-y-4">
        {!result.ok ? (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200"
          >
            {result.error}
          </div>
        ) : (
          <>
            <div className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 dark:border-violet-900 dark:bg-violet-950/40">
              <p className="text-xs font-medium uppercase tracking-wide text-violet-600 dark:text-violet-400">
                Plain English
              </p>
              <p className="mt-1 text-base font-medium text-zinc-900 dark:text-zinc-50">
                {result.description}
              </p>
              {result.unixExpression !== result.expression && (
                <p className="mt-2 font-mono text-xs text-zinc-500">
                  Normalized Unix: {result.unixExpression}
                </p>
              )}
            </div>

            {result.caveats.length > 0 && (
              <ul className="space-y-1.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
                {result.caveats.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span aria-hidden>⚠</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            )}

            <div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Next {result.nextRuns.length} runs ({timezone})
                </h3>
              </div>
              <ol className="divide-y divide-zinc-100 overflow-hidden rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-700">
                {result.nextRuns.map((d, i) => (
                  <li
                    key={d.toISOString() + i}
                    className="flex flex-wrap items-center justify-between gap-2 bg-zinc-50/50 px-3 py-2.5 text-sm dark:bg-zinc-950/40"
                  >
                    <span className="font-mono text-zinc-800 dark:text-zinc-200">
                      {formatRun(d, timezone)}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {d.toISOString()}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Export */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Export
              </h3>
              <div
                role="tablist"
                className="mb-2 flex flex-wrap gap-1"
              >
                {(
                  [
                    ["unix", "Unix"],
                    ["quartz", "Quartz"],
                    ["github", "GitHub Actions"],
                    ["k8s", "K8s YAML"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={exportTab === id}
                    onClick={() => setExportTab(id)}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                      exportTab === id
                        ? "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200"
                        : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="relative">
                <pre className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:border-zinc-700">
                  <code>{exportValue}</code>
                </pre>
                <div className="absolute right-2 top-2">
                  <CopyButton value={exportValue} label="Copy" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
