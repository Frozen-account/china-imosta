"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DEFAULT_LOCALE, DICTIONARIES, isLocale, type Dict, type Locale } from "@/i18n";

const STORAGE_KEY = "china-imosta:lang";

const LocaleContext = createContext<{ locale: Locale; t: Dict; setLocale: (l: Locale) => void }>({
  locale: DEFAULT_LOCALE,
  t: DICTIONARIES[DEFAULT_LOCALE],
  setLocale: () => {},
});

// The page is prerendered in Chinese; ?lang= (shareable links) or the last choice switches it after hydration.
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {}
    const initial = isLocale(fromUrl) ? fromUrl : isLocale(stored) ? stored : DEFAULT_LOCALE;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client init from URL / storage
    if (initial !== DEFAULT_LOCALE) setLocaleState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = DICTIONARIES[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    const url = new URL(window.location.href);
    if (next === DEFAULT_LOCALE) url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  }, []);

  return <LocaleContext.Provider value={{ locale, t: DICTIONARIES[locale], setLocale }}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);
