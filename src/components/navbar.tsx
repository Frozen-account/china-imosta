"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { useLocale } from "@/components/locale";
import { Logo } from "@/components/logo";
import { WeChatButton } from "@/components/wechat";
import { LOCALES, LOCALE_LABEL } from "@/i18n";
import { NAV } from "@/lib/site";

function LanguageToggle() {
  const { locale, t, setLocale } = useLocale();
  return (
    <div className="inline-flex rounded-lg bg-slate-900 p-0.5 ring-1 ring-slate-700" role="group" aria-label={t.menu.language}>
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-md px-2.5 py-1 text-xs font-bold transition-colors ${locale === l ? "bg-crimson text-white" : "text-slate-400 hover:text-white"}`}
        >
          {LOCALE_LABEL[l]}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-night/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
        <Logo />
        <nav className="ml-auto hidden items-center gap-6 xl:flex" aria-label={t.nav.label}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold text-slate-300 transition-colors hover:text-white">{t.nav[n.key]}</a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 xl:ml-0">
          <div className="hidden sm:block"><LanguageToggle /></div>
          <WeChatButton className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-crimson px-3 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-crimson-dark">
            <MessageCircle className="size-4 shrink-0" aria-hidden /> <span className="hidden min-[400px]:inline">{t.wechat.cta}</span>
            <span className="min-[400px]:hidden">WeChat</span>
          </WeChatButton>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.menu.close : t.menu.open}
            className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-slate-800 px-4 pb-4 xl:hidden" aria-label={t.nav.label}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-slate-800/70 py-3 text-base font-semibold text-slate-200">{t.nav[n.key]}</a>
          ))}
          <div className="mt-4 sm:hidden"><LanguageToggle /></div>
        </nav>
      )}
    </header>
  );
}
