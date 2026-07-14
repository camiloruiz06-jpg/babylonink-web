"use client";

import { useEffect } from "react";
import Script from "next/script";
import { FaInstagram } from "react-icons/fa";
import { instagramPosts, beholdFeedId } from "@/data/gallery";
import { site } from "@/data/site";

export default function InstagramGrid() {
  // Procesa los embeds manuales cuando ya cargó el script de Instagram
  useEffect(() => {
    if (!beholdFeedId && window?.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  // ---- MODO 1: Widget automático de Behold (recomendado) ----
  if (beholdFeedId) {
    return (
      <>
        <Script
          src="https://w.behold.so/widget.js"
          type="module"
          strategy="afterInteractive"
        />
        {/* Web component de Behold: muestra tu feed y se actualiza solo */}
        <behold-widget feed-id={beholdFeedId}></behold-widget>
      </>
    );
  }

  // ---- MODO 2: Publicaciones manuales embebidas ----
  if (instagramPosts.length > 0) {
    return (
      <>
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="afterInteractive"
          onLoad={() => window?.instgrm?.Embeds?.process()}
        />
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {instagramPosts.map((url) => (
            <blockquote
              key={url}
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{ margin: 0, width: "100%" }}
            />
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
      </>
    );
  }

  // ---- MODO 3: Sin configurar todavía → enlace al perfil ----
  return (
    <div className="rounded-3xl border border-dashed border-carbon-light bg-carbon p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blood/10 text-blood">
        <FaInstagram size={32} />
      </div>
      <h3 className="mt-5 text-2xl text-bone">Mira nuestros trabajos</h3>
      <p className="mx-auto mt-3 max-w-md text-ash">
        Estamos conectando la galería con Instagram. Mientras tanto, mira todos
        nuestros tatuajes, piercings y procedimientos directamente en nuestro
        perfil.
      </p>
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-blood px-8 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark"
      >
        <FaInstagram size={20} /> {site.social.instagramHandle}
      </a>
    </div>
  );
}
