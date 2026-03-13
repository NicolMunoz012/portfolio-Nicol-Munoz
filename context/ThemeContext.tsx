'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = "portfolio-theme";

function applyThemeToDocument(theme: Theme) {
  // Comentario: Aplica la clase de tema al elemento raíz del documento.
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  // Comentario: Inicializa el tema desde localStorage o preferencia de sistema.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as
      | Theme
      | null;

    if (stored === "light" || stored === "dark") {
      setThemeState(stored);
      applyThemeToDocument(stored);
      return;
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme: Theme = prefersDark ? "dark" : "light";
    setThemeState(initialTheme);
    applyThemeToDocument(initialTheme);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    // Comentario: Actualiza el tema, lo persiste y lo aplica al documento.
    setThemeState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    }
    applyThemeToDocument(next);
  }, []);

  const toggleTheme = useCallback(() => {
    // Comentario: Alterna entre modo claro y oscuro.
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

