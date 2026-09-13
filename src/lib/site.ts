export const SITE_URL = "https://cronnest.app";
export const SITE_NAME = "Cronnest";
export const SITE_DESCRIPTION =
  "Free multi-flavor cron expression explainer. Paste a cron to get plain English, next run times, and convert between Unix, Quartz, GitHub Actions, and Kubernetes CronJob formats.";

export const SEO_PAGES = [
  {
    path: "/cron-expression-explainer",
    title: "Cron Expression Explainer",
    description:
      "Paste any cron expression and get a plain-English explanation plus the next run times. Free, private, runs in your browser.",
  },
  {
    path: "/github-actions-cron",
    title: "GitHub Actions Cron Schedule",
    description:
      "Build and understand GitHub Actions schedule cron expressions. See next run times in UTC with clear caveats.",
  },
  {
    path: "/quartz-cron",
    title: "Quartz Cron Expression Explainer",
    description:
      "Explain Quartz Scheduler cron expressions (6/7 fields) in plain English. Best-effort conversion with clear caveats.",
  },
  {
    path: "/kubernetes-cronjob",
    title: "Kubernetes CronJob Generator",
    description:
      "Turn a cron expression into a Kubernetes CronJob YAML snippet. Preview schedule meaning and next run times.",
  },
  {
    path: "/every-5-minutes-cron",
    title: "Every 5 Minutes Cron Expression",
    description:
      "Cron expression to run every 5 minutes: */5 * * * *. Plain English, next runs, and format converters.",
  },
  {
    path: "/every-15-minutes-cron",
    title: "Every 15 Minutes Cron Expression",
    description:
      "Cron expression to run every 15 minutes: */15 * * * *. Explain, preview next runs, export for K8s or GitHub Actions.",
  },
  {
    path: "/every-hour-cron",
    title: "Every Hour Cron Expression",
    description:
      "Cron expression to run every hour: 0 * * * *. Plain English explanation and timezone-aware next run times.",
  },
] as const;

export type CronFlavor = "unix" | "quartz" | "github" | "k8s";
