"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "@/src/components/ui/button";
import neuraX from "@/public/assets/images/brand-neurax-smoke-variant.svg";
import neuraXMobile from "@/public/assets/images/brand-neurax-mobile-variant.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Metodología", href: "/nuestra-metodologia" },
    { name: "¿Por qué NeuraX?", href: "/por-que-neurax" },
    { name: "Contáctanos", href: "/contactanos" },
  ];

  return (
    <nav className="border-border bg-neurax-charcoal fixed top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <Image
            src={neuraX}
            alt="Logotipo NeuraX Desktop"
            width={180}
            height={56}
            priority
            className="hidden h-auto max-h-[52px] select-none md:block"
          />

          <Image
            src={neuraXMobile}
            alt="Logotipo NeuraX Mobile"
            width={160}
            height={50}
            priority
            className="block h-auto max-h-[50px] select-none md:hidden"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden h-full items-center space-x-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex h-full items-center font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-neurax-lavender"
                    : "text-neurax-smoke/80 hover:text-white"
                }`}
              >
                <span className="relative z-10 font-semibold">{link.name}</span>

                {/* Línea indicadora con animación */}
                <motion.div
                  className="bg-neurax-lavender absolute bottom-0 left-0 h-[3px] w-full"
                  initial={false}
                  animate={{
                    scaleX: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1], // Curva de animación suave
                  }}
                  style={{ originX: 0 }} // Animación desde la izquierda
                />

                {/* Línea hover - solo visible en hover si no está activo */}
                {!isActive && (
                  <div className="bg-neurax-smoke/80 absolute bottom-0 left-0 h-[3px] w-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-60" />
                )}
              </Link>
            );
          })}

          {/* CTA */}
          <Link target="_blank" href="https://wa.me/51933488855">
            <Button
              variant="ghost"
              className="hover:bg-neurax-violet hover:text-neurax-cyanSoft text-neurax-cyanSoft ml-4 font-medium transition-colors"
            >
              <IconBrandWhatsapp />
              Chat on WhatsApp
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          className={`text-neurax-smoke flex h-12 w-12 items-center justify-center rounded-lg text-2xl transition-all duration-200 focus:outline-none md:hidden ${
            open
              ? "border-neurax-violet border-2"
              : "border-2 border-transparent"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-neurax-violet bg-neurax-charcoal border-t-2 md:hidden"
          >
            <div className="flex flex-col space-y-3 px-6 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 pl-4 font-semibold transition-colors ${
                      isActive ? "text-neurax-lavender" : "text-neurax-smoke/80"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {/* Indicador lateral en móvil */}
                    {isActive && (
                      <motion.div
                        className="bg-neurax-lavender absolute top-0 left-0 h-full w-1 rounded-r"
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ originY: 0 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}

              {/* CTA Mobile */}
              <Link
                target="_blank"
                href="https://wa.me/51933488855"
                onClick={() => setOpen(false)}
              >
                <Button className="bg-neurax-cyanSoft text-neurax-charcoal mt-2 w-full transition-colors">
                  <IconBrandWhatsapp /> Chat on WhatsApp
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
