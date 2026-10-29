import { Check, MessageCircle, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { WeChatButton } from "@/components/wechat";

const PLANS = [
  {
    name: "初创贸易型",
    en: "Starter Trading",
    price: "1,500",
    recommended: false,
    features: ["每月最多 20 份单据", "JPK_V7 增值税基础申报", "ZUS 社保计算", "Taxo 在线平台访问"],
  },
  {
    name: "进出口批发旗舰版",
    en: "Import & Wholesale Pro",
    price: "2,200",
    recommended: true,
    features: ["Art. 33a 进口增值税与 PZC 报关单核对", "KSeF 电子发票对接", "每月最多 40 份单据", "专属中文客户经理"],
  },
  {
    name: "企业全面定制版",
    en: "Enterprise / Custom",
    price: "3,000",
    recommended: false,
    features: ["大额营业额企业", "员工工资与社保", "CIT 企业所得税优化", "税务稽查全程陪同"],
  },
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-b border-slate-800 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="收费标准 · Pricing" title="透明报价，按月固定收费" subtitle="以下为起步价（PLN，不含增值税 / netto），最终报价取决于单据量与业务类型。" />
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-4">
          {PLANS.map((p) => (
            <article
              key={p.en}
              className={`relative flex flex-col rounded-2xl border p-6 ${p.recommended ? "border-crimson bg-slate-900 shadow-xl shadow-red-950/40 lg:-my-3 lg:py-9" : "border-slate-800 bg-slate-900/60"}`}
            >
              {p.recommended && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950">
                  <Star className="size-3.5" aria-hidden /> 推荐
                </span>
              )}
              <h3 className="text-lg font-bold text-white">{p.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{p.en}</p>
              <p className="mt-5 text-white">
                <span className="text-4xl font-extrabold tabular-nums">{p.price}</span>
                <span className="ml-1 text-sm text-slate-400">PLN / 月起</span>
              </p>
              <p className="text-xs text-slate-500">netto，不含增值税</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className={`mt-0.5 size-4 shrink-0 ${p.recommended ? "text-crimson" : "text-amber-400"}`} aria-hidden /> {f}
                  </li>
                ))}
              </ul>
              <WeChatButton
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${p.recommended ? "bg-crimson text-white hover:bg-crimson-dark" : "text-white ring-1 ring-slate-600 hover:bg-slate-800"}`}
              >
                <MessageCircle className="size-4" aria-hidden /> 微信获取报价
              </WeChatButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
