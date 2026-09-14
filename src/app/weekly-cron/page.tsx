import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Weekly Cron Expression";
const description =
  "Cron expression to run every week: 0 0 * * 0. Pick the weekday, explain in plain English, see next runs.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/weekly-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 0 * * 0"
    >
      <h2>Once a week</h2>
      <p>
        <code>0 0 * * 0</code> runs at midnight on Sunday (0 = Sunday in most
        Unix crons). Use <code>1-5</code> style lists for other days.
      </p>
      <h2>Examples</h2>
      <ul>
        <li>Monday 09:00: <code>0 9 * * 1</code></li>
        <li>Friday 17:00: <code>0 17 * * 5</code></li>
      </ul>
    </SeoPage>
  );
}
