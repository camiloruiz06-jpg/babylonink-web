"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { galleryPhotos } from "@/data/gallery";
import { site } from "@/data/site";

function Photo({ photo }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-carbon-light bg-carbon-light"
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.src}
          alt={photo.caption}
          onError={() => setFailed(true)}
          className="w-full transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-2 text-ash">
          <FaInstagram size={26} className="opacity-40" />
          <span className="px-3 text-center text-xs uppercase tracking-wide">
            {photo.caption}
          </span>
        </div>
      )}

      {/* Rótulo al pasar el mouse */}
      {!failed && (
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
          <span className="p-4 text-sm font-medium text-bone">
            {photo.caption}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function WorkGallery() {
  return (
    <div>
      {/* Cuadrícula tipo masonry */}
      <div className="columns-2 gap-4 md:columns-3">
        {galleryPhotos.map((p) => (
          <Photo key={p.src} photo={p} />
        ))}
      </div>

      {/* Ver más en Instagram */}
      <div className="mt-12 text-center">
        <p className="text-ash">¿Quieres ver todos nuestros trabajos?</p>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-blood px-8 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark"
        >
          <FaInstagram size={20} /> Ver más en Instagram
        </a>
        <p className="mt-3 text-sm text-ash">{site.social.instagramHandle}</p>
      </div>
    </div>
  );
}
