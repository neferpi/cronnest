import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Every Minute Cron Expression";
const description =
  "Cron expression to run every minute: * * * * *. Plain English, next runs, and exports for K8s and GitHub Actions.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/every-minute-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="* * * * *"
    >
      <h2>Run every minute</h2>
      <p>
        The Unix cron <code>* * * * *</code> fires every minute. Use it sparingly —
        many platforms throttle or discourage one-minute schedules.
      </p>
      <h2>Other flavors</h2>
      <ul>
        <li>Quartz: <code>0 * * * * ?</code></li>
        <li>GitHub Actions: often delayed; prefer ≥5 minutes</li>
        <li>Kubernetes: <code>schedule: "* * * * *"</code></li>
      </ul>
    </SeoPage>
  );
}
