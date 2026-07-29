import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata(locale, "contact", dict.contact.seo);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const c = dict.contact;

  return (
    <section className="container-page pt-32 pb-28 sm:pt-40">
      <div className="grid gap-16 lg:grid-cols-[1fr,1.3fr]">
        <div>
          <Reveal>
            <Eyebrow>{dict.nav.contact}</Eyebrow>
            <h1 className="font-serif-display text-3xl sm:text-4xl mt-3 leading-tight">
              {c.hero.title}
            </h1>
            <p className="mt-5 text-charcoal/80">{c.hero.body}</p>
          </Reveal>

          <Reveal delay={120} className="mt-12 border-t border-line pt-8">
            <p className="font-serif-display text-xl">{c.details.name}</p>
            <p className="text-sm text-charcoal/70">{c.details.title}</p>
            <div className="mt-5 space-y-2 text-sm">
              <p>
                <a href={`tel:${c.details.phone.replace(/\s+/g, "")}`} className="hover:text-bronze">
                  {c.details.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${c.details.email}`} className="hover:text-bronze">
                  {c.details.email}
                </a>
              </p>
            </div>
            <p className="mt-5 text-sm text-charcoal/60">{c.details.availability}</p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <ContactForm locale={locale} dict={dict} />
        </Reveal>
      </div>
    </section>
  );
}
