import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Cron Expression Explainer";
const description =
  "Paste any cron expression and get a plain-English explanation plus the next run times. Free, private, runs in your browser.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/cron-expression-explainer",
});

export default function Page() {
  return (
    <SeoPage title={title} description={description} defaultFlavor="unix">
      <h2>What is a cron expression?</h2>
      <p>
        A cron expression is a compact schedule used by Unix <code>cron</code>,
        CI systems, and job schedulers. The common 5-field Unix form is{" "}
        <code>minute hour day-of-month month day-of-week</code>.
      </p>
      <h2>How to use this explainer</h2>
      <ul>
        <li>Paste a 5-field Unix cron (for example <code>*/5 * * * *</code>).</li>
        <li>Read the plain-English description.</li>
        <li>Pick a timezone to preview the next N run times.</li>
        <li>Export to Quartz, GitHub Actions YAML, or a Kubernetes CronJob.</li>
      </ul>
      <h2>Field reference</h2>
      <ul>
        <li>
          <code>*</code> — any value
        </li>
        <li>
          <code>*/n</code> — every n units (e.g. <code>*/15</code> every 15
          minutes)
        </li>
        <li>
          <code>a-b</code> — inclusive range
        </li>
        <li>
          <code>a,b,c</code> — list of values
        </li>
      </ul>
    </SeoPage>
  );
}
