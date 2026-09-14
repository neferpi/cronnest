import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Cron at Noon";
const description =
  "Cron expression to run at noon: 0 12 * * *. Explain, preview, and export the schedule.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/cron-at-noon",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 12 * * *"
    >
      <h2>Noon every day</h2>
      <p>
        <code>0 12 * * *</code> runs at 12:00. Pair with a timezone preview so
        “noon” matches the region you care about.
      </p>
      <h2>Business-hours noon</h2>
      <p>
        Weekdays at noon: <code>0 12 * * 1-5</code>.
      </p>
    </SeoPage>
  );
}
