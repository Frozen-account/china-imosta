import { CONTACT } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 IMOSTA Group · China Desk · NIP {CONTACT.nip} · KRS {CONTACT.krs}</p>
        <a href={CONTACT.privacyHref} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
          隐私政策 · Polityka Prywatności (RODO)
        </a>
      </div>
    </footer>
  );
}
