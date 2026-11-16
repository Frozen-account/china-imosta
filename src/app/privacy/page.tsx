import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";
import { ImostaLogo } from "@/components/logo";
import { CONTACT } from "@/lib/site";
import { SECTIONS, SOURCE_URL, type Block } from "./content";

export const metadata: Metadata = {
  title: "隐私政策 · IMOSTA China Desk",
  description: "IMOSTA Group Sp. z o.o. 个人数据处理政策（GDPR / RODO）中文版。",
  alternates: { canonical: "/privacy" },
};

const CONTROLLER = [
  ["数据控制者（运营方）", "IMOSTA Group Sp. z o.o."],
  ["地址", `${CONTACT.address}，波兰`],
  ["KRS", CONTACT.krs],
  ["NIP", CONTACT.nip],
  ["REGON", CONTACT.regon],
  ["联系邮箱", CONTACT.email],
] as const;

function renderBlock(block: Block, i: number) {
  if (typeof block === "string") return <p key={i}>{block}</p>;
  return (
    <ul key={i} className="list-disc space-y-1.5 pl-6 marker:text-slate-500">
      {block.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-slate-800/80">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-4">
          <Link href="/" aria-label="IMOSTA Group China Desk">
            <ImostaLogo className="h-10" />
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white">
            <ArrowLeft className="size-4" aria-hidden /> 返回首页
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">GDPR / RODO</p>
        <h1 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">隐私政策</h1>
        <p className="mt-2 text-sm text-slate-400">个人数据处理政策 · IMOSTA Group Sp. z o.o.</p>

        <dl className="mt-8 grid gap-x-6 gap-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm sm:grid-cols-[auto_1fr]">
          {CONTROLLER.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="font-semibold text-slate-400">{k}</dt>
              <dd className="break-words text-slate-100">
                {k === "联系邮箱" ? <a href={`mailto:${v}`} className="hover:text-amber-300">{v}</a> : v}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-xs leading-relaxed text-slate-500">
          本页面为 IMOSTA Group Sp. z o.o. 隐私政策的中文译本，原文见{" "}
          <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">{SOURCE_URL}</a>。
          如中文译本与原文存在不一致，以原文为准。
        </p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-slate-300">
          {SECTIONS.map((s) => (
            <section key={s.heading} className="space-y-3">
              <h2 className="text-lg font-bold text-white">{s.heading}</h2>
              {s.blocks.map(renderBlock)}
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
