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
  {
    path: "/every-minute-cron",
    title: "Every Minute Cron Expression",
    description:
      "Cron expression to run every minute: * * * * *. Plain English, next runs, and exports for K8s and GitHub Actions.",
  },
  {
    path: "/every-10-minutes-cron",
    title: "Every 10 Minutes Cron Expression",
    description:
      "Cron expression to run every 10 minutes: */10 * * * *. Explain, preview next runs, convert formats.",
  },
  {
    path: "/every-30-minutes-cron",
    title: "Every 30 Minutes Cron Expression",
    description:
      "Cron expression to run every 30 minutes: */30 * * * *. Plain English and next run preview.",
  },
  {
    path: "/daily-cron",
    title: "Daily Cron Expression",
    description:
      "Cron expression to run every day: 0 0 * * *. Customize the hour, preview next runs, export for CI and K8s.",
  },
  {
    path: "/weekly-cron",
    title: "Weekly Cron Expression",
    description:
      "Cron expression to run every week: 0 0 * * 0. Pick the weekday, explain in plain English, see next runs.",
  },
  {
    path: "/monthly-cron",
    title: "Monthly Cron Expression",
    description:
      "Cron expression to run every month: 0 0 1 * *. First-of-month schedules with next-run preview.",
  },
  {
    path: "/weekday-cron",
    title: "Weekday Cron Expression",
    description:
      "Cron to run on weekdays only: 0 9 * * 1-5. Plain English, next runs, and CI/K8s exports.",
  },
  {
    path: "/cron-at-midnight",
    title: "Cron at Midnight",
    description:
      "Cron expression to run at midnight: 0 0 * * *. Daily midnight jobs with timezone-aware next runs.",
  },
  {
    path: "/cron-at-noon",
    title: "Cron at Noon",
    description:
      "Cron expression to run at noon: 0 12 * * *. Explain, preview, and export the schedule.",
  },
  {
    path: "/crontab-generator",
    title: "Crontab Generator",
    description:
      "Free crontab generator and explainer. Build Unix cron expressions, see plain English and next run times.",
  },
  {
    path: "/cron-expression-generator",
    title: "Cron Expression Generator",
    description:
      "Generate cron expressions online. Start from popular schedules, explain them, and export to multiple flavors.",
  },
  {
    path: "/cron-syntax-cheat-sheet",
    title: "Cron Syntax Cheat Sheet",
    description:
      "Cron syntax cheat sheet with examples. Special characters, ranges, steps, and next-run previews.",
  },
  {
    path: "/every-2-hours-cron",
    title: "Every 2 Hours Cron Expression",
    description:
      "Cron expression to run every 2 hours: 0 */2 * * *. Plain English and timezone-aware next runs.",
  },
  {
    path: "/every-6-hours-cron",
    title: "Every 6 Hours Cron Expression",
    description:
      "Cron expression to run every 6 hours: 0 */6 * * *. Explain the schedule and preview upcoming runs.",
  },
  {
    path: "/every-day-at-midnight-cron",
    title: "Every Day at Midnight Cron",
    description:
      "Cron for every day at midnight: 0 0 * * *. Daily rollover jobs with clear timezone guidance.",
  },
  {
    path: "/cron-every-sunday",
    title: "Cron Every Sunday",
    description:
      "Cron expression to run every Sunday: 0 0 * * 0. Weekly Sunday jobs with next-run preview.",
  },
  {
    path: "/cron-first-of-month",
    title: "Cron First of the Month",
    description:
      "Cron expression for the first of every month: 0 0 1 * *. Monthly billing and report schedules.",
  },
  {
    path: "/linux-crontab-examples",
    title: "Linux Crontab Examples",
    description:
      "Practical Linux crontab examples with plain-English explanations and next run times you can verify.",
  },
  {
    path: "/cron-to-human-readable",
    title: "Cron to Human Readable",
    description:
      "Translate cron expressions to human-readable English. See what a schedule means and when it runs next.",
  },
  {
    path: "/aws-eventbridge-cron",
    title: "AWS EventBridge Cron Expression",
    description:
      "Understand AWS EventBridge cron/rate schedules. Map common patterns and preview next run times.",
  },
  {
    path: "/spring-cron-expression",
    title: "Spring Cron Expression Explainer",
    description:
      "Explain Spring @Scheduled cron expressions (6 fields). Plain English and next-run guidance for Spring apps.",
  },
  {
    path: "/airflow-cron",
    title: "Airflow Cron Schedule",
    description:
      "Apache Airflow cron timetable helpers. Explain DAG schedules and preview upcoming run times.",
  },
  {
    path: "/jenkins-cron",
    title: "Jenkins Cron Syntax",
    description:
      "Jenkins cron schedule examples explained. H-hashed ranges, plain English, and next-run previews.",
  },
] as const;

export type CronFlavor = "unix" | "quartz" | "github" | "k8s";
