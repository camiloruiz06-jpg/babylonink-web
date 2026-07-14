"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { site, whatsappLink } from "@/data/site";

// Animación en cascada (cada hijo aparece un poquito después del anterior)
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="grain relative flex min-h-screen items-center justify-center overflow-hidden bg-ink">
      {/* Resplandor rojo de fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blood/20 blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-5 text-center"
      >
        {/* Logo */}
        <motion.div variants={item} className="mb-6 flex justify-center">
          <Image
            src="/brand/logo.png"
            alt="Babylon Ink"
            width={512}
            height={512}
            priority
            className="h-36 w-auto drop-shadow-[0_0_30px_rgba(214,31,38,0.25)] sm:h-48"
          />
        </motion.div>

        {/* Kicker */}
        <motion.p
          variants={item}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blood"
        >
          Estudio de Tatuajes & Piercings · {site.city}
        </motion.p>

        {/* Título gigante */}
        <motion.h1
          variants={item}
          className="text-6xl leading-none sm:text-8xl md:text-9xl"
        >
          <span className="text-bone">BABYLON</span>{" "}
          <span className="text-outline-blood">INK</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-lg text-ash sm:text-xl"
        >
          {site.slogan}. {site.tagline} y seguimos vigentes: tatuajes,
          piercings con titanio grado implante y smoke shop.
        </motion.p>

        {/* Botones */}
        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-blood px-8 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark sm:w-auto"
          >
            <FaWhatsapp size={20} /> Agenda tu cita
          </a>
          <Link
            href="/galeria"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-bone/30 px-8 py-4 font-bold uppercase tracking-wide text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink sm:w-auto"
          >
            Ver galería <FiArrowRight />
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-bone/30 p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-1.5 w-1.5 rounded-full bg-blood"
          />
        </div>
      </motion.div>
    </section>
  );
}
