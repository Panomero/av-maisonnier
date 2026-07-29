export const locales = ["en", "ru", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  fr: "FR",
};

export const localeFullNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  fr: "Français",
};

export const siteUrl = "https://avmaisonnier.com";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
