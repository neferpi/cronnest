import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Every Day at Midnight Cron";
const description =
  "Cron for every day at midnight: 0 0 * * *. Daily rollover jobs with clear timezone guidance.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/every-day-at-midnight-cron",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 0 * * *"
    >
      <h2>Daily midnight job</h2>
      <p>
        <code>0 0 * * *</code> is the go-to expression for end-of-day rollups.
        Always confirm the daemon timezone — midnight UTC is afternoon in
        California.
      </p>
    </SeoPage>
  );
}
