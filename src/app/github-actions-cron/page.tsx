import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "GitHub Actions Cron Schedule";
const description =
  "Build and understand GitHub Actions schedule cron expressions. See next run times in UTC with clear caveats.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/github-actions-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultFlavor="github"
      defaultExpression="0 * * * *"
      defaultTimezone="UTC"
    >
      <h2>GitHub Actions schedule cron</h2>
      <p>
        Workflows can run on a schedule using the standard 5-field Unix cron
        syntax under <code>on.schedule</code>. GitHub always evaluates these
        schedules in <strong>UTC</strong>.
      </p>
      <h2>Example</h2>
      <p>
        Run every hour at minute 0:
      </p>
      <p>
        <code>cron: &apos;0 * * * *&apos;</code>
      </p>
      <h2>Caveats</h2>
      <ul>
        <li>Schedules use UTC — convert local times carefully.</li>
        <li>
          GitHub may delay jobs during peak load; treat schedules as
          approximate.
        </li>
        <li>
          The shortest supported interval is every 5 minutes; very frequent
          schedules may be throttled.
        </li>
      </ul>
    </SeoPage>
  );
}
