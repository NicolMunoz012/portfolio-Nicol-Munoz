'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/ui/Reveal";

const ABOUT_IMAGES = [
  "/about-1.jpg",
  "/about-2.jpg",
  "/about-3.jpg",
  "/about-4.jpg",
  "/about-5.jpg",
];

export function AboutSection() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  // Carrusel automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-16">
      {/* Línea superior decorativa */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b2f5c] to-transparent" />

      {/* Título centrado */}
      <Reveal direction="up">
        <h2 className="mb-12 text-center font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[#6D0B31]">
          {t("sections.about.title")}
        </h2>
      </Reveal>

      {/* Grid: imagen izquierda | texto derecha */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12 lg:gap-16">
        {/* Carrusel de fotos con marco inclinado */}
        <Reveal direction="left">
          <div className="flex items-start justify-center md:justify-start">
            <div className="relative">
              {/* Marco tipo polaroid inclinado */}
              <div className="relative h-[380px] w-[300px] rotate-[-8deg] overflow-hidden rounded-lg border-[12px] border-[#6D0B31] bg-white shadow-2xl sm:h-[420px] sm:w-[340px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={ABOUT_IMAGES[currentImage]}
                    alt={`About ${currentImage + 1}`}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Texto + botones */}
        <Reveal direction="right">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-foreground/80">
              <p>{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
              <p>{t("about.bio3")}</p>
            </div>

            {/* Botones de recomendaciones */}
            <div className="flex flex-wrap gap-3">
              <motion.button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-[#8F1242] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#6D0B31] active:bg-[#5c1838] active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎵 {t("about.recommendations.playlist")}
              </motion.button>
              <motion.button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-[#8F1242] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#6D0B31] active:bg-[#5c1838] active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📚 {t("about.recommendations.books")}
              </motion.button>
              <motion.button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-[#8F1242] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#6D0B31] active:bg-[#5c1838] active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎙️ {t("about.recommendations.podcast")}
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
