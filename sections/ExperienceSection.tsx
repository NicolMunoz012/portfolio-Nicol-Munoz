'use client';

import { useLanguage } from "../context/LanguageContext";
import { getTranslationArray } from "../i18n";

type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  description?: string;
};

function ExperienceCard({ period, title, place, description }: ExperienceItem) {
  return (
    <article className="flex min-w-[240px] flex-col gap-2 rounded-2xl border border-border/70 bg-surface/60 p-5 text-sm shadow-sm">
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent/90">
        {period}
      </span>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-xs text-muted">{place}</p>
      {description ? (
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </article>
  );
}

type ScrollColumnProps = {
  heading: string;
  items: ExperienceItem[];
};

function ScrollColumn({ heading, items }: ScrollColumnProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-3xl border border-border/70 bg-surface/70 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
      <h3 className="font-display text-lg font-semibold text-foreground">
        {heading}
      </h3>
      {/* Scroll horizontal de tarjetas */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {items.map((item, i) => (
          <ExperienceCard key={i} {...item} />
        ))}
      </div>
      {/* Dots indicadores */}
      <div className="flex justify-center gap-1.5 pt-1">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full bg-border ${i === 0 ? "w-4 bg-accent/60" : "w-1"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const { t, locale } = useLanguage();
  const academic = getTranslationArray(locale, "experience.academic");
  const work = getTranslationArray(locale, "experience.work");

  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-8">
        {/* Encabezado alineado a la derecha */}
        <div className="flex flex-col items-end gap-2 text-right">
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-semibold tracking-tight text-foreground">
            {t("sections.experience.title")}
          </h2>
          <p className="max-w-md text-sm text-muted">
            {t("sections.experience.subtitle")}
          </p>
        </div>

        {/* Grid de dos columnas con scroll interno */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ScrollColumn
            heading={t("sections.experience.academic")}
            items={academic}
          />
          <ScrollColumn
            heading={t("sections.experience.work")}
            items={work}
          />
        </div>
      </div>
    </section>
  );
}
