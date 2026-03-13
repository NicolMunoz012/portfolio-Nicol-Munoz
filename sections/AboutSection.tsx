'use client';

import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  // Comentario: Sección de presentación inicial con foco en la identidad.
  return (
    <Section
      id="about"
      eyebrow={t("sections.about.eyebrow")}
      title={t("sections.about.title")}
      subtitle={t("sections.about.subtitle")}
      alignTitle="right"
    >
      <div className="grid gap-8 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Carrusel de fotos */}
        <div className="flex items-center justify-center">
          <div className="flex h-64 w-full max-w-sm items-center justify-center rounded-3xl border border-border/70 bg-surface-2/70 text-sm text-muted-foreground">
            Carrusel de fotos
          </div>
        </div>

        {/* Texto + botones */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p>
              I design clean, detail-oriented interfaces,
              combining typography, color and motion to create subtly cinematic
              atmospheres.
            </p>
            <p>
              My goal is to build digital experiences that feel emotional yet
              professional, modern and timeless at the same time.
            </p>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            {["Playlist fav", "Libros fav", "Podcast fav"].map((label) => (
              <button
                key={label}
                type="button"
                className="rounded-full border border-border/80 bg-transparent px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

