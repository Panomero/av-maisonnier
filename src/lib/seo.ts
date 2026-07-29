import type { Metadata } from "next";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import type { SeoBlock } from "@/i18n/dictionary.types";

/**
 * Builds a Metadata object with per-locale title/description, canonical URL
 * and hreflang alternates (including x-default) for a given route.
 *
 * @param locale current locale
 * @param slug route path without locale prefix, e.g. "" for home, "owners" for /owners
 * @param seo localized SEO copy
 */
export function buildMetadata(locale: Locale, slug: string, seo: SeoBlock): Metadata {
  const cleanSlug = slug ? `/${slug}` : "";
  const canonical = `${siteUrl}/${locale}${cleanSlug}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${siteUrl}/${l}${cleanSlug}`;
  }
  languages["x-default"] = `${siteUrl}/en${cleanSlug}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: canonical,
      siteName: "AV Maisonnier",
      locale,
      type: "website",
    },
  };
}
