import { ArrowRight, Building2, MessageCircle, ShieldCheck, Ship } from "lucide-react";
import { WeChatButton } from "@/components/wechat";

const BADGES = [
  { icon: Building2, title: "华沙实体办公室", detail: "ul. Ostrobramska 101" },
  { icon: ShieldCheck, title: "正规注册会计机构", detail: "KRS 登记 · 职业责任险 (OC)" },
  { icon: Ship, title: "专注进出口清关税务", detail: "中欧班列 · 海运 · 空运" },
] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-800">
      {/* Soft crimson glow; plain gradients render reliably in WeChat's WebView. */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.25),transparent_65%)]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 md:pb-24 md:pt-24">
        <p className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300 ring-1 ring-amber-400/30">
          IMOSTA Group · China Desk · 华沙
        </p>
        <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight text-white md:text-5xl md:leading-tight">
          波兰正规会计与法律事务所
          <span className="block text-crimson">专为中波跨境企业与华商赋能</span>
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          华沙实体办公 · 母语级中文/波兰语/英语团队 · 专注进口清关 Art. 33a 增值税递延、KSeF 合规、公司账务与居留卡税务支持。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WeChatButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-red-900/30 transition-colors hover:bg-crimson-dark">
            <MessageCircle className="size-5" aria-hidden /> 立即微信咨询
          </WeChatButton>
          <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold text-white ring-1 ring-slate-600 transition-colors hover:bg-slate-800">
            查看服务方案 <ArrowRight className="size-5" aria-hidden />
          </a>
        </div>
        <ul className="mt-12 grid gap-3 sm:grid-cols-3">
          {BADGES.map(({ icon: Icon, title, detail }) => (
            <li key={title} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 ring-1 ring-amber-400/30">
                <Icon className="size-5 text-amber-400" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-bold text-white">{title}</span>
                <span className="block text-xs text-slate-400">{detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
