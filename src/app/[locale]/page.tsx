import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { Eyebrow, ItemList, Photo, PrimaryLink, SecondaryLink, SceneBackdrop } from "@/components/ui";

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
      <section className="border-b border-line">
        <div className="container-page grid items-center gap-10 py-12 lg:min-h-[78vh] lg:grid-cols-2 lg:gap-16 lg:py-0">
          <Reveal className="lg:py-24">
            <p className="eyebrow">{h.hero.descriptor}</p>
            <h1 className="font-serif-display mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              {h.hero.title}
            </h1>
            <p className="mt-8 border-l border-bronze pl-6 text-xl leading-snug text-charcoal sm:text-2xl">
              {h.hero.tagline}
            </p>
            <p className="mt-8 max-w-md text-charcoal/75 leading-relaxed">{h.hero.subtitle}</p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              <PrimaryLink href={`/${locale}/contact`}>{h.hero.primaryCta}</PrimaryLink>
              <SecondaryLink href={`/${locale}/services`}>{h.hero.secondaryCta}</SecondaryLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Photo
              src="/images/hero.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1568385635449-98f5e250df66?auto=format&fit=crop&w=1400&q=80"
              className="aspect-[4/5] w-full lg:aspect-auto lg:h-[78vh]"
            />
          </Reveal>
        </div>
      </section>

      <div className="border-b border-line">
        <div className="container-page flex items-center justify-between gap-4 py-4 text-[0.62rem] sm:text-[0.7rem] tracking-[0.2em] sm:tracking-[0.26em] whitespace-nowrap uppercase text-bronze">
          <span>
            {h.hero.brandLine1} / {h.hero.brandLine2}
          </span>
          <span aria-hidden className="hidden h-px flex-1 bg-line sm:block" />
          <span className="text-right">{dict.footer.location.split("·")[0].trim()}</span>
        </div>
      </div>

      {/* Core Services */}
      <section className="bg-navy text-offwhite py-20 sm:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <Eyebrow>{h.coreServices.eyebrow}</Eyebrow>
            <h2 className="font-serif-display mt-4 text-3xl sm:text-4xl">{h.coreServices.title}</h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 md:divide-x md:divide-line-dark">
            {h.coreServices.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 100}
                className="border-t border-line-dark py-8 md:border-t-0 md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <span className="text-sm tracking-[0.2em] text-bronze-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif-display mt-4 text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/75">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mt-10 border-t border-line-dark pt-8">
            <SecondaryLink href={`/${locale}/services`} tone="dark">
              {h.coreServices.cta}
            </SecondaryLink>
          </Reveal>
        </div>
      </section>

      {/* The Idea */}
      <section className="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr,0.9fr] lg:gap-20">
        <Reveal>
          <Eyebrow>{h.idea.eyebrow}</Eyebrow>
          <h2 className="font-serif-display mt-4 text-3xl leading-tight sm:text-4xl">
            {h.idea.title}
          </h2>
          <p className="mt-6 leading-relaxed text-charcoal/80">{h.idea.body}</p>
          <p className="mt-8 border-l border-bronze pl-6 text-xl text-bronze">{h.idea.statement}</p>
        </Reveal>
        <Reveal delay={120}>
          <Photo
            src="/images/detail.jpg"
            fallbackSrc="https://images.unsplash.com/photo-1587615139139-f3a245a63372?auto=format&fit=crop&w=1400&q=80"
            className="aspect-[4/3] w-full" />
        </Reveal>
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
