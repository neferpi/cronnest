import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Cron First of the Month";
const description =
  "Cron expression for the first of every month: 0 0 1 * *. Monthly billing and report schedules.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/cron-first-of-month",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 0 1 * *"
    >
      <h2>1st of the month</h2>
      <p>
        <code>0 0 1 * *</code> fires once at the start of each month. Popular for
        invoicing, retention jobs, and monthly digests.
      </p>
      <h2>Morning variant</h2>
      <p>
        First of month at 08:00: <code>0 8 1 * *</code>.
      </p>
    </SeoPage>
  );
}
