import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Spring Cron Expression Explainer";
const description =
  "Explain Spring @Scheduled cron expressions (6 fields). Plain English and next-run guidance for Spring apps.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/spring-cron-expression",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultFlavor="quartz"
      defaultExpression="0 0 * * * *"
    >
      <h2>Spring @Scheduled cron</h2>
      <p>
        Spring&apos;s <code>@Scheduled(cron = &quot;...&quot;)</code> uses a 6-field form
        (seconds first), similar to Quartz. Example: <code>0 0 * * * *</code> =
        top of every hour.
      </p>
      <h2>Tip</h2>
      <p>
        Remember the leading seconds field — it is the most common source of
        off-by-one mistakes when copying Unix crons into Spring.
      </p>
    </SeoPage>
  );
}
