import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Daily Cron Expression";
const description =
  "Cron expression to run every day: 0 0 * * *. Customize the hour, preview next runs, export for CI and K8s.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/daily-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 0 * * *"
    >
      <h2>Run once per day</h2>
      <p>
        <code>0 0 * * *</code> runs daily at midnight. Change the hour field for
        other times — e.g. <code>0 9 * * *</code> for 09:00.
      </p>
      <h2>Remember timezones</h2>
      <p>
        Cron daemons and GitHub Actions evaluate in a specific timezone (often
        UTC). Preview next runs in the zone your job actually uses.
      </p>
    </SeoPage>
  );
}
