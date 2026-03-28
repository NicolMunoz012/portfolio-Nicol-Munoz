'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { getTranslationArray } from "../i18n";
import { Reveal } from "../components/ui/Reveal";

type ProjectLink = {
  type: "code" | "demo";
  url: string;
};

const PROJECT_LINKS: ProjectLink[][] = [
  [
    { type: "code", url: "https://github.com/NicolMunoz012" },
    { type: "demo", url: "#" },
  ],
  [
    { type: "code", url: "https://github.com/NicolMunoz012" },
    { type: "demo", url: "#" },
  ],
  [
    { type: "code", url: "https://github.com/NicolMunoz012" },
  ],
];

export function ProjectsSection() {
  const { t, locale } = useLanguage();
  const [current, setCurrent] = useState(0);

  const items = getTranslationArray(locale, "projects.items");
  const project = items[current] ?? items[0];
  const links = PROJECT_LINKS[current] ?? [];

  return (
    <section id="projects" className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-10 py-16">
      {/* Línea superior decorativa */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b2f5c] to-transparent" />

      {/* Encabezado */}
      <Reveal direction="up">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[#6D0B31]">
            {t("sections.projects.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-foreground/70">
            {t("sections.projects.subtitle")}
          </p>
        </div>
      </Reveal>

      {/* Carrusel */}
      <Reveal direction="up" delay={0.2}>
        <div className="relative overflow-hidden rounded-3xl bg-[#f5ebe0] dark:bg-surface/70 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid min-h-[300px] grid-cols-1 gap-6 p-6 sm:grid-cols-[1fr_auto] sm:p-10"
            >
              {/* Info izquierda */}
              <div className="flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display text-2xl font-bold text-[#8b2f5c] sm:text-3xl">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-[#8b2f5c]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#8b2f5c]">
                      {project.year}
                    </span>
                  </div>
                  <p className="max-w-lg text-[15px] leading-relaxed text-foreground/75">
                    {project.description}
                  </p>
                </div>

                {links.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {links.map(({ type, url }) => (
                      <motion.a
                        key={type}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#5c1838] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#7a1f4a] active:bg-[#4a1229] active:scale-95"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {t(`projects.${type}` as Parameters<typeof t>[0])}
                      </motion.a>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Imagen derecha */}
              <div className="flex items-center justify-center">
                <div className="flex h-52 w-44 items-center justify-center rounded-2xl border-2 border-[#8b2f5c]/20 bg-white/50 dark:bg-surface-2/80 text-sm text-muted-foreground sm:h-56 sm:w-48">
                  {t("projects.imagePlaceholder")}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 pb-6">
            {items.map((_: unknown, i: number) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Project ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 active:scale-90 ${
                  i === current ? "w-8 bg-[#8b2f5c]" : "w-2 bg-[#8b2f5c]/30 hover:bg-[#8b2f5c]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Botón GitHub */}
      <Reveal direction="up" delay={0.3}>
        <div>
          <motion.a
            href="https://github.com/NicolMunoz012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#8b2f5c] bg-transparent px-6 py-2.5 text-sm font-semibold text-[#8b2f5c] transition-all hover:bg-[#8b2f5c]/10 active:bg-[#8b2f5c]/20 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("projects.visitGithub")}
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
