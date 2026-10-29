"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Check, Copy, MessageCircle, QrCode, X } from "lucide-react";
import { useLocale } from "@/components/locale";
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
  const { t } = useLocale();
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-3 text-center text-slate-400 ${size === "lg" ? "size-56" : "size-48"}`}
      role="img"
      aria-label={t.wechat.qrPending}
    >
      <QrCode className="size-16 text-slate-300" aria-hidden />
      <span className="text-xs font-semibold">{t.wechat.qrPending}</span>
    </div>
  );
}

export function WeChatId() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);
  if (!CONTACT.wechatId) return <p className="text-sm text-slate-400">{t.wechat.idLabel}: {t.wechat.idPending}</p>;

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
      {t.wechat.idLabel}: <span className="select-all font-mono">{CONTACT.wechatId}</span>
      {copied ? <Check className="size-4 text-emerald-400" aria-hidden /> : <Copy className="size-4 text-slate-400" aria-hidden />}
      <span className="sr-only">{copied ? t.wechat.copied : t.wechat.copy}</span>
    </button>
  );
}

function WeChatModal({ onClose }: { onClose: () => void }) {
  const { t } = useLocale();
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
        <button ref={closeRef} type="button" onClick={onClose} aria-label={t.wechat.close} className="absolute right-3 top-3 rounded-md p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white">
          <X className="size-5" />
        </button>
        <MessageCircle className="mx-auto size-8 text-emerald-400" aria-hidden />
        <h2 id="wechat-title" className="mt-2 text-lg font-bold text-white">{t.wechat.title} · {CONTACT.wechatName}</h2>
        <p className="mt-1 text-sm text-slate-400">{t.wechat.subtitle}</p>
        <div className="mt-5 flex justify-center"><WeChatQr /></div>
        <p className="mt-3 text-xs text-slate-500">{t.wechat.scanHint}</p>
        <div className="mt-4 flex justify-center"><WeChatId /></div>
        <p className="mt-5 border-t border-slate-800 pt-4 text-sm text-slate-400">
          {t.wechat.orCall} <a href={CONTACT.phoneHref} className="font-semibold text-white hover:text-amber-300">{CONTACT.phone}</a>
        </p>
      </div>
    </div>
  );
}
