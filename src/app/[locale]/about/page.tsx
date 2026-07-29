import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata(locale, "about", dict.about.seo);
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const ab = dict.about;

  return (
    <>
      <section className="container-page pt-32 pb-16 sm:pt-40">
        <Reveal className="max-w-2xl">
          <Eyebrow>{dict.nav.about}</Eyebrow>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
            {ab.hero.title}
          </h1>
        </Reveal>
      </section>

      <section className="container-page pb-20 max-w-2xl">
        <Reveal className="space-y-5">
          {ab.intro.map((paragraph) => (
            <p key={paragraph} className="text-charcoal/85 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </section>

      <section className="bg-ivory py-16">
        <div className="container-page">
          <Reveal>
            <h2 className="font-serif-display text-2xl">{ab.values.title}</h2>
            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
              {ab.values.items.map((value) => (
                <li key={value} className="text-lg font-serif-display text-charcoal/80">
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 max-w-2xl">
        <Reveal className="space-y-4">
          <p className="text-charcoal/80">{ab.role}</p>
          <p className="font-serif-display italic text-xl text-bronze">{ab.geography}</p>
        </Reveal>
      </section>
    </>
  );
}
