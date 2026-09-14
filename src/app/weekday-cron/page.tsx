import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Weekday Cron Expression";
const description =
  "Cron to run on weekdays only: 0 9 * * 1-5. Plain English, next runs, and CI/K8s exports.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/weekday-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 9 * * 1-5"
    >
      <h2>Monday–Friday schedules</h2>
      <p>
        <code>0 9 * * 1-5</code> runs at 09:00 on weekdays. Ideal for business-hours
        reports and non-urgent batch jobs.
      </p>
      <h2>Related</h2>
      <ul>
        <li>Weekends only: <code>0 9 * * 0,6</code></li>
        <li>Every weekday hourly: <code>0 * * * 1-5</code></li>
      </ul>
    </SeoPage>
  );
}
