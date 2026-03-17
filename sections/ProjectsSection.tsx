'use client';

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getTranslationArray } from "../i18n";

type ProjectLink = {
  type: "github" | "vercel" | "demo";
  url: string;
};

const PROJECT_LINKS: ProjectLink[][] = [
  [
    { type: "github", url: "https://github.com/NicolMunoz012" },
    { type: "vercel", url: "https://vercel.com" },
    { type: "demo", url: "#" },
  ],
  [
    { type: "github", url: "https://github.com/NicolMunoz012" },
    { type: "demo", url: "#" },
  ],
  [],
];

export function ProjectsSection() {
  const { t, locale } = useLanguage();
  const [current, setCurrent] = useState(0);

  const items = getTranslationArray(locale, "projects.items");
  const project = items[current] ?? items[0];
  const links = PROJECT_LINKS[current] ?? [];

  return (
    <section id="projects" className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-10">
      {/* Encabezado */}
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-semibold tracking-tight text-foreground">
          {t("sections.projects.title")}
        </h2>
        <p className="text-sm text-muted">
          {t("sections.projects.subtitle")}
        </p>
      </div>

      {/* Carrusel */}
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-surface/70 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl">
        <div className="grid min-h-[280px] grid-cols-1 gap-6 p-6 sm:grid-cols-[1fr_auto] sm:p-8">
          {/* Info izquierda */}
          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  {project.year}
                </span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            {links.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {links.map(({ type, url }) => (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border/70 bg-surface-2/70 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent btn-ghost"
                  >
                    {t(`projects.${type}` as Parameters<typeof t>[0])}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {/* Imagen derecha */}
          <div className="flex items-center justify-center">
            <div className="flex h-48 w-40 items-center justify-center rounded-2xl border border-border/70 bg-surface-2/80 text-xs text-muted-foreground sm:h-52 sm:w-44">
              {t("projects.imagePlaceholder")}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 pb-5">
          {items.map((_: unknown, i: number) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 active:scale-90 ${
                i === current ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Botón GitHub */}
      <div>
        <a
          href="https://github.com/NicolMunoz012"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-transparent px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:bg-accent/10 btn-ghost"
        >
          {t("projects.visitGithub")}
        </a>
      </div>
    </section>
  );
}
