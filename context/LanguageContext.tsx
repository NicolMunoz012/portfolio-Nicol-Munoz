'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  getTranslation,
  type SupportedLocale,
  type TranslationPath,
  locales,
} from "../i18n";

type LanguageContextValue = {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (path: TranslationPath) => string;
  availableLocales: SupportedLocale[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>("es");

  // Comentario: Inicializa el idioma a partir de localStorage o del navegador.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY) as
      | SupportedLocale
      | null;

    if (stored && locales.includes(stored)) {
      setLocaleState(stored);
      return;
    }

    const browserLanguage =
      typeof navigator !== "undefined" ? navigator.language : "es";
    const baseLanguage = browserLanguage.split("-")[0] as SupportedLocale;

    if (locales.includes(baseLanguage)) {
      setLocaleState(baseLanguage);
    } else {
      setLocaleState("es");
    }
  }, []);

  const setLocale = useCallback((next: SupportedLocale) => {
    // Comentario: Actualiza el idioma y lo persiste en localStorage.
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    }
  }, []);

  const t = useCallback(
    (path: TranslationPath) => getTranslation(locale, path),
    [locale],
  );

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t, availableLocales: locales }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}

