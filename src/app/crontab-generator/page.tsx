import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Crontab Generator";
const description =
  "Free crontab generator and explainer. Build Unix cron expressions, see plain English and next run times.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/crontab-generator",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 * * * *"
    >
      <h2>Generate and understand crontabs</h2>
      <p>
        Use Cronnest as a crontab generator: start from a common pattern, read
        the plain-English meaning, then copy Unix, Quartz, GitHub Actions, or
        Kubernetes forms.
      </p>
      <h2>Field order</h2>
      <p>
        Unix cron fields are <code>minute hour day-of-month month day-of-week</code>.
      </p>
    </SeoPage>
  );
}
