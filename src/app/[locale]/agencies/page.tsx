import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { Eyebrow, ItemList, PrimaryLink, SceneBackdrop } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata(locale, "agencies", dict.agencies.seo);
}

export default async function AgenciesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const a = dict.agencies;

  return (
    <>
      <section className="relative overflow-hidden py-28 sm:py-36">
        <SceneBackdrop variant="night" />
        <div className="container-page max-w-2xl text-offwhite">
          <Reveal>
            <Eyebrow>{dict.nav.agencies}</Eyebrow>
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
              {a.hero.title}
            </h1>
            <p className="mt-6 text-offwhite/80 text-lg">{a.hero.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="font-serif-display text-2xl sm:text-3xl">{a.opportunity.title}</h2>
          <p className="mt-6 text-charcoal/80 leading-relaxed">{a.opportunity.body}</p>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <ItemList items={a.opportunity.items} />
        </Reveal>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <h2 className="font-serif-display text-2xl sm:text-3xl">{a.responsibilities.title}</h2>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal className="border border-line bg-offwhite p-8">
              <h3 className="font-serif-display text-xl">{a.responsibilities.agencyTitle}</h3>
              <div className="mt-6">
                <ItemList items={a.responsibilities.agencyItems} />
              </div>
            </Reveal>
            <Reveal delay={100} className="border border-charcoal bg-charcoal text-offwhite p-8">
              <h3 className="font-serif-display text-xl">{a.responsibilities.avTitle}</h3>
              <div className="mt-6">
                <ItemList items={a.responsibilities.avItems} tone="dark" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-10 text-center">
            <p className="font-serif-display italic text-xl text-bronze">
              {a.responsibilities.statement}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="font-serif-display text-2xl sm:text-3xl">{a.partnership.title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <ol className="mt-10 space-y-4">
            {a.partnership.steps.map((step, index) => (
              <li key={step} className="flex gap-4 items-start border-b border-line pb-4">
                <span className="font-serif-display text-bronze text-lg shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-charcoal/85">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 italic text-charcoal/70 max-w-xl">{a.partnership.commercialNote}</p>
        </Reveal>
      </section>

      <section className="bg-bronze/10 py-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <h2 className="font-serif-display text-2xl sm:text-3xl">{a.notBuild.title}</h2>
            <div className="mt-8">
              <ItemList items={a.notBuild.items} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-offwhite py-20">
        <div className="container-page max-w-2xl text-center mx-auto">
          <Reveal>
            <PrimaryLink href={`/${locale}/contact`} tone="dark">
              {a.cta}
            </PrimaryLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
