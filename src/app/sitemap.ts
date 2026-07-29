import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/i18n/config";

const slugs = [
  "",
  "owners",
  "services",
  "agencies",
  "how-it-works",
  "about",
  "contact",
  "privacy-policy",
  "cookie-policy",
  "legal-notice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const slug of slugs) {
    for (const locale of locales) {
      const path = slug ? `/${locale}/${slug}` : `/${locale}`;
      const languages: Record<string, string> = {};
      for (const l of locales) {
        languages[l] = `${siteUrl}${slug ? `/${l}/${slug}` : `/${l}`}`;
      }

      entries.push({
        url: `${siteUrl}${path}`,
        changeFrequency: "monthly",
        priority: slug === "" ? 1 : 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
