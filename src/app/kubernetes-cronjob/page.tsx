import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Kubernetes CronJob Generator";
const description =
  "Turn a cron expression into a Kubernetes CronJob YAML snippet. Preview schedule meaning and next run times.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/kubernetes-cronjob",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultFlavor="k8s"
      defaultExpression="0 2 * * *"
    >
      <h2>Kubernetes CronJob schedules</h2>
      <p>
        A <code>CronJob</code> uses the standard 5-field Unix cron syntax in{" "}
        <code>spec.schedule</code>. Optionally set <code>spec.timeZone</code>{" "}
        when your cluster supports the CronJob time zone feature.
      </p>
      <h2>What this tool generates</h2>
      <ul>
        <li>A ready-to-adapt <code>batch/v1 CronJob</code> YAML snippet</li>
        <li>Plain-English explanation of the schedule</li>
        <li>Timezone-aware next run previews (verify against your cluster)</li>
      </ul>
      <h2>Caveats</h2>
      <ul>
        <li>
          Without <code>timeZone</code>, many clusters interpret the schedule in
          the controller manager&apos;s local time (often UTC).
        </li>
        <li>
          Use <code>concurrencyPolicy</code>, history limits, and deadlines to
          avoid overlapping or stuck jobs.
        </li>
      </ul>
    </SeoPage>
  );
}
