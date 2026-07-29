import { locales, isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import RevealInit from "@/components/RevealInit";
import HtmlLangSync from "@/components/HtmlLangSync";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <HtmlLangSync locale={locale} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:bg-charcoal focus:text-offwhite focus:px-4 focus:py-2 focus:text-sm"
      >
        {dict.nav.skipToContent}
      </a>
      <Header locale={locale} dict={dict} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} dict={dict} />
      <CookieBanner dict={dict} />
      <RevealInit />
    </>
  );
}
