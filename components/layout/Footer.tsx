'use client';

import { useLanguage } from "../../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  // Comentario: Pie de página con copyright, mensaje y enlace volver arriba.
  return (
    <footer
      id="footer"
      className="mt-auto w-full border-t border-border/70 bg-surface/50 py-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-10">
        <p className="text-center text-xs text-muted sm:text-left">
          © {new Date().getFullYear()} {t("nav.name")}. {t("footer.rights")}
        </p>
        <p className="text-center text-xs text-muted sm:text-right">
          {t("footer.madeWith")} <span className="text-accent/90"> ♥ </span>
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs font-medium text-muted-foreground underline-offset-2 transition-colors hover:text-accent nav-link"
        >
          {t("footer.backToTop")}
        </button>
      </div>
    </footer>
  );
}
