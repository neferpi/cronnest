import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Cron to Human Readable";
const description =
  "Translate cron expressions to human-readable English. See what a schedule means and when it runs next.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/cron-to-human-readable",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="*/5 * * * *"
    >
      <h2>Cron → plain English</h2>
      <p>
        Paste any 5-field Unix cron and get a sentence you can share with
        teammates who do not speak cron syntax — plus the next few run times.
      </p>
      <h2>Why it helps</h2>
      <p>
        Human-readable schedules catch mistakes like “every minute” when you
        meant “every hour” before they reach production.
      </p>
    </SeoPage>
  );
}
