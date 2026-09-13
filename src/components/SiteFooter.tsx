import Link from "next/link";
import { SEO_PAGES, SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">
              {SITE_NAME}
            </p>
            <p className="mt-1 max-w-sm text-sm text-zinc-500">
              Free multi-flavor cron explainer. No ads, no signup, runs in your
              browser.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Guides
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-500">
              {SEO_PAGES.map((p) => (
                <li key={p.path}>
                  <Link
                    href={p.path}
                    className="hover:text-violet-600 dark:hover:text-violet-400"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-400">
          © {new Date().getFullYear()} {SITE_NAME}. Open source.
        </p>
      </div>
    </footer>
  );
}
