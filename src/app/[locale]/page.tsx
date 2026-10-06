import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { Eyebrow, ItemList, PrimaryLink, SecondaryLink, SceneBackdrop } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata(locale, "", dict.home.seo);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const h = dict.home;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-end">
        <SceneBackdrop variant="coast" />
        <div className="container-page pb-20 pt-40 w-full">
          <Reveal>
            <p className="font-serif-display text-4xl sm:text-5xl leading-none tracking-wide">
              {h.hero.brandLine1}
            </p>
            <p className="font-serif-display text-3xl sm:text-4xl tracking-[0.18em] mt-1">
              {h.hero.brandLine2}
            </p>
            <div className="w-14 h-px bg-bronze my-5" />
            <p className="eyebrow">{h.hero.descriptor}</p>
            <p className="mt-3 font-serif-display italic text-xl text-bronze">{h.hero.tagline}</p>
          </Reveal>

          <Reveal delay={120} className="mt-10 max-w-2xl">
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-charcoal">
              {h.hero.title}
            </h1>
            <p className="mt-5 text-lg text-charcoal/80 max-w-xl">{h.hero.subtitle}</p>
          </Reveal>

          <Reveal delay={220} className="mt-10 flex flex-col sm:flex-row gap-5 sm:items-center">
            <PrimaryLink href={`/${locale}/contact`}>{h.hero.primaryCta}</PrimaryLink>
            <SecondaryLink href={`/${locale}/services`}>{h.hero.secondaryCta}</SecondaryLink>
          </Reveal>
        </div>
      </section>

      {/* The Idea */}
      <section className="container-page py-24 sm:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>{h.idea.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-3xl sm:text-4xl mt-3 leading-tight">
            {h.idea.title}
          </h2>
          <p className="mt-6 text-charcoal/80 leading-relaxed">{h.idea.body}</p>
          <p className="mt-8 font-serif-display italic text-xl text-bronze">{h.idea.statement}</p>
        </Reveal>
      </section>

      {/* Core Services */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <Eyebrow>{h.coreServices.eyebrow}</Eyebrow>
            <h2 className="font-serif-display text-3xl sm:text-4xl mt-3">{h.coreServices.title}</h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {h.coreServices.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 100} className="border-t border-line pt-6">
                <h3 className="font-serif-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm text-charcoal/75 leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mt-14">
            <SecondaryLink href={`/${locale}/services`}>{h.coreServices.cta}</SecondaryLink>
          </Reveal>
        </div>
      </section>

      {/* Owner Experience */}
      <section className="container-page py-24 sm:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>{h.ownerExperience.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-3xl sm:text-4xl mt-3">{h.ownerExperience.title}</h2>
        </Reveal>
        <Reveal delay={120} className="mt-12">
          <ItemList items={h.ownerExperience.items} />
        </Reveal>
      </section>

      {/* How It Works preview */}
      <section className="relative overflow-hidden bg-navy text-offwhite py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <Eyebrow>{h.howItWorksPreview.eyebrow}</Eyebrow>
            <h2 className="font-serif-display text-3xl sm:text-4xl mt-3">
              {h.howItWorksPreview.title}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <ol className="mt-14 grid gap-8 sm:grid-cols-5 text-sm">
              {h.howItWorksPreview.steps.map((step, index) => (
                <li key={step} className="border-t border-line-dark pt-5">
                  <span className="font-serif-display text-bronze-light text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-offwhite/80">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={220} className="mt-14">
            <SecondaryLink href={`/${locale}/how-it-works`} tone="dark">
              {h.howItWorksPreview.cta}
            </SecondaryLink>
          </Reveal>
        </div>
      </section>

      {/* For Partner Agencies */}
      <section className="bg-bronze/10 py-24 sm:py-32">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
          <Reveal>
            <Eyebrow>{h.agenciesBlock.eyebrow}</Eyebrow>
            <h2 className="font-serif-display text-3xl sm:text-4xl mt-3 max-w-xl">
              {h.agenciesBlock.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-charcoal/80 leading-relaxed">{h.agenciesBlock.body}</p>
            <div className="mt-8">
              <PrimaryLink href={`/${locale}/agencies`}>{h.agenciesBlock.cta}</PrimaryLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <SceneBackdrop variant="dusk" />
        <div className="container-page text-offwhite text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="font-serif-display italic text-xl text-bronze-light mb-4">{h.closing.kicker}</p>
            <h2 className="font-serif-display text-3xl sm:text-4xl">{h.closing.title}</h2>
            <p className="mt-5 text-offwhite/85">{h.closing.body}</p>
            <div className="mt-10 flex justify-center">
              <PrimaryLink href={`/${locale}/contact`} tone="dark">
                {h.closing.cta}
              </PrimaryLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
