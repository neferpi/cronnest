import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Every 15 Minutes Cron Expression";
const description =
  "Cron expression to run every 15 minutes: */15 * * * *. Explain, preview next runs, export for K8s or GitHub Actions.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/every-15-minutes-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="*/15 * * * *"
    >
      <h2>Run a job every 15 minutes</h2>
      <p>
        Use <code>*/15 * * * *</code> to fire at minutes 0, 15, 30, and 45 of
        every hour. A good default for moderate-frequency sync jobs.
      </p>
      <h2>Related schedules</h2>
      <ul>
        <li>
          Every 5 minutes: <code>*/5 * * * *</code>
        </li>
        <li>
          Every 30 minutes: <code>*/30 * * * *</code>
        </li>
        <li>
          Every hour: <code>0 * * * *</code>
        </li>
      </ul>
    </SeoPage>
  );
}
