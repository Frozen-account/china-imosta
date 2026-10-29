"use client";

import { FileCheck2, IdCard, Receipt, Wallet } from "lucide-react";
import { useLocale } from "@/components/locale";
import { SectionHeading } from "@/components/section-heading";

const ICONS = [Wallet, FileCheck2, Receipt, IdCard] as const;

export function Solutions() {
  const { t } = useLocale();
  return (
    <section id="services" className="scroll-mt-20 border-b border-slate-800 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={t.solutions.eyebrow} title={t.solutions.title} subtitle={t.solutions.subtitle} />
        <div className="grid gap-4 md:grid-cols-2">
          {t.solutions.items.map(({ tag, title, body }, i) => {
            const Icon = ICONS[i];
            return (
              <article key={tag} className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-crimson/60">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-crimson/10 ring-1 ring-crimson/30">
                    <Icon className="size-5 text-crimson" aria-hidden />
                  </span>
                  <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-300">{tag}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
