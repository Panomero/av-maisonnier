import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionary.types";
import en from "./dictionaries/en";
import ru from "./dictionaries/ru";
import fr from "./dictionaries/fr";

const dictionaries: Record<Locale, Dictionary> = { en, ru, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
