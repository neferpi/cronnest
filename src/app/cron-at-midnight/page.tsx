import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Cron at Midnight";
const description =
  "Cron expression to run at midnight: 0 0 * * *. Daily midnight jobs with timezone-aware next runs.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/cron-at-midnight",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 0 * * *"
    >
      <h2>Midnight cron</h2>
      <p>
        <code>0 0 * * *</code> is the classic daily-at-midnight schedule. Confirm
        whether midnight means UTC or local for your runner.
      </p>
      <h2>Alternatives</h2>
      <ul>
        <li>00:30: <code>30 0 * * *</code></li>
        <li>Weekday midnight: <code>0 0 * * 1-5</code></li>
      </ul>
    </SeoPage>
  );
}
