export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-extrabold leading-snug text-white md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">{subtitle}</p>}
    </div>
  );
}
