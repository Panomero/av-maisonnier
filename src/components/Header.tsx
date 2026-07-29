"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionary.types";
import { locales, localeNames, type Locale } from "@/i18n/config";

function withLocalePath(pathname: string, locale: Locale): string {
  const parts = pathname.split("/");
  parts[1] = locale;
  return parts.join("/") || `/${locale}`;
}

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/owners`, label: dict.nav.owners },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/agencies`, label: dict.nav.agencies },
    { href: `/${locale}/how-it-works`, label: dict.nav.howItWorks },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname?.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-offwhite/95 backdrop-blur border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href={`/${locale}`}
          className="font-serif-display leading-none tracking-wide"
          aria-label={dict.meta.siteName}
        >
          <span className="block text-xl">AV</span>
          <span className="block text-[0.65rem] tracking-[0.3em] text-charcoal/70 -mt-0.5">
            MAISONNIER
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-8 text-sm tracking-wide"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-opacity hover:opacity-70 ${
                isActive(item.href) ? "text-bronze" : "text-charcoal"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitcher locale={locale} pathname={pathname ?? `/${locale}`} label={dict.nav.language} />
          <Link
            href={`/${locale}/contact`}
            className="border border-charcoal px-5 py-2.5 text-xs tracking-[0.14em] uppercase hover:bg-charcoal hover:text-offwhite transition-colors"
          >
            {dict.nav.consultation}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex flex-col items-center justify-center gap-1.5 w-11 h-11"
          aria-label={open ? dict.nav.menuClose : dict.nav.menuOpen}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-charcoal transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-charcoal transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-offwhite overflow-y-auto transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <nav
          className="container-page flex flex-col gap-1 py-8 text-lg"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`py-3 border-b border-line ${
                isActive(item.href) ? "text-bronze" : "text-charcoal"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-6">
            <span className="eyebrow">{dict.nav.language}</span>
            <div className="flex gap-4 mt-3 text-sm">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={withLocalePath(pathname ?? `/${locale}`, l)}
                  className={`px-3 py-1.5 border ${
                    l === locale
                      ? "border-charcoal bg-charcoal text-offwhite"
                      : "border-line"
                  }`}
                >
                  {localeNames[l]}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-flex justify-center border border-charcoal px-5 py-3.5 text-xs tracking-[0.14em] uppercase"
          >
            {dict.nav.consultation}
          </Link>
        </nav>
      </div>
    </header>
  );
}

function LanguageSwitcher({
  locale,
  pathname,
  label,
}: {
  locale: Locale;
  pathname: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1 text-xs tracking-widest" aria-label={label}>
      {locales.map((l, index) => (
        <span key={l} className="flex items-center">
          {index > 0 && <span className="mx-1 text-charcoal/30">/</span>}
          <Link
            href={withLocalePath(pathname, l)}
            hrefLang={l}
            className={
              l === locale ? "text-bronze" : "text-charcoal/60 hover:text-charcoal"
            }
          >
            {localeNames[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}
