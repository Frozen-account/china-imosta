"use client";

import { Camera, FileSearch, MessageCircle, Send } from "lucide-react";
import { useLocale } from "@/components/locale";
import { SectionHeading } from "@/components/section-heading";

const ICONS = [Camera, FileSearch, Send, MessageCircle] as const;

export function Workflow() {
  const { t } = useLocale();
  return (
    <section id="about" className="scroll-mt-20 border-b border-slate-800 bg-slate-950/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.subtitle} />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.steps.map(({ title, body }, i) => {
            const Icon = ICONS[i];
            return (
              <li key={i} className="relative rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <span className="absolute right-4 top-4 text-3xl font-extrabold text-slate-800 tabular-nums" aria-hidden>0{i + 1}</span>
                <span className="flex size-11 items-center justify-center rounded-xl bg-amber-400/10 ring-1 ring-amber-400/30">
                  <Icon className="size-5 text-amber-400" aria-hidden />
                </span>
                <h3 className="mt-4 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
