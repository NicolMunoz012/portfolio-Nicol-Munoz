'use client';

import { useLanguage } from "../context/LanguageContext";
import { SiInstagram, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
      {/* Separador superior */}
      <div className="mb-10 border-t border-border/50" />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        {/* Izquierda: Lottie + cita */}
        <div className="flex flex-col items-center gap-5">
          <div className="flex h-72 w-full items-center justify-center rounded-2xl border border-border/70 bg-surface-2/70 text-sm text-muted-foreground sm:h-80">
            Lottie
          </div>
          <p className="max-w-xs text-center text-xs italic text-muted-foreground">
            &ldquo;Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán.&rdquo;
            <br />
            <span className="not-italic font-medium">Proverbios 16:3</span>
          </p>
        </div>

        {/* Derecha: título + descripción + redes */}
        <div className="flex flex-col items-end justify-center gap-6 text-right">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-semibold tracking-tight text-foreground">
              {t("sections.contact.title")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("sections.contact.subtitle")}
            </p>
          </div>

          {/* Iconos de redes sociales */}
          <div className="flex flex-col items-end gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent btn-icon">
              <SiInstagram size={28} />
            </a>
            <a href="https://github.com/NicolMunoz012" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent btn-icon">
              <SiGithub size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent btn-icon">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:nicol@email.com"
              className="text-muted-foreground transition-colors hover:text-accent btn-icon">
              <MdOutlineEmail size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
