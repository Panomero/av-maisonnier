import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/i18n/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AN21 — Private Villa Management",
    template: "%s",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

// This root layout intentionally stays minimal. The localized shell (header,
// footer, cookie banner, <html lang>) lives in app/[locale]/layout.tsx so it
// re-renders whenever the locale segment changes — including on client-side
// navigation, e.g. when switching languages via the header switcher.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-offwhite text-charcoal">{children}</body>
    </html>
  );
}
