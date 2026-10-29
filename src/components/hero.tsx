"use client";

import Image from "next/image";
import { ArrowRight, Building2, MapPin, MessageCircle, ShieldCheck, Ship } from "lucide-react";
import { useLocale } from "@/components/locale";
import { WeChatButton } from "@/components/wechat";
import { PHOTOS } from "@/lib/photos";

const BADGE_ICONS = [Building2, ShieldCheck, Ship] as const;

export function Hero() {
  const { t } = useLocale();
  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-800">
      {/* Soft crimson glow; plain gradients render reliably in WeChat's WebView. */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.25),transparent_65%)]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300 ring-1 ring-amber-400/30">
              {t.hero.pill}
            </p>
            <h1 className="mt-5 text-balance text-3xl font-extrabold leading-tight text-white md:text-5xl md:leading-tight lg:text-[2.75rem]">
              {t.hero.title1}
              <span className="block text-crimson">{t.hero.title2}</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">{t.hero.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WeChatButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-red-900/30 transition-colors hover:bg-crimson-dark">
                <MessageCircle className="size-5" aria-hidden /> {t.hero.ctaPrimary}
              </WeChatButton>
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold text-white ring-1 ring-slate-600 transition-colors hover:bg-slate-800">
                {t.hero.ctaSecondary} <ArrowRight className="size-5" aria-hidden />
              </a>
            </div>
          </div>
          {/* Real office photo: the strongest trust signal for clients who can't visit before signing. */}
          <figure className="relative overflow-hidden rounded-2xl ring-1 ring-slate-700/80 shadow-2xl shadow-black/40">
            <Image
              src={PHOTOS.officeReception}
              alt={t.photos.receptionAlt}
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1152px) 470px, (min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full object-cover object-[70%_center]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-xs font-semibold text-white">
              <MapPin className="size-4 shrink-0 text-crimson" aria-hidden /> {t.photos.receptionCaption}
            </figcaption>
          </figure>
        </div>
        <ul className="mt-12 grid gap-3 sm:grid-cols-3">
          {t.hero.badges.map(({ title, detail }, i) => {
            const Icon = BADGE_ICONS[i];
            return (
              <li key={i} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 ring-1 ring-amber-400/30">
                  <Icon className="size-5 text-amber-400" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">{title}</span>
                  <span className="block text-xs text-slate-400">{detail}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
