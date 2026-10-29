import { Camera, FileSearch, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const STEPS = [
  { icon: Camera, title: "拍照上传发票", body: "在 Taxo 手机端拍照上传发票与单据，无需邮寄纸质文件。" },
  { icon: FileSearch, title: "会计实时审核", body: "会计审核单据、核对 PZC 报关单，有疑问直接用中文与您沟通。" },
  { icon: Send, title: "JPK / KSeF 按时申报", body: "按法定期限提交 JPK_V7、ZUS 等申报，并通过 KSeF 处理电子发票。" },
  { icon: MessageCircle, title: "微信管家月度报告", body: "每月通过微信向您发送应缴税费与经营数据摘要。" },
] as const;

export function Workflow() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-slate-800 bg-slate-950/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="关于我们 · About"
          title="IMOSTA Group：在华沙为华商提供一站式财税服务"
          subtitle="IMOSTA Group 为在波兰经营的中小企业提供会计、人事与法律咨询服务。China Desk 由中文团队负责，借助 Taxo 平台让合作简单透明。"
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <span className="absolute right-4 top-4 text-3xl font-extrabold text-slate-800 tabular-nums" aria-hidden>0{i + 1}</span>
              <span className="flex size-11 items-center justify-center rounded-xl bg-amber-400/10 ring-1 ring-amber-400/30">
                <Icon className="size-5 text-amber-400" aria-hidden />
              </span>
              <h3 className="mt-4 font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
