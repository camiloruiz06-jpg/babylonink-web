"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGem } from "react-icons/fa";
import { jewelryPhotos } from "@/data/piercings";

function Tile({ photo }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-carbon-light bg-carbon-light"
    >
      {!failed ? (
        // Usamos <img> normal para poder detectar si la foto aún no existe
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.src}
          alt={photo.caption}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ash">
          <FaGem size={26} className="opacity-40" />
          <span className="px-3 text-center text-xs uppercase tracking-wide">
            {photo.caption}
          </span>
        </div>
      )}

      {/* Rótulo inferior (solo si la foto cargó) */}
      {!failed && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-3">
          <span className="text-sm font-medium text-bone">{photo.caption}</span>
        </div>
      )}
    </motion.div>
  );
}

export default function JewelryGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {jewelryPhotos.map((p) => (
        <Tile key={p.src} photo={p} />
      ))}
    </div>
  );
}
