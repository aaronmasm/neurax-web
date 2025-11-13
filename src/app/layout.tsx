import type { Metadata } from "next";
import { ReactNode } from "react";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

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
  description:
    "En NeuraX transformamos negocios con soluciones digitales innovadoras: " +
    "desarrollo web, diseño UX/UI y consultoría tecnológica para impulsar tu crecimiento digital.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-PE">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased md:subpixel-antialiased`}
      >
        <Navbar />
        <main className="pt-24">{children}</main>{" "}
        {/* pt-24 para dejar espacio al fixed Navbar */}
        <Footer />
      </body>
    </html>
  );
}
