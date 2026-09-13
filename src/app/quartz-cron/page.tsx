import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Quartz Cron Expression Explainer";
const description =
  "Explain Quartz Scheduler cron expressions (6/7 fields) in plain English. Best-effort conversion with clear caveats.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/quartz-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultFlavor="quartz"
      defaultExpression="0 0 12 * * ?"
    >
      <h2>Quartz vs Unix cron</h2>
      <p>
        Quartz Scheduler uses 6 or 7 fields: optional{" "}
        <code>seconds</code>, then minute, hour, day-of-month, month,
        day-of-week, and optional year. It also supports <code>?</code>,{" "}
        <code>L</code>, <code>W</code>, and <code>#</code>.
      </p>
      <h2>Best-effort conversion</h2>
      <p>
        Cronnest maps common Quartz expressions to a 5-field Unix form for
        explanation and next-run previews. Seconds and year fields are ignored;
        advanced tokens like <code>L</code>/<code>W</code>/<code>#</code> are
        stripped. Always verify critical schedules in your Quartz runtime.
      </p>
      <h2>Example</h2>
      <ul>
        <li>
          <code>0 0 12 * * ?</code> — every day at noon (seconds = 0)
        </li>
        <li>
          <code>0 */5 * * * ?</code> — every 5 minutes
        </li>
      </ul>
    </SeoPage>
  );
}
