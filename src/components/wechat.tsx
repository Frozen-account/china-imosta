"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Check, Copy, MessageCircle, QrCode, X } from "lucide-react";
import { CONTACT } from "@/lib/site";

const WeChatContext = createContext<() => void>(() => {});

// One modal for the whole page; any WeChatButton opens it.
export function WeChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const show = useCallback(() => setOpen(true), []);
  return (
    <WeChatContext.Provider value={show}>
      {children}
      {open && <WeChatModal onClose={() => setOpen(false)} />}
    </WeChatContext.Provider>
  );
}

export function WeChatButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const show = useContext(WeChatContext);
  return (
    <button type="button" onClick={show} className={className}>
      {children}
    </button>
  );
}

// Placeholder until the real QR image is added (e.g. public/wechat-qr.png rendered with next/image).
export function WeChatQr({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl bg-white text-slate-400 ${size === "lg" ? "size-56" : "size-48"}`}
      role="img"
      aria-label="微信二维码（待补充）"
    >
      <QrCode className="size-16 text-slate-300" aria-hidden />
      <span className="text-xs font-semibold">微信二维码 · 待补充</span>
    </div>
  );
}

export function WeChatId() {
  const [copied, setCopied] = useState(false);
  if (!CONTACT.wechatId) return <p className="text-sm text-slate-400">微信号：待补充</p>;

  async function copy() {
    try {
      await navigator.clipboard.writeText(CONTACT.wechatId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked in in-app browsers; the ID stays selectable.
    }
  }

  return (
    <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm font-semibold text-white ring-1 ring-slate-700 hover:ring-amber-400/60">
      微信号：<span className="select-all font-mono">{CONTACT.wechatId}</span>
      {copied ? <Check className="size-4 text-emerald-400" aria-hidden /> : <Copy className="size-4 text-slate-400" aria-hidden />}
      <span className="sr-only">{copied ? "已复制" : "复制"}</span>
    </button>
  );
}

function WeChatModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 sm:items-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wechat-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center shadow-2xl"
      >
        <button ref={closeRef} type="button" onClick={onClose} aria-label="关闭" className="absolute right-3 top-3 rounded-md p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white">
          <X className="size-5" />
        </button>
        <MessageCircle className="mx-auto size-8 text-emerald-400" aria-hidden />
        <h2 id="wechat-title" className="mt-2 text-lg font-bold text-white">微信咨询 · {CONTACT.wechatName}</h2>
        <p className="mt-1 text-sm text-slate-400">扫码添加中文顾问，直接用中文沟通</p>
        <div className="mt-5 flex justify-center"><WeChatQr /></div>
        <p className="mt-3 text-xs text-slate-500">在微信内打开本页？长按二维码即可识别</p>
        <div className="mt-4 flex justify-center"><WeChatId /></div>
        <p className="mt-5 border-t border-slate-800 pt-4 text-sm text-slate-400">
          或致电 <a href={CONTACT.phoneHref} className="font-semibold text-white hover:text-amber-300">{CONTACT.phone}</a>
        </p>
      </div>
    </div>
  );
}
