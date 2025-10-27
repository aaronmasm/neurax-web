import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tu Proyecto", // Cambia esto por el nombre de tu app
  description: "Descripción de tu proyecto",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-PE">
      <body className="antialiased">{children}</body>
    </html>
  );
}
