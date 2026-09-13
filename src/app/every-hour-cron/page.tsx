import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Every Hour Cron Expression";
const description =
  "Cron expression to run every hour: 0 * * * *. Plain English explanation and timezone-aware next run times.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/every-hour-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 * * * *"
    >
      <h2>Run a job every hour</h2>
      <p>
        The expression <code>0 * * * *</code> runs at minute 0 of every hour
        (1:00, 2:00, …). To run at a different minute, change the first field
        (for example <code>30 * * * *</code> for half past).
      </p>
      <h2>Daily variant</h2>
      <p>
        For once per day at 09:00 use <code>0 9 * * *</code>. For weekdays
        only: <code>0 9 * * 1-5</code>.
      </p>
    </SeoPage>
  );
}
