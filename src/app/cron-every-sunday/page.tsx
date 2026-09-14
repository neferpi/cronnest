import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Cron Every Sunday";
const description =
  "Cron expression to run every Sunday: 0 0 * * 0. Weekly Sunday jobs with next-run preview.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/cron-every-sunday",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 0 * * 0"
    >
      <h2>Sunday schedules</h2>
      <p>
        <code>0 0 * * 0</code> (or <code>0 0 * * SUN</code> on some systems) runs
        at midnight each Sunday. Change the hour for morning maintenance windows.
      </p>
      <h2>Note on day numbers</h2>
      <p>
        Both <code>0</code> and <code>7</code> often mean Sunday in Unix cron —
        verify for your specific implementation.
      </p>
    </SeoPage>
  );
}
