'use client';

import type { ReactNode } from "react";
import { LanguageProvider } from "../../context/LanguageContext";
import { ThemeProvider } from "../../context/ThemeContext";

type RootProvidersProps = {
  children: ReactNode;
};

export function RootProviders({ children }: RootProvidersProps) {
  // Comentario: Proveedor raíz que agrupa tema e idioma.
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}

