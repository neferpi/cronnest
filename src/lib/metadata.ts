import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

export function buildPageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  const fullTitle =
    opts.path === "/" ? opts.title : `${opts.title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
    },
  };
}
