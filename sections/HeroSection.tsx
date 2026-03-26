"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { HiDownload, HiExternalLink } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full pt-24 sm:pt-20 lg:pt-32 pb-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-10">

        {/* Foto de perfil */}
        <motion.div
          className="sm:h-62 sm:w-62"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/profile.jpg"
            alt="Nicol Muñoz"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Título */}
        <motion.h1
          className="text-center font-display font-bold leading-tight flex flex-row items-center gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="text-[clamp(1.5rem,3.5vw,2.5rem)] text-[#8F1242]">
            {t("hero.greeting")}
          </span>
          <span className="text-[clamp(2.25rem,5.5vw,4rem)] text-[#6D0B31]">
            {t("hero.name")}
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          className="max-w-2xl text-center text-[15px] leading-relaxed text-foreground/85 sm:text-[16px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Botón CV */}
        <motion.a
          href="#"
          className="inline-flex items-center gap-3 rounded-full bg-[#5c1838] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#7a1f4a] active:bg-[#4a1229] active:scale-95"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{t("hero.cvButton")}</span>
          <HiDownload size={18} />
          <HiExternalLink size={18} />
        </motion.a>

        {/* Iconos de redes sociales */}
        <motion.div
          className="flex items-center gap-4 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <motion.a
            href="https://github.com/NicolMunoz012"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8b2f5c] text-white transition-all hover:bg-[#6d2449] active:bg-[#5c1838] active:scale-90"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nicol-mu%C3%B1oz-7b4b14307/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077b5] text-white transition-all hover:bg-[#005885] active:bg-[#004471] active:scale-90"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
