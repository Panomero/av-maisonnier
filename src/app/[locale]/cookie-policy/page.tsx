import type { Metadata } from "next";
import { isLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata(locale, "cookie-policy", {
    title: dict.legal.cookiePolicy.title,
    description: dict.legal.cookiePolicy.title,
    ogTitle: dict.legal.cookiePolicy.title,
    ogDescription: dict.legal.cookiePolicy.title,
  });
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const p = dict.legal.cookiePolicy;

  return <LegalPage title={p.title} updated={p.updated} sections={p.sections} />;
}
