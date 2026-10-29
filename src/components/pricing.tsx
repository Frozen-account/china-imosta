"use client";

import { Check, MessageCircle, Star } from "lucide-react";
import { useLocale } from "@/components/locale";
import { SectionHeading } from "@/components/section-heading";
import { WeChatButton } from "@/components/wechat";

// Prices and the highlighted plan are the same in every language; names and features come from the dictionary.
const PLAN_META = [
  { price: 1500, recommended: false },
  { price: 2200, recommended: true },
  { price: 3000, recommended: false },
] as const;

export function Pricing() {
  const { t } = useLocale();
  const p = t.pricing;
  return (
    <section id="pricing" className="scroll-mt-20 border-b border-slate-800 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-4">
          {p.plans.map((plan, i) => {
            const { price, recommended } = PLAN_META[i];
            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${recommended ? "border-crimson bg-slate-900 shadow-xl shadow-red-950/40 lg:-my-3 lg:py-9" : "border-slate-800 bg-slate-900/60"}`}
              >
                {recommended && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950">
                    <Star className="size-3.5" aria-hidden /> {p.recommended}
                  </span>
                )}
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{plan.sub}</p>
                <p className="mt-5 text-white">
                  {p.pricePrefix && <span className="mr-1.5 text-sm text-slate-400">{p.pricePrefix}</span>}
                  <span className="text-4xl font-extrabold tabular-nums">{price.toLocaleString(t.numberLocale, { useGrouping: "always" })}</span>
                  <span className="ml-1 text-sm text-slate-400">{p.priceSuffix}</span>
                </p>
                <p className="text-xs text-slate-500">{p.netto}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className={`mt-0.5 size-4 shrink-0 ${recommended ? "text-crimson" : "text-amber-400"}`} aria-hidden /> {f}
                    </li>
                  ))}
                </ul>
                <WeChatButton
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${recommended ? "bg-crimson text-white hover:bg-crimson-dark" : "text-white ring-1 ring-slate-600 hover:bg-slate-800"}`}
                >
                  <MessageCircle className="size-4" aria-hidden /> {p.cta}
                </WeChatButton>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
