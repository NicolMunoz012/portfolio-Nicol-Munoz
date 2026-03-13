'use client';

import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  // Comentario: Estructura general de la aplicación con la barra de navegación y el contenido principal.
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-surface-2/40 to-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex w-full flex-1 flex-col gap-16 pb-16 pt-24 sm:pt-24 lg:pt-28">
        {children}
      </main>
    </div>
  );
}

