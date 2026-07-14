"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

// Saca las iniciales de un nombre: "Artista Uno" -> "AU"
function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({ member, big = false }) {
  const size = big ? "text-7xl" : "text-lg";
  if (member.photo) {
    return (
      <Image
        src={member.photo}
        alt={member.name}
        fill
        className="object-cover"
        sizes={big ? "(max-width:768px) 100vw, 40vw" : "56px"}
      />
    );
  }
  // Sin foto: iniciales sobre degradado
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-carbon-light to-ink">
      <span className={`font-display ${size} text-blood`}>
        {initials(member.name)}
      </span>
    </div>
  );
}

export default function TeamShowcase({ team = [] }) {
  const [active, setActive] = useState(0);
  const member = team[active];

  // Si solo hay un artista, mostramos una tarjeta de perfil centrada
  if (team.length === 1) {
    const m = team[0];
    return (
      <div className="mx-auto max-w-sm">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-carbon-light bg-carbon">
          <Avatar member={m} big />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blood">
              {m.role}
            </p>
            <h3 className="mt-1 text-4xl text-bone">{m.name}</h3>
            <p className="mt-2 text-ash">{m.specialty}</p>
            <a
              href={m.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bone transition-colors hover:text-blood"
            >
              <FaInstagram /> Ver en Instagram
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      {/* Panel destacado (cambia con animación) */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-carbon-light bg-carbon">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Avatar member={member} big />
            {/* Degradado inferior para leer el texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blood">
                {member.role}
              </p>
              <h3 className="mt-1 text-4xl text-bone">{member.name}</h3>
              <p className="mt-2 text-ash">{member.specialty}</p>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bone transition-colors hover:text-blood"
              >
                <FaInstagram /> Ver en Instagram
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lista de artistas para seleccionar */}
      <div className="grid gap-3 sm:grid-cols-2">
        {team.map((m, i) => {
          const isActive = i === active;
          return (
            <motion.button
              key={m.name}
              onClick={() => setActive(i)}
              whileHover={{ x: 6 }}
              className={`flex items-center gap-4 rounded-2xl border p-3 text-left transition-colors ${
                isActive
                  ? "border-blood bg-blood/10"
                  : "border-carbon-light bg-carbon hover:border-ash/40"
              }`}
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <Avatar member={m} />
              </div>
              <div className="min-w-0">
                <p
                  className={`truncate font-semibold ${
                    isActive ? "text-blood" : "text-bone"
                  }`}
                >
                  {m.name}
                </p>
                <p className="truncate text-sm text-ash">{m.role}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
