"use client";

import { ImostaLogo } from "@/components/logo";
import { useLocale } from "@/components/locale";
import { CONTACT } from "@/lib/site";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <ImostaLogo className="h-9" />
          <span className="text-slate-400">{t.logoTagline}</span>
        </div>
        <p>© 2026 IMOSTA Group · China Desk · NIP {CONTACT.nip} · KRS {CONTACT.krs} · REGON {CONTACT.regon}</p>
        <a href={CONTACT.privacyHref} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">{t.footer.privacy}</a>
      </div>
    </footer>
  );
}
