import type { Metadata } from "next";
import { ReactNode } from "react";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";

// NeuraX base fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inter",
}); // Replacement for Helvetica Neue Bold

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "NeuraX | Tech, Design & Evol",
  description: "Soluciones tecnológicas inteligentes y futuristas.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-PE">
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
