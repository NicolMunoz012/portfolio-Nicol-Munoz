"use client";

import { useLanguage } from "../context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  // Comentario: Hero principal siguiendo el wireframe: Lottie arriba, nombre, descripción, CV y fila de habilidades.
  return (
    <section className="w-full pt-10 sm:pt-14 lg:pt-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 sm:px-6 lg:px-10">
        {/* Lottie placeholder */}
        <div
          aria-label={t("hero.animationLabel")}
          className="flex h-[220px] w-full max-w-2xl items-center justify-center rounded-3xl border border-border/70 bg-surface/70 shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
        >
          <span className="text-sm text-muted-foreground">
            {t("hero.animationPlaceholderTitle")}
          </span>
        </div>

        {/* Texto principal */}
        <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-tight text-foreground">
            {t("hero.title")}
          </h1>
          <p className="max-w-2xl text-pretty text-[clamp(0.9rem,2vw,1.05rem)] leading-relaxed text-muted-foreground">
            {t("hero.subtitle")}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-transparent px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:bg-accent/10 btn-ghost"
            aria-label={t("hero.cvButton")}
          >
            {t("hero.cvButton")}
          </a>
        </div>

        {/* Fila de habilidades */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-8">
          {["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"].map(
            (label) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="h-14 w-14 rounded-full bg-surface-2/80" />
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

