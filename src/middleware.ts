import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "@/i18n/config";

function detectLocaleFromHeader(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    return cookieLocale as Locale;
  }

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((part) => part.split(";")[0].trim().toLowerCase());

    for (const lang of preferred) {
      const base = lang.split("-")[0];
      const match = (locales as readonly string[]).find((l) => l === base);
      if (match) return match as Locale;
    }
  }

  return defaultLocale;
}

// Only responsible for redirecting locale-less URLs (e.g. "/", "/contact")
// to a locale-prefixed URL. Once a URL has a "/en", "/ru" or "/fr" prefix,
// app/[locale]/layout.tsx takes over and renders the right locale directly
// from the route params, so it stays correct across client-side navigation.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocaleFromHeader(request);
  const newUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}${request.nextUrl.search}`,
    request.url
  );
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|images|fonts|.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico|txt|xml)$).*)",
  ],
};
