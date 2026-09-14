import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Linux Crontab Examples";
const description =
  "Practical Linux crontab examples with plain-English explanations and next run times you can verify.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/linux-crontab-examples",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="0 2 * * *"
    >
      <h2>Useful crontab examples</h2>
      <ul>
        <li>Daily backups at 02:00: <code>0 2 * * *</code></li>
        <li>Every 5 minutes: <code>*/5 * * * *</code></li>
        <li>Weekdays at 09:00: <code>0 9 * * 1-5</code></li>
        <li>First of month: <code>0 0 1 * *</code></li>
      </ul>
      <h2>Edit safely</h2>
      <p>
        Use <code>crontab -e</code> and verify with Cronnest before saving so a
        typo does not spam your inbox or miss a backup window.
      </p>
    </SeoPage>
  );
}
