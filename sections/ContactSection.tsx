'use client';

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/ui/Reveal";
import { Download, ExternalLink, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-16">
      <div className="flex flex-col gap-12">
        {/* Título centrado */}
        <Reveal direction="up">
          <h2 className="text-center font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[#6D0B31]">
            {t("sections.contact.title")}
          </h2>
        </Reveal>

        {/* Subtítulo centrado */}
        <Reveal direction="up" delay={0.1}>
          <p className="mx-auto max-w-2xl text-center text-base text-foreground/75">
            {t("sections.contact.subtitle")}
          </p>
        </Reveal>

        {/* Grid: Lottie + cita | Redes sociales */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Izquierda: Lottie + cita bíblica */}
          <Reveal direction="left" delay={0.2}>
            <div className="flex flex-col items-center gap-6">
              {/* Placeholder para Lottie de oveja */}
              <div className="flex h-64 w-64 items-center justify-center rounded-2xl bg-surface-2/50 text-sm text-muted-foreground">
                🐑 Lottie
              </div>
              
              {/* Cita bíblica */}
              <div className="max-w-sm text-center">
                <p className="text-sm leading-relaxed text-foreground/80">
                  "Pon en manos del Señor todas tus obras,<br />
                  y tus proyectos se cumplirán."
                </p>
                <p className="mt-2 text-xs font-semibold text-[#8F1242]">
                  Proverbios 16:3
                </p>
              </div>
            </div>
          </Reveal>

          {/* Derecha: Redes sociales + CV */}
          <Reveal direction="right" delay={0.3}>
            <div className="flex flex-col items-center justify-center gap-8">
              {/* Iconos de redes sociales en fila */}
              <div className="flex items-center gap-6">
                <motion.a
                  href="https://github.com/NicolMunoz012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#181717] text-white transition-all hover:bg-[#2d2d2d] active:scale-90"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </motion.a>

                <motion.a
                  href="mailto:nicol@email.com"
                  className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#EA4335] text-white transition-all hover:bg-[#d33426] active:scale-90"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Email"
                >
                  <Mail size={28} />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/nicol-munoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0077b5] text-white transition-all hover:bg-[#005885] active:scale-90"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </motion.a>

                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white transition-all hover:opacity-90 active:scale-90"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Instagram"
                >
                  <FaInstagram size={28} />
                </motion.a>
              </div>

              {/* Botón CV */}
              <motion.a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-[#6D0B31] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#8F1242] active:bg-[#5c1838] active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Mi hoja de vida (CV):</span>
                <Download size={20} />
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
