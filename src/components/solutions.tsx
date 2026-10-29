import { FileCheck2, IdCard, Receipt, Wallet } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const SOLUTIONS = [
  {
    icon: Wallet,
    tag: "VAT Importers",
    title: "Art. 33a 进口增值税递延",
    body: "符合条件的进口商无需在海关先行现金缴纳进口增值税，而是在当期 JPK_V7 申报中同时申报并抵扣，免垫资、盘活流动资金。我们协助评估适用条件并办理。",
  },
  {
    icon: FileCheck2,
    tag: "KSeF 2.0",
    title: "全面应对 KSeF 电子发票",
    body: "KSeF 已于 2026 年起强制实施。我们帮您规范发票上的商品品名、GTU 代码与开票流程，降低税务局稽查与罚款风险。",
  },
  {
    icon: Receipt,
    tag: "Kasa Fiskalna",
    title: "展厅门店与收银机合规",
    body: "协助办理收银机登记、日报月报与小票管理；落实企业间 (B2B) 单笔交易 15,000 PLN 现金支付上限与大额现金反洗钱 (AML) 要求。",
  },
  {
    icon: IdCard,
    tag: "Karta Pobytu",
    title: "股东居留卡财税支持",
    body: "规范记账，按时提交财务报表与纳税申报；协助准备移民局审核常用的财税文件，如无欠税证明 (zaświadczenie o niezaleganiu) 与年度报表。",
  },
] as const;

export function Solutions() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-slate-800 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="核心服务 · Services" title="华商在波兰经营最常遇到的四大财税难题" subtitle="来自华沙及 Wólka Kosowska (GD Poland) 批发市场客户的真实需求" />
        <div className="grid gap-4 md:grid-cols-2">
          {SOLUTIONS.map(({ icon: Icon, tag, title, body }) => (
            <article key={title} className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-crimson/60">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-crimson/10 ring-1 ring-crimson/30">
                  <Icon className="size-5 text-crimson" aria-hidden />
                </span>
                <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-300">{tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
