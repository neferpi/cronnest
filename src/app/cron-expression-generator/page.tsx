import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Cron Expression Generator";
const description =
  "Generate cron expressions online. Start from popular schedules, explain them, and export to multiple flavors.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/cron-expression-generator",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="*/5 * * * *"
    >
      <h2>Generate a cron expression</h2>
      <p>
        Pick a starting expression, tweak fields, and confirm the next run times
        before you ship the schedule to production.
      </p>
      <h2>Export targets</h2>
      <ul>
        <li>Classic Unix / Linux crontab</li>
        <li>Quartz (Spring, Java schedulers)</li>
        <li>GitHub Actions <code>schedule</code></li>
        <li>Kubernetes CronJob YAML</li>
      </ul>
    </SeoPage>
  );
}
