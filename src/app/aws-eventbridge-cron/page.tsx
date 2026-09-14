import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "AWS EventBridge Cron Expression";
const description =
  "Understand AWS EventBridge cron/rate schedules. Map common patterns and preview next run times.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/aws-eventbridge-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultFlavor="quartz"
      defaultExpression="0 12 * * ? *"
    >
      <h2>EventBridge schedules</h2>
      <p>
        Amazon EventBridge supports cron and rate expressions. Its cron form is
        closer to Quartz (6+ fields) than classic Unix 5-field cron.
      </p>
      <h2>Example</h2>
      <p>
        Daily at noon UTC in EventBridge-style cron often looks like{' '}
        <code>0 12 * * ? *</code>. Use Cronnest to sanity-check the meaning, then
        confirm against AWS docs for your region.
      </p>
    </SeoPage>
  );
}
