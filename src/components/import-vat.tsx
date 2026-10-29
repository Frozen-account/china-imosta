"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { useLocale } from "@/components/locale";
import { SectionHeading } from "@/components/section-heading";

function Flow({ title, steps, highlight }: { title: string; steps: readonly string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 ${highlight ? "border-crimson/60 bg-crimson/5" : "border-slate-800 bg-slate-900"}`}>
      <h3 className={`text-base font-bold ${highlight ? "text-white" : "text-slate-300"}`}>{title}</h3>
      <ol className="mt-4 space-y-2">
        {steps.map((s, i) => (
          <li key={i}>
            <span className="flex items-start gap-3 text-sm text-slate-300">
              <span className={`flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${highlight ? "bg-crimson text-white" : "bg-slate-700 text-slate-200"}`}>{i + 1}</span>
              {s}
            </span>
            {i < steps.length - 1 && <ArrowDown className="ml-1.5 mt-1 size-3.5 text-slate-600" aria-hidden />}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ImportVat() {
  const { t } = useLocale();
  const v = t.importVat;
  return (
    <section id="tax-import" className="scroll-mt-20 border-b border-slate-800 bg-slate-950/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={v.eyebrow} title={v.title} subtitle={v.subtitle} />
        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <Flow title={v.standardTitle} steps={v.standard} />
          <ArrowRight className="mx-auto hidden size-6 text-crimson md:block" aria-hidden />
          <Flow title={v.art33aTitle} steps={v.art33a} highlight />
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-slate-500">{v.note}</p>
      </div>
    </section>
  );
}
