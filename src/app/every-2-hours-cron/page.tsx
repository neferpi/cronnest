import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Every 2 Hours Cron Expression";
const description =
  "Cron expression to run every 2 hours: 0 */2 * * *. Plain English and timezone-aware next runs.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/every-2-hours-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 */2 * * *"
    >
      <h2>Every two hours</h2>
      <p>
        <code>0 */2 * * *</code> runs at minute 0 of every other hour (00:00,
        02:00, 04:00, …).
      </p>
      <h2>Offset</h2>
      <p>
        Start at 01:00 instead: <code>0 1-23/2 * * *</code>.
      </p>
    </SeoPage>
  );
}
