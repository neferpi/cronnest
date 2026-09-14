import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Every 10 Minutes Cron Expression";
const description =
  "Cron expression to run every 10 minutes: */10 * * * *. Explain, preview next runs, convert formats.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/every-10-minutes-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="*/10 * * * *"
    >
      <h2>Every 10 minutes</h2>
      <p>
        <code>*/10 * * * *</code> runs at minutes 0, 10, 20, 30, 40, and 50.
        A solid cadence for lightweight polling and cache warmers.
      </p>
      <h2>Variants</h2>
      <ul>
        <li>Offset start: <code>5-59/10 * * * *</code></li>
        <li>Quartz: <code>0 */10 * * * ?</code></li>
      </ul>
    </SeoPage>
  );
}
