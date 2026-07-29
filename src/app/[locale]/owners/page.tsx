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
  return buildMetadata(locale, "owners", dict.owners.seo);
}

export default async function OwnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const o = dict.owners;

  return (
    <>
      <section className="relative overflow-hidden py-28 sm:py-36">
        <SceneBackdrop variant="terrace" />
        <div className="container-page max-w-2xl">
          <Reveal>
            <Eyebrow>{dict.nav.owners}</Eyebrow>
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
              {o.hero.title}
            </h1>
            <p className="mt-6 text-charcoal/80 text-lg">{o.hero.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <div className="container-page">
        {o.sections.map((section, index) => (
          <section
            key={section.title}
            className={`py-16 sm:py-20 ${index !== 0 ? "border-t border-line" : ""}`}
          >
            <Reveal className="grid gap-8 lg:grid-cols-[1fr,1.4fr]">
              <h2 className="font-serif-display text-2xl sm:text-3xl">{section.title}</h2>
              <ItemList items={section.items} />
            </Reveal>
          </section>
        ))}
      </div>

      <section className="bg-bronze/10 py-16 sm:py-20 border-t border-line">
        <div className="container-page max-w-2xl text-center mx-auto">
          <Reveal>
            <p className="font-serif-display text-xl sm:text-2xl italic text-charcoal leading-snug">
              {o.continuity}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-offwhite py-20 sm:py-28">
        <div className="container-page max-w-2xl text-center mx-auto">
          <Reveal>
            <p className="font-serif-display text-2xl sm:text-3xl leading-snug">
              {o.closingStatement}
            </p>
            <div className="mt-10 flex justify-center">
              <PrimaryLink href={`/${locale}/contact`} tone="dark">
                {o.cta}
              </PrimaryLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
