"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

/**
 * The root <html> tag lives in app/layout.tsx, above the [locale] segment, so
 * it is not re-rendered by the server on client-side navigation between
 * locales. This component keeps the `lang` attribute in sync on the client
 * whenever the active locale changes (e.g. via the language switcher).
 */
export default function HtmlLangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
