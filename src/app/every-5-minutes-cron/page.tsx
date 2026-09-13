import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Every 5 Minutes Cron Expression";
const description =
  "Cron expression to run every 5 minutes: */5 * * * *. Plain English, next runs, and format converters.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/every-5-minutes-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="*/5 * * * *"
    >
      <h2>Run a job every 5 minutes</h2>
      <p>
        The Unix cron <code>*/5 * * * *</code> means “at every 5th minute”
        (0, 5, 10, …, 55). It is one of the most common schedules for health
        checks and lightweight polling.
      </p>
      <h2>Other flavors</h2>
      <ul>
        <li>
          Quartz: <code>0 */5 * * * ?</code>
        </li>
        <li>
          GitHub Actions: <code>cron: &apos;*/5 * * * *&apos;</code> (UTC; may
          be delayed)
        </li>
        <li>
          Kubernetes: <code>schedule: &quot;*/5 * * * *&quot;</code>
        </li>
      </ul>
    </SeoPage>
  );
}
