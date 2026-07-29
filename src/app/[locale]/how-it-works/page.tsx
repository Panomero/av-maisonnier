import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { Eyebrow, ItemList, PrimaryLink } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata(locale, "how-it-works", dict.howItWorks.seo);
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const w = dict.howItWorks;

  return (
    <>
      <section className="container-page pt-32 pb-16 sm:pt-40">
        <Reveal className="max-w-2xl">
          <Eyebrow>{dict.nav.howItWorks}</Eyebrow>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
            {w.hero.title}
          </h1>
        </Reveal>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {w.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80} className="border-t border-line pt-6">
              <span className="font-serif-display text-3xl text-bronze">{step.number}</span>
              <h2 className="font-serif-display text-xl mt-3">{step.title}</h2>
              <p className="mt-3 text-sm text-charcoal/75 leading-relaxed">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="container-page max-w-2xl">
          <Reveal>
            <h2 className="font-serif-display text-2xl sm:text-3xl">{w.principles.title}</h2>
            <div className="mt-8">
              <ItemList items={w.principles.items} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-offwhite py-20">
        <div className="container-page max-w-2xl text-center mx-auto">
          <Reveal>
            <PrimaryLink href={`/${locale}/contact`} tone="dark">
              {w.cta}
            </PrimaryLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
