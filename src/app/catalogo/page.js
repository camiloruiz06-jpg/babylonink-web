import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { FiDownload } from "react-icons/fi";
import { getCatalog } from "@/sanity/content";

export const metadata = {
  title: "Catálogo",
  description:
    "Catálogo de piercings y joyería de Babylon Ink: precios, materiales y modelos. Míralo o descárgalo en PDF.",
};

function DownloadButton({ href }) {
  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-blood px-8 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark"
    >
      <FiDownload size={20} /> Descargar catálogo (PDF)
    </a>
  );
}

export default async function CatalogoPage() {
  const { pdfUrl } = await getCatalog();
  // Los archivos de Sanity se pueden forzar a descarga con ?dl=
  const downloadUrl = pdfUrl.includes("sanity")
    ? `${pdfUrl}?dl=Babylon-Ink-Catalogo.pdf`
    : pdfUrl;

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
          <DownloadButton href={downloadUrl} />
        </div>
      </section>

      {/* Visor del PDF embebido */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-carbon-light bg-carbon">
            <iframe
              src={pdfUrl}
              title="Catálogo Babylon Ink"
              className="h-[80vh] w-full"
              style={{ border: 0 }}
            />
          </div>
          <p className="mt-4 text-center text-sm text-ash">
            ¿No ves el catálogo? Descárgalo con el botón de abajo.
          </p>
        </Reveal>

        {/* Botón de descarga inferior */}
        <div className="mt-8 text-center">
          <DownloadButton href={downloadUrl} />
        </div>
      </section>
    </>
  );
}
