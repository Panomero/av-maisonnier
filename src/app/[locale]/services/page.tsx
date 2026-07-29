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
  return buildMetadata(locale, "services", dict.services.seo);
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const s = dict.services;

  return (
    <>
      <section className="container-page pt-32 pb-16 sm:pt-40">
        <Reveal className="max-w-2xl">
          <Eyebrow>{dict.nav.services}</Eyebrow>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
            {s.hero.title}
          </h1>
        </Reveal>
      </section>

      <section className="container-page py-12 border-t border-line">
        <Reveal>
          <h2 className="font-serif-display text-2xl sm:text-3xl">{s.property.title}</h2>
          <div className="mt-8">
            <ItemList items={s.property.items} />
          </div>
          <p className="mt-8 italic text-charcoal/70 max-w-xl">{s.property.note}</p>
        </Reveal>
      </section>

      <section className="bg-ivory py-16">
        <div className="container-page">
          <Reveal>
            <h2 className="font-serif-display text-2xl sm:text-3xl">{s.staff.title}</h2>
            <div className="mt-8">
              <ItemList items={s.staff.items} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16">
        <Reveal>
          <h2 className="font-serif-display text-2xl sm:text-3xl">{s.lifestyle.title}</h2>
          <div className="mt-8">
            <ItemList items={s.lifestyle.items} />
          </div>
          <p className="mt-8 italic text-charcoal/70 max-w-xl">{s.lifestyle.note}</p>
        </Reveal>
      </section>

      <section className="bg-navy text-offwhite py-20">
        <div className="container-page max-w-2xl text-center mx-auto">
          <Reveal>
            <p className="font-serif-display text-2xl">{s.closing}</p>
            <div className="mt-10 flex justify-center">
              <PrimaryLink href={`/${locale}/contact`} tone="dark">
                {s.cta}
              </PrimaryLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
