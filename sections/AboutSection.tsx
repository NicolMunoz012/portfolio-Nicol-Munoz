'use client';

import { useLanguage } from "../context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
      {/* Título alineado a la derecha */}
      <h2 className="mb-8 text-right font-display text-[clamp(1.75rem,3.5vw,3rem)] font-semibold tracking-tight text-foreground">
        {t("sections.about.title")}
      </h2>

      {/* Grid: imagen izquierda | texto derecha */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10">
        {/* Imagen placeholder */}
        <div className="flex items-start justify-center">
          <div className="flex h-72 w-full items-center justify-center rounded-2xl border border-border/70 bg-surface-2/70 text-sm text-muted-foreground md:h-80">
            Carrusel de fotos
          </div>
        </div>

        {/* Texto + botones */}
        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4 text-center text-sm leading-relaxed text-muted-foreground md:text-right">
            <p>{t("about.bio1")}</p>
            <p>{t("about.bio2")}</p>
            <p>{t("about.bio3")}</p>
          </div>

          {/* Botones alineados a la derecha */}
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <button type="button" className="rounded-full border border-border/80 bg-transparent px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent btn-ghost">
              {t("about.recommendations.playlist")}
            </button>
            <button type="button" className="rounded-full border border-border/80 bg-transparent px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent btn-ghost">
              {t("about.recommendations.books")}
            </button>
            <button type="button" className="rounded-full border border-border/80 bg-transparent px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent btn-ghost">
              {t("about.recommendations.podcast")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
