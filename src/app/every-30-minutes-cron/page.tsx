import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Every 30 Minutes Cron Expression";
const description =
  "Cron expression to run every 30 minutes: */30 * * * *. Plain English and next run preview.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/every-30-minutes-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="*/30 * * * *"
    >
      <h2>Twice per hour</h2>
      <p>
        <code>*/30 * * * *</code> (or <code>0,30 * * * *</code>) runs at minute
        0 and 30 of every hour.
      </p>
      <h2>Half-past only</h2>
      <p>
        Use <code>30 * * * *</code> if you only want :30 and not the top of the
        hour.
      </p>
    </SeoPage>
  );
}
