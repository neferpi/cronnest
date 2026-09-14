import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Cron Syntax Cheat Sheet";
const description =
  "Cron syntax cheat sheet with examples. Special characters, ranges, steps, and next-run previews.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/cron-syntax-cheat-sheet",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultExpression="*/15 9-17 * * 1-5"
    >
      <h2>Quick syntax reference</h2>
      <ul>
        <li><code>*</code> — any value</li>
        <li><code>*/n</code> — every n units</li>
        <li><code>a-b</code> — inclusive range</li>
        <li><code>a,b,c</code> — list</li>
      </ul>
      <h2>Example</h2>
      <p>
        <code>*/15 9-17 * * 1-5</code> means every 15 minutes during 09:00–17:00
        on weekdays.
      </p>
    </SeoPage>
  );
}
