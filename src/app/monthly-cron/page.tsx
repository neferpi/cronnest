import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Monthly Cron Expression";
const description =
  "Cron expression to run every month: 0 0 1 * *. First-of-month schedules with next-run preview.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/monthly-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 0 1 * *"
    >
      <h2>Once a month</h2>
      <p>
        <code>0 0 1 * *</code> runs at midnight on the 1st of every month. Change
        the day-of-month field for other dates.
      </p>
      <h2>Caveat</h2>
      <p>
        Not every month has a 31st. Prefer the 1st or use Quartz/last-day features
        when you need end-of-month reliably.
      </p>
    </SeoPage>
  );
}
