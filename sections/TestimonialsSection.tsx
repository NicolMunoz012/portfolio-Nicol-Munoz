'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { getTranslationArray } from "../i18n";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialsSection() {
  const { locale } = useLanguage();
  const testimonials = getTranslationArray(locale, "testimonials.items") as Testimonial[];
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section id="testimonials" className="relative w-full bg-[#6D0B31] py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Título */}
        <motion.h2
          className="mb-12 text-center font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[#f5ebe0]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Testimonios
        </motion.h2>

        {/* Carrusel de testimonios */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={currentIndex + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col gap-4 rounded-2xl bg-[#f5ebe0] p-6 shadow-lg"
                >
                  {/* Quote */}
                  <p className="text-sm leading-relaxed text-[#6D0B31]">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="mt-auto flex flex-col gap-1">
                    <p className="text-sm font-bold text-[#8F1242]">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-[#6D0B31]/70">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Botones de navegación */}
          {testimonials.length > visibleCount && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <motion.button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ebe0] text-[#6D0B31] transition-all hover:bg-[#8F1242] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed active:scale-90"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonials"
              >
                <FaChevronLeft size={16} />
              </motion.button>

              <motion.button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ebe0] text-[#6D0B31] transition-all hover:bg-[#8F1242] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed active:scale-90"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonials"
              >
                <FaChevronRight size={16} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
