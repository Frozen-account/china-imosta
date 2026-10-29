"use client";

import { useLocale } from "@/components/locale";

export function Logo() {
  const { t } = useLocale();
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="IMOSTA Group China Desk">
      <span className="text-xl font-extrabold tracking-tight text-white">
        IMOSTA<span className="text-crimson">.</span>
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="self-start rounded bg-crimson px-1.5 py-px text-[10px] font-bold uppercase tracking-wider text-white">China Desk</span>
        <span className="mt-0.5 text-[11px] text-slate-400">{t.logoTagline}</span>
      </span>
    </a>
  );
}
