"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/data/nav";
import { whatsappLink } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Detecta el scroll para volver sólida la barra
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de página
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/95 backdrop-blur border-b border-carbon-light"
          : "bg-gradient-to-b from-ink/80 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Babylon Ink — inicio">
          <Image
            src="/brand/logo.png"
            alt="Babylon Ink"
            width={512}
            height={512}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Links de escritorio */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium uppercase tracking-wide transition-colors ${
                    active ? "text-blood" : "text-bone/80 hover:text-bone"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-blood" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA escritorio */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-blood px-5 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark md:inline-block"
        >
          Agenda tu cita
        </a>

        {/* Botón menú móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-bone md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-carbon-light bg-ink md:hidden"
          >
            <ul className="flex flex-col px-5 py-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block border-b border-carbon-light py-3 text-lg font-medium uppercase tracking-wide ${
                        active ? "text-blood" : "text-bone/90"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="px-5 pb-6">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-blood px-5 py-3 text-center font-bold uppercase tracking-wide text-white"
              >
                Agenda tu cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
