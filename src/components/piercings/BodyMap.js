"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGem } from "react-icons/fa";
import { zones } from "@/data/piercings";

// Figura humana simple hecha con formas básicas (viewBox 100 x 210)
function BodyFigure() {
  return (
    <svg
      viewBox="0 0 100 210"
      className="h-full w-full"
      fill="var(--color-carbon-light)"
      stroke="rgba(163,163,163,0.25)"
      strokeWidth="1"
    >
      {/* cabeza */}
      <circle cx="50" cy="22" r="14" />
      {/* orejas */}
      <circle cx="36" cy="22" r="3.5" />
      <circle cx="64" cy="22" r="3.5" />
      {/* cuello */}
      <rect x="45" y="34" width="10" height="9" />
      {/* torso */}
      <path d="M30 44 Q50 40 70 44 L64 104 Q50 108 36 104 Z" />
      {/* brazos */}
      <rect x="20" y="46" width="8" height="52" rx="4" />
      <rect x="72" y="46" width="8" height="52" rx="4" />
      {/* cadera */}
      <path d="M36 104 Q50 108 64 104 L62 120 L38 120 Z" />
      {/* piernas */}
      <rect x="38" y="120" width="10" height="82" rx="5" />
      <rect x="52" y="120" width="10" height="82" rx="5" />
    </svg>
  );
}

export default function BodyMap() {
  const [activeId, setActiveId] = useState(zones[0].id);
  const active = zones.find((z) => z.id === activeId);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12">
      {/* Figura con puntos clicables */}
      <div className="relative mx-auto aspect-[100/210] w-full max-w-[320px]">
        <BodyFigure />

        {zones.map((z) => {
          const isActive = z.id === activeId;
          return (
            <button
              key={z.id}
              onClick={() => setActiveId(z.id)}
              aria-label={z.name}
              style={{ left: `${z.left}%`, top: `${z.top}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              {/* Aro de pulso en el punto activo */}
              {isActive && (
                <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-blood/50" />
              )}
              <span
                className={`relative block rounded-full border-2 transition-all ${
                  isActive
                    ? "h-5 w-5 border-white bg-blood"
                    : "h-4 w-4 border-blood bg-ink hover:bg-blood/40"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Panel de detalle + selector de zonas */}
      <div>
        {/* Etiquetas de zonas (también seleccionan) */}
        <div className="mb-6 flex flex-wrap gap-2">
          {zones.map((z) => (
            <button
              key={z.id}
              onClick={() => setActiveId(z.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                z.id === activeId
                  ? "border-blood bg-blood text-white"
                  : "border-carbon-light bg-carbon text-ash hover:border-ash/40 hover:text-bone"
              }`}
            >
              {z.name}
            </button>
          ))}
        </div>

        {/* Detalle animado */}
        <div className="rounded-3xl border border-carbon-light bg-carbon p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl text-bone">{active.name}</h3>
              <p className="mt-3 text-ash">{active.blurb}</p>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-blood">
                Piercings en esta zona
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-carbon-light px-3 py-1.5 text-sm text-bone"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-blood">
                Materiales disponibles
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm text-gold">
                  <FaGem /> Titanio grado implante
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-carbon-light px-4 py-2 text-sm text-ash">
                  <FaGem /> Acero quirúrgico
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
