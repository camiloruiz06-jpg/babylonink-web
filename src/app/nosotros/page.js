import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiClock } from "react-icons/fi";
import { buildWhatsappLink } from "@/data/site";
import { getSiteSettings } from "@/sanity/content";

const lugarFotos = [
  "/lugar/lugar-1.jpg",
  "/lugar/lugar-2.jpg",
  "/lugar/lugar-3.jpg",
];

export const metadata = {
  title: "Quiénes somos",
  description:
    "Babylon Ink, pioneros del arte corporal en la Costa Caribe. 29 años de servicio con las más altas normas de bioseguridad.",
};

const stats = [
  { value: "29", label: "Años de servicio" },
  { value: "1er", label: "Estudio en Barranquilla" },
  { value: "100%", label: "Titanio grado implante" },
  { value: "∞", label: "Historias en la piel" },
];

// Diferenciadores oficiales del estudio
const values = [
  {
    title: "Seguridad e higiene",
    desc: "Cumplimos estrictas normas de bioseguridad en cada procedimiento, con material estéril y desechable.",
  },
  {
    title: "Artistas profesionales",
    desc: "Un equipo con años de experiencia y técnica depurada en tatuaje y perforación.",
  },
  {
    title: "Implementos de alta calidad",
    desc: "Trabajamos con insumos profesionales y joyería de titanio grado implante.",
  },
  {
    title: "Pioneros y vigentes",
    desc: "Fuimos el primer estudio de la Costa Caribe y, tras 29 años, seguimos marcando piel.",
  },
];

export default async function NosotrosPage() {
  const settings = await getSiteSettings();
  const wa = buildWhatsappLink(settings.contact.whatsapp);
  const mapSrc =
    settings.map.embedSrc ||
    `https://www.google.com/maps?q=${encodeURIComponent(
      settings.map.query
    )}&output=embed`;
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    settings.map.query
  )}`;
  return (
    <>
      <PageHeader
        kicker="Quiénes somos"
        title={
          <>
            Pioneros del <span className="text-blood">arte corporal</span> en la
            Costa Caribe
          </>
        }
        subtitle="29 años de servicio y seguimos vigentes. Somos historia viva del tatuaje y el piercing en Barranquilla."
      />

      {/* HISTORIA */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-ash">
            <p>
              <span className="text-bone">Babylon Ink</span> nació con una
              misión clara: llevar el arte corporal a otro nivel en la Costa
              Caribe. Fuimos el primer estudio de tatuajes de Barranquilla y,
              desde entonces, hemos acompañado a miles de personas a contar su
              historia sobre la piel.
            </p>
            <p>
              Con <span className="text-bone">29 años de servicio</span>,
              combinamos la experiencia de toda una vida dedicada al arte con
              las más altas normas de bioseguridad. Cada tatuaje y cada piercing
              se realiza con material estéril y joyería de titanio grado
              implante.
            </p>
            <p>
              Hoy seguimos vigentes, con la misma pasión del primer día, sumando
              además nuestro <span className="text-bone">smoke shop</span> para
              completar la experiencia de la cultura urbana que nos define.
            </p>
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-4xl px-5">
        <Ornament />
      </div>

      {/* ESTADÍSTICAS */}
      <section className="mt-8 border-y border-carbon-light bg-carbon">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-16 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-5xl text-blood md:text-6xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wide text-ash">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALORES / BIOSEGURIDAD */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">
            Por qué <span className="text-blood">confiar</span> en nosotros
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-carbon-light bg-carbon p-8">
                <div className="mb-4 h-1 w-12 bg-blood" />
                <h3 className="text-2xl text-bone">{v.title}</h3>
                <p className="mt-3 text-ash">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NUESTRO ESTUDIO (fotos del lugar + ubicación compacta) */}
      <section className="border-t border-carbon-light bg-carbon">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <Reveal>
            <Ornament label="El lugar" />
            <h2 className="mt-4 text-center text-4xl md:text-5xl">
              Nuestro <span className="text-blood">estudio</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-ash">
              Un espacio pensado para tu comodidad y seguridad, en el Centro
              Histórico de Barranquilla.
            </p>
          </Reveal>

          {/* Fotos del lugar */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {lugarFotos.map((src, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <div className="overflow-hidden rounded-2xl border border-carbon-light">
                  <Image
                    src={src}
                    alt={`Estudio Babylon Ink ${i + 1}`}
                    width={960}
                    height={1200}
                    className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Ubicación compacta */}
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-carbon-light bg-ink p-8">
                <h3 className="text-2xl text-bone">Dónde estamos</h3>
                <p className="mt-4 flex items-start gap-2 text-ash">
                  <FiMapPin className="mt-0.5 shrink-0 text-blood" />
                  {settings.contact.address}
                </p>
                <p className="mt-2 flex items-start gap-2 text-ash">
                  <FiClock className="mt-0.5 shrink-0 text-blood" />
                  {settings.contact.hours}
                </p>
                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-blood px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark"
                >
                  <FiMapPin /> Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-carbon-light">
                <iframe
                  src={mapSrc}
                  title="Ubicación de Babylon Ink"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "280px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-carbon-light bg-ink py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">
              Escribe tu historia con nosotros
            </h2>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blood px-8 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark"
            >
              <FaWhatsapp size={20} /> Agenda tu cita
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
