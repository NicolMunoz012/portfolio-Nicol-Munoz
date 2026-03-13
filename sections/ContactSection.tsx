'use client';

import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  // Comentario: Sección de contacto simple preparada para formularios futuros.
  return (
    <Section
      id="contact"
      eyebrow={t("sections.contact.eyebrow")}
      title={t("sections.contact.title")}
      subtitle={t("sections.contact.subtitle")}
      alignTitle="left"
    >
      <div className="grid gap-8 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        {/* Lottie + cita bíblica */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-64 w-full max-w-md items-center justify-center rounded-3xl border border-border/70 bg-surface-2/70 text-sm text-muted-foreground">
            Lottie
          </div>
          <p className="max-w-md text-center text-xs text-muted-foreground">
            &quot;Pon en manos del Señor todas tus obras, y tus proyectos se
            cumplirán.&quot; Proverbios 16:3
          </p>
        </div>

        {/* Texto + redes */}
        <div className="flex flex-col items-start gap-4 text-sm text-muted-foreground">
          <p>
            If you're interested in my work or want
            to know more about what I do, feel free to reach out.
          </p>
          <div className="mt-2 flex flex-col gap-2 text-base">
            <button
              type="button"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
            >
              <span className="h-6 w-6 rounded-full bg-surface-2/80" />
              <span>Instagram</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
            >
              <span className="h-6 w-6 rounded-full bg-surface-2/80" />
              <span>GitHub</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
            >
              <span className="h-6 w-6 rounded-full bg-surface-2/80" />
              <span>LinkedIn</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
            >
              <span className="h-6 w-6 rounded-full bg-surface-2/80" />
              <span>Email</span>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

