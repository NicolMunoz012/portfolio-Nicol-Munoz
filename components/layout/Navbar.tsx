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

  // Comentario: Barra de navegación principal según wireframe: logo, links centrados y controles de idioma/tema a la derecha.
  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b border-border/70 bg-surface/90 backdrop-blur-xl transition-transform duration-300 ease-out ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center px-4 sm:h-18 sm:px-6 lg:h-20 lg:px-10">
        {/* Logo izquierdo */}
        <div className="flex flex-1 items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-surface-2/80 text-xs font-semibold text-foreground">
            NM
          </div>
        </div>

        {/* Links centrados (desktop) */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center gap-6 text-xs font-medium text-muted-foreground lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="tracking-[0.16em] uppercase text-[11px] transition-colors hover:text-accent"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>
        </div>

        {/* Controles derecha */}
        <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
          {/* Selector idioma compacto */}
          <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-surface/70 px-2 py-1 text-[11px] font-medium text-muted-foreground md:inline-flex">
            {["es", "en"].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code as typeof locale)}
                className={`px-2 py-0.5 transition-colors ${
                  locale === code
                    ? "rounded-full bg-foreground text-background"
                    : "hover:text-accent"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Toggle tema */}
          <IconButton
            label="Toggle theme"
            onClick={toggleTheme}
            className="h-8 w-8 rounded-full border-border/70 bg-surface/70 p-0 text-[13px]"
            icon={<span>{theme === "dark" ? "☾" : "☼"}</span>}
          />

          {/* Menú móvil */}
          <div className="md:hidden">
            <IconButton
              label="Open menu"
              onClick={() => setIsMobileOpen((open) => !open)}
              className="ml-1 h-8 w-8 rounded-full border-border/70 bg-surface/70 p-0 text-[11px]"
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
      </nav>

      {/* Navegación móvil */}
      {isMobileOpen ? (
        <div className="md:hidden">
          <div className="fixed inset-x-0 top-16 z-20 rounded-b-3xl border-b border-border/70 bg-surface/95 px-4 pb-6 pt-4 shadow-[0_18px_40px_rgba(15,23,42,0.38)] backdrop-blur-xl">
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
                    className="flex flex-col gap-1 rounded-2xl border border-border/70 bg-surface/70 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:border-accent/40 hover:bg-accent/10"
                  >
                    <span className="text-[10px] text-muted">
                      0{index + 1}
                    </span>
                    <span>{t(`nav.${item.key}`)}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-2 flex items-center justify-between rounded-2xl border border-border/70 bg-surface/80 px-3 py-2 text-xs">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/70 px-2 py-1 text-[11px] font-medium text-muted-foreground">
                  {["es", "en"].map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLocale(code as typeof locale)}
                      className={`px-2 py-0.5 transition-colors ${
                        locale === code
                          ? "rounded-full bg-foreground text-background"
                          : "hover:text-accent"
                      }`}
                    >
                      {code.toUpperCase()}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="text-[13px] text-muted-foreground"
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

