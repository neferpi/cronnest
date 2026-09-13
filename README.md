# Cronnest

Free multi-flavor cron expression explainer. Paste a cron → plain English, next run times (timezone aware), and exports for Unix, Quartz, GitHub Actions, and Kubernetes CronJob YAML. No auth, no billing, no ads — everything runs in the browser.

## Features

- **Unix 5-field** cron explained with [cronstrue](https://github.com/bradymholt/cRonstrue) + next N runs via [cron-parser](https://github.com/harrisiirak/cron-parser)
- **Timezone-aware** next-run previews
- Tabs / modes for **Unix**, **Quartz** (best-effort), **GitHub Actions**, and **Kubernetes CronJob**
- Export panel: Unix string, Quartz string, GitHub Actions YAML, K8s CronJob YAML
- SEO landing pages with unique meta:
  - `/cron-expression-explainer`
  - `/github-actions-cron`
  - `/quartz-cron`
  - `/kubernetes-cronjob`
  - `/every-5-minutes-cron`
  - `/every-15-minutes-cron`
  - `/every-hour-cron`
- `sitemap.xml` and `robots.txt` (force-static)

## Caveats

- Unix 5-field expressions are the primary, well-tested path.
- Quartz (6/7 fields) and day-of-month/day-of-week `?` / `L` / `W` / `#` support is **best-effort** — verify in your Quartz runtime.
- GitHub Actions schedules always run in **UTC** and may be delayed under load.
- Kubernetes CronJob timezone depends on cluster configuration / `spec.timeZone`.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Static export (`output: "export"`, `images.unoptimized`)
- Client-side only for the tool (no backend required)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm install
npm run build
```

Static files are written to `out/`.

## License

MIT
