import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Airflow Cron Schedule";
const description =
  "Apache Airflow cron timetable helpers. Explain DAG schedules and preview upcoming run times.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/airflow-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 * * * *"
    >
      <h2>Airflow DAG schedules</h2>
      <p>
        Airflow accepts cron-style schedules for DAGs. <code>0 * * * *</code>{' '}
        means hourly at minute 0. Remember Airflow&apos;s execution-date semantics
        when debugging missed runs.
      </p>
      <h2>Verify before deploy</h2>
      <p>
        Paste the expression here to double-check plain English and next runs,
        then set <code>schedule</code> / <code>timetable</code> in your DAG.
      </p>
    </SeoPage>
  );
}
