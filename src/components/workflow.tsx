"use client";

import Image, { type StaticImageData } from "next/image";
import { Camera, FileSearch, MessageCircle, Send } from "lucide-react";
import { useLocale } from "@/components/locale";
import { SectionHeading } from "@/components/section-heading";
import { PHOTOS } from "@/lib/photos";

function OfficePhoto({ src, alt, caption, sizes, className = "" }: { src: StaticImageData; alt: string; caption: string; sizes: string; className?: string }) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl ring-1 ring-slate-800 ${className}`}>
      <Image src={src} alt={alt} placeholder="blur" sizes={sizes} className="h-full w-full object-cover" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-sm font-semibold text-white">
        {caption}
      </figcaption>
    </figure>
  );
}

const ICONS = [Camera, FileSearch, Send, MessageCircle] as const;

export function Workflow() {
  const { t } = useLocale();
  return (
    <section id="about" className="scroll-mt-20 border-b border-slate-800 bg-slate-950/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.subtitle} />

        <div className="mb-12">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <h3 className="text-lg font-bold text-white">{t.photos.officeTitle}</h3>
            <p className="text-sm text-slate-400">{t.photos.officeSubtitle}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <OfficePhoto
              src={PHOTOS.tatianaElena}
              alt={t.photos.teamAlt}
              caption={t.photos.teamCaption}
              sizes="(min-width: 1152px) 640px, (min-width: 768px) 58vw, 100vw"
              className="aspect-[4/3] md:aspect-auto"
            />
            <OfficePhoto
              src={PHOTOS.teamDocuments}
              alt={t.photos.documentsAlt}
              caption={t.photos.documentsCaption}
              sizes="(min-width: 1152px) 460px, (min-width: 768px) 42vw, 100vw"
              className="aspect-[4/3]"
            />
          </div>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.steps.map(({ title, body }, i) => {
            const Icon = ICONS[i];
            return (
              <li key={i} className="relative rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <span className="absolute right-4 top-4 text-3xl font-extrabold text-slate-800 tabular-nums" aria-hidden>0{i + 1}</span>
                <span className="flex size-11 items-center justify-center rounded-xl bg-amber-400/10 ring-1 ring-amber-400/30">
                  <Icon className="size-5 text-amber-400" aria-hidden />
                </span>
                <h3 className="mt-4 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
