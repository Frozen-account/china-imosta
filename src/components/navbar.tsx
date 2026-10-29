"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { WeChatButton } from "@/components/wechat";
import { NAV } from "@/lib/site";

// PL / EN versions are not built yet; the toggle shows where they will live.
const LANGS = [
  { code: "中文", active: true },
  { code: "PL", active: false },
  { code: "EN", active: false },
] as const;

function LanguageToggle() {
  return (
    <div className="inline-flex rounded-lg bg-slate-900 p-0.5 ring-1 ring-slate-700" role="group" aria-label="语言">
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          disabled={!l.active}
          aria-pressed={l.active}
          title={l.active ? undefined : "即将上线"}
          className={`rounded-md px-2 py-1 text-xs font-bold ${l.active ? "bg-slate-700 text-white" : "cursor-not-allowed text-slate-500"}`}
        >
          {l.code}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-night/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
        <Logo />
        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="主导航">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold text-slate-300 transition-colors hover:text-white">{n.label}</a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <div className="hidden sm:block"><LanguageToggle /></div>
          <WeChatButton className="inline-flex items-center gap-1.5 rounded-lg bg-crimson px-3 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-crimson-dark">
            <MessageCircle className="size-4" aria-hidden /> WeChat 咨询
          </WeChatButton>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-slate-800 px-4 pb-4 lg:hidden" aria-label="主导航">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-slate-800/70 py-3 text-base font-semibold text-slate-200">{n.label}</a>
          ))}
          <div className="mt-4 sm:hidden"><LanguageToggle /></div>
        </nav>
      )}
    </header>
  );
}
