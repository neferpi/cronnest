import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Jenkins Cron Syntax";
const description =
  "Jenkins cron schedule examples explained. H-hashed ranges, plain English, and next-run previews.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/jenkins-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="H/15 * * * *"
    >
      <h2>Jenkins schedule fields</h2>
      <p>
        Jenkins uses a cron-like syntax and adds <code>H</code> for hashed
        values that spread load. Example: <code>H/15 * * * *</code> roughly every
        15 minutes without aligning every job to :00.
      </p>
      <h2>Classic examples</h2>
      <ul>
        <li>Hourly: <code>H * * * *</code></li>
        <li>Daily at midnight-ish: <code>H 0 * * *</code></li>
      </ul>
    </SeoPage>
  );
}
