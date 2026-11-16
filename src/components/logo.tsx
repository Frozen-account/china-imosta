"use client";

import Image from "next/image";
import { useLocale } from "@/components/locale";

// The whole site sits on the dark "night" canvas, so it uses the white-lettering variant.
// public/images/imosta-logo.png is the original (dark lettering) for light backgrounds.
// Both are rendered from the official vector trace, 1200x400.
export function ImostaLogo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/images/imosta-logo-white.png"
      alt="IMOSTA"
      width={1200}
      height={400}
      priority={priority}
      className={`w-auto ${className ?? ""}`}
    />
  );
}

export function Logo() {
  const { t } = useLocale();
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="IMOSTA Group China Desk">
      <ImostaLogo className="h-10 shrink-0" priority />
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="self-start rounded bg-crimson px-1.5 py-px text-[10px] font-bold uppercase tracking-wider text-white">China Desk</span>
        <span className="mt-0.5 text-[11px] text-slate-400">{t.logoTagline}</span>
      </span>
    </a>
  );
}
