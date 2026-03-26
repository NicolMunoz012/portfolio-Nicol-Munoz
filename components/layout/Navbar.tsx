'use client';

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { IconButton } from "../ui/IconButton";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const NAV_ITEMS: {
  href: string;
  key: "about" | "projects" | "testimonials" | "experience" | "contact";
}[] = [
  { href: "#about", key: "about" },
  { href: "#projects", key: "projects" },
  { href: "#testimonials", key: "testimonials" },
  { href: "#experience", key: "experience" },
  { href: "#contact", key: "contact" },
];

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const scrollDirection = useScrollDirection({ threshold: 10 });
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isHidden = scrollDirection === "down";

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "es" : "en");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 bg-surface/90 backdrop-blur-xl transition-transform duration-300 ease-out ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[auto_1fr] items-center gap-4 px-4 sm:h-18 sm:px-6 lg:h-20 lg:px-10">
        {/* Logo izquierdo */}
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
            NM
          </div>
        </div>

        {/* Contenedor derecho: Links + Controles */}
        <div className="flex items-center justify-end gap-6 lg:gap-8">
          {/* Links de navegación (desktop) */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent nav-link"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>

          {/* Controles: Idioma + Tema */}
          <div className="flex items-center gap-2">
            {/* Selector de idioma - solo muestra el idioma actual */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden h-8 min-w-[48px] items-center justify-center rounded-full bg-surface-2/80 px-3 text-[11px] font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-accent/10 hover:text-accent lg:flex btn-ghost"
              aria-label={`Switch to ${locale === "en" ? "Spanish" : "English"}`}
            >
              {locale.toUpperCase()}
            </button>

            {/* Toggle tema */}
            <IconButton
              label="Toggle theme"
              onClick={toggleTheme}
              className="h-8 w-8 rounded-full bg-surface-2/70 p-0 text-[13px]"
              icon={<span>{theme === "dark" ? "☾" : "☼"}</span>}
            />

            {/* Menú móvil */}
            <div className="lg:hidden">
              <IconButton
                label="Open menu"
                onClick={() => setIsMobileOpen((open) => !open)}
                className="ml-1 h-8 w-8 rounded-full bg-surface-2/70 p-0 text-[11px]"
                icon={
                  <span className="flex flex-col gap-0.5">
                    <span className="h-[1.5px] w-4 rounded-full bg-foreground" />
                    <span className="h-[1.5px] w-4 rounded-full bg-foreground/80" />
                    <span className="h-[1.5px] w-3 self-end rounded-full bg-foreground/60" />
                  </span>
                }
                aria-expanded={isMobileOpen}
                aria-haspopup="true"
                aria-controls="mobile-nav"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Navegación móvil */}
      {isMobileOpen ? (
        <div className="lg:hidden">
          <div className="fixed inset-x-0 top-16 z-20 rounded-b-3xl bg-surface/95 px-4 pb-6 pt-4 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <div
              id="mobile-nav"
              className="flex flex-col gap-4 text-sm text-foreground"
            >
              <div className="grid grid-cols-2 gap-3">
                {NAV_ITEMS.map((item, index) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex flex-col gap-1 rounded-2xl bg-surface-2/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-accent/10 hover:text-accent btn-ghost"
                  >
                    <span className="text-[10px] text-muted">
                      0{index + 1}
                    </span>
                    <span>{t(`nav.${item.key}`)}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-2 flex items-center justify-between rounded-2xl bg-surface-2/80 px-3 py-2 text-xs">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="flex h-8 min-w-[48px] items-center justify-center rounded-full bg-surface/70 px-3 text-[11px] font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-accent/10 btn-ghost"
                >
                  {locale.toUpperCase()}
                </button>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="text-[13px] text-muted-foreground btn-icon"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? "☾" : "☼"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
