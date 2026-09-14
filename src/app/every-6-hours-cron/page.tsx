import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Every 6 Hours Cron Expression";
const description =
  "Cron expression to run every 6 hours: 0 */6 * * *. Explain the schedule and preview upcoming runs.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/every-6-hours-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 */6 * * *"
    >
      <h2>Four times a day</h2>
      <p>
        <code>0 */6 * * *</code> runs at 00:00, 06:00, 12:00, and 18:00. Common
        for batch syncs that should not run hourly.
      </p>
      <h2>Custom start</h2>
      <p>
        For 03:00 / 09:00 / 15:00 / 21:00 use <code>0 3-21/6 * * *</code>.
      </p>
    </SeoPage>
  );
}
