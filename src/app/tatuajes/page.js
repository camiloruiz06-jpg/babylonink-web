import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { whatsappLink } from "@/data/site";
import { getPrices } from "@/sanity/content";

export const metadata = {
  title: "Tatuajes",
  description:
    "Tatuajes personalizados en Babylon Ink, Barranquilla. Cada diseño es único y se trabaja con cita previa. Escríbenos para cotizar y agendar.",
};

// Mensaje que se autocompleta en WhatsApp para tatuajes
const tattooMsg =
  "¡Hola Babylon Ink! Quiero cotizar / agendar un tatuaje.\n" +
  "Mi idea es: \n" +
  "Tamaño aprox: \n" +
  "Zona del cuerpo: ";

const steps = [
  {
    n: "01",
    title: "Cuéntanos tu idea",
    desc: "Escríbenos por WhatsApp con tu idea, referencias, el tamaño aproximado y la zona del cuerpo.",
  },
  {
    n: "02",
    title: "Diseño personalizado",
    desc: "Nuestros artistas crean un diseño único para ti. Sin plantillas: tu tatuaje es solo tuyo.",
  },
  {
    n: "03",
    title: "Cotización y cita",
    desc: "Según el diseño, el tamaño y el detalle te damos el valor y agendamos la fecha que te sirva.",
  },
  {
    n: "04",
    title: "Día del tatuaje",
    desc: "Te tatuamos con material estéril y las máximas normas de bioseguridad, y te damos las indicaciones de cuidado.",
  },
];

export default async function TatuajesPage() {
  const { tattooMin } = await getPrices();
  return (
    <>
      <PageHeader
        kicker="Tatuajes"
        title={
          <>
            Diseños únicos, hechos <span className="text-blood">para ti</span>
          </>
        }
        subtitle="Cada tatuaje es una pieza personalizada. Por eso trabajamos con cita previa: primero creamos tu diseño y te cotizamos, luego te tatuamos."
      />

      {/* CÓMO FUNCIONA */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blood">
            Cómo funciona
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            De tu idea a tu <span className="text-blood">piel</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-carbon-light bg-carbon p-8">
                <span className="font-display text-5xl text-blood/30">
                  {s.n}
                </span>
                <h3 className="mt-3 text-2xl text-bone">{s.title}</h3>
                <p className="mt-3 text-ash">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* POR QUÉ CITA / SIN PRECIOS FIJOS */}
      <section className="border-y border-carbon-light bg-carbon">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <Reveal>
            <Ornament label="Importante" />
            <h2 className="mt-4 text-3xl md:text-4xl">
              ¿Por qué no hay precios <span className="text-blood">fijos</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ash">
              Un tatuaje no es un producto de catálogo: su valor depende del
              diseño, el tamaño, el detalle y la zona del cuerpo. Por eso cada
              proyecto se cotiza de forma personalizada. Cuéntanos tu idea y con
              gusto te asesoramos.
            </p>

            {/* Precio de referencia */}
            <div className="mx-auto mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-2xl border border-gold/40 bg-gold/5 px-8 py-5">
              <span className="text-sm uppercase tracking-wide text-ash">
                Tatuajes minimalistas
              </span>
              <span className="font-display text-3xl text-gold">
                desde {tattooMin}
              </span>
            </div>
            <p className="mt-3 text-sm text-ash">
              Valor de referencia. El precio final se define según tu diseño.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section className="grain relative overflow-hidden bg-ink py-24">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blood/20 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl">
              Agenda tu <span className="text-blood">tatuaje</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ash">
              Escríbenos por WhatsApp con tu idea y te acompañamos en todo el
              proceso, desde el diseño hasta el día de tu cita.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappLink(tattooMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blood px-8 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark sm:w-auto"
              >
                <FaWhatsapp size={20} /> Cotizar por WhatsApp
              </a>
              <Link
                href="/galeria"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-bone/30 px-8 py-4 font-bold uppercase tracking-wide text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink sm:w-auto"
              >
                Ver trabajos <FiArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
