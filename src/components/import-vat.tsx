import { ArrowDown, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const STANDARD = ["货物到港，海关计征进口增值税", "进口商先以现金缴纳增值税", "下期申报后才能抵扣，资金被占用"];
const ART_33A = ["货物到港，海关出具 PZC 报关单", "进口增值税不在海关现金缴纳", "当期 JPK_V7 同时申报与抵扣，资金零占用"];

function Flow({ title, steps, highlight }: { title: string; steps: readonly string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 ${highlight ? "border-crimson/60 bg-crimson/5" : "border-slate-800 bg-slate-900"}`}>
      <h3 className={`text-base font-bold ${highlight ? "text-white" : "text-slate-300"}`}>{title}</h3>
      <ol className="mt-4 space-y-2">
        {steps.map((s, i) => (
          <li key={s}>
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
  return (
    <section id="tax-import" className="scroll-mt-20 border-b border-slate-800 bg-slate-950/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="税务与进口 · Tax & Import"
          title="Art. 33a：进口增值税不再占用现金"
          subtitle="根据波兰增值税法第 33a 条，符合条件的进口商可在增值税申报中结算进口增值税，而不是在海关先行缴纳。"
        />
        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <Flow title="常规进口" steps={STANDARD} />
          <ArrowRight className="mx-auto hidden size-6 text-crimson md:block" aria-hidden />
          <Flow title="适用 Art. 33a 后" steps={ART_33A} highlight />
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
          适用条件因企业而异（如增值税登记状态、无税务欠款、是否通过具备 AEO 资质的报关代理等）。我们会在咨询中根据您的情况逐项核对。
        </p>
      </div>
    </section>
  );
}
