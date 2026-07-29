"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionary.types";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "av-maisonnier-cookie-consent";

export default function CookieBanner({ dict }: { dict: Dictionary }) {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage errors, still hide the banner for this session
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={dict.cookie.settingsLink}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-offwhite/97 backdrop-blur"
    >
      <div className="container-page py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-charcoal/80 max-w-2xl">
          {dict.cookie.message}{" "}
          <Link href={`/${locale}/cookie-policy`} className="underline underline-offset-2">
            {dict.cookie.settingsLink}
          </Link>
        </p>
        {/*
          CNIL guidance requires "Accept" and "Decline" to carry equal visual
          weight (same size, color intensity and prominence) — no dark
          pattern nudging the visitor toward acceptance. Both buttons below
          use the same outlined style; only their order/label differs.
        */}
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="px-4 py-2 text-xs tracking-widest uppercase border border-charcoal hover:bg-charcoal hover:text-offwhite transition-colors"
          >
            {dict.cookie.decline}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="px-4 py-2 text-xs tracking-widest uppercase border border-charcoal hover:bg-charcoal hover:text-offwhite transition-colors"
          >
            {dict.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
