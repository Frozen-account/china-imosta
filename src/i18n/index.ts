import { en } from "./en";
import { pl } from "./pl";
import { zh } from "./zh";

export const LOCALES = ["zh", "pl", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "zh";

// Every translation must match the Chinese dictionary's shape, so a missing key fails the build.
export type Dict = typeof zh;

export const DICTIONARIES: Record<Locale, Dict> = { zh, pl, en };

export const LOCALE_LABEL: Record<Locale, string> = { zh: "中文", pl: "PL", en: "EN" };

export const isLocale = (v: unknown): v is Locale => LOCALES.includes(v as Locale);
