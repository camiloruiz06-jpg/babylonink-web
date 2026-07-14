import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { FiDownload } from "react-icons/fi";

export const metadata = {
  title: "Catálogo",
  description:
    "Catálogo de piercings y joyería de Babylon Ink: precios, materiales y modelos. Previsualiza y descarga el PDF.",
};

const PDF = "/catalogo/babylon-catalogo.pdf";
const TOTAL = 24;

// Rutas de las imágenes de cada página (pagina-01.jpg ... pagina-24.jpg)
const pages = Array.from(
  { length: TOTAL },
  (_, i) => `/catalogo/pages/pagina-${String(i + 1).padStart(2, "0")}.jpg`
);

function DownloadButton() {
  return (
    <a
      href={PDF}
      download="Babylon-Ink-Catalogo.pdf"
      className="inline-flex items-center gap-2 rounded-full bg-blood px-8 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark"
    >
      <FiDownload size={20} /> Descargar catálogo (PDF)
    </a>
  );
}

export default function CatalogoPage() {
  return (
    <>
      <PageHeader
        kicker="Catálogo"
        title={
          <>
            Catálogo de <span className="text-blood">piercings</span>
          </>
        }
        subtitle="Precios, materiales y modelos de joyería. Míralo aquí o descárgalo en PDF."
      />

      {/* Botón de descarga superior */}
      <section className="border-b border-carbon-light bg-carbon">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-5 py-10 text-center">
          <DownloadButton />
          <p className="text-sm text-ash">PDF · 9.6 MB · {TOTAL} páginas</p>
        </div>
      </section>

      {/* Previsualización: todas las páginas */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {pages.map((src, i) => (
            <Reveal key={src} delay={(i % 2) * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-carbon-light bg-carbon">
                {/* Imágenes de páginas: carga diferida para no pesar */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Catálogo Babylon Ink — página ${i + 1}`}
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Botón de descarga inferior */}
        <div className="mt-12 text-center">
          <DownloadButton />
        </div>
      </section>
    </>
  );
}
