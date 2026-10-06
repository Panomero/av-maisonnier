import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionary.types";
import type { Locale } from "@/i18n/config";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();

  const navItems = [
    { href: `/${locale}/owners`, label: dict.nav.owners },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/agencies`, label: dict.nav.agencies },
    { href: `/${locale}/how-it-works`, label: dict.nav.howItWorks },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-navy text-offwhite/90 mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src="/logo.png" alt={dict.meta.siteName} width={1000} height={396} className="h-16 w-auto" />
          <p className="mt-3 text-xs tracking-[0.2em] uppercase text-bronze-light">
            {dict.meta.descriptor}
          </p>
          <p className="mt-6 max-w-sm text-sm text-offwhite/70">{dict.footer.tagline}</p>
          <p className="mt-4 text-sm text-offwhite/60">{dict.footer.location}</p>
        </div>

        <div>
          <p className="eyebrow text-bronze-light">{dict.footer.navTitle}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-bronze-light transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-bronze-light">{dict.footer.contactTitle}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="mailto:office@an21.homes" className="hover:text-bronze-light transition-colors">
                office@an21.homes
              </a>
            </li>
            <li>
              <a href="tel:+393296648563" className="hover:text-bronze-light transition-colors">
                +39 329 664 85 63
              </a>
            </li>
          </ul>

          <p className="eyebrow text-bronze-light mt-6">{dict.footer.legalTitle}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={`/${locale}/privacy-policy`} className="hover:text-bronze-light transition-colors">
                {dict.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/cookie-policy`} className="hover:text-bronze-light transition-colors">
                {dict.footer.cookie}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/legal-notice`} className="hover:text-bronze-light transition-colors">
                {dict.footer.legal}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="container-page py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-offwhite/50">
          <p>{dict.footer.disclaimer}</p>
          <p>
            © {year} {dict.meta.siteName}
          </p>
        </div>
      </div>
    </footer>
  );
}
