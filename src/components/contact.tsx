import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { WeChatButton, WeChatId, WeChatQr } from "@/components/wechat";
import { CONTACT } from "@/lib/site";

const REGISTRY = [
  ["NIP", CONTACT.nip],
  ["KRS", CONTACT.krs],
  ["REGON", CONTACT.regon],
] as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-center rounded-2xl border border-crimson/50 bg-slate-900 p-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">WeChat</p>
          <h2 className="mt-2 text-2xl font-extrabold text-white">微信扫码，中文咨询</h2>
          <p className="mt-1 text-sm text-slate-400">中文顾问 {CONTACT.wechatName}</p>
          <div className="mt-6"><WeChatQr size="lg" /></div>
          <div className="mt-4"><WeChatId /></div>
          <WeChatButton className="mt-6 inline-flex items-center gap-2 rounded-xl bg-crimson px-6 py-3 font-bold text-white transition-colors hover:bg-crimson-dark">
            <MessageCircle className="size-5" aria-hidden /> 立即微信咨询
          </WeChatButton>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-extrabold text-white">联系方式</h2>
          <p className="mt-1 text-sm text-slate-400">欢迎预约到华沙办公室面谈</p>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-crimson" aria-hidden />
              <span>
                <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-amber-300">{CONTACT.address}</a>
                <span className="block text-sm text-slate-400">{CONTACT.addressZh}</span>
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-crimson" aria-hidden />
              <a href={CONTACT.phoneHref} className="font-semibold text-white hover:text-amber-300">{CONTACT.phone}</a>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-crimson" aria-hidden />
              <a href={`mailto:${CONTACT.email}`} className="font-semibold text-white hover:text-amber-300">{CONTACT.email}</a>
            </li>
          </ul>
          <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-800 pt-6 text-sm">
            {REGISTRY.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">{k}</dt>
                <dd className="mt-0.5 break-all font-mono text-slate-200">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
