import Link from "next/link";
import { FaTrophy, FaRegClock, FaGem, FaWind, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { site, whatsappLink } from "@/data/site";

// Mapa: nombre del ícono (en site.js) -> componente de ícono
const iconMap = {
  trophy: FaTrophy,
  clock: FaRegClock,
  gem: FaGem,
  smoke: FaWind,
};

const services = [
  {
    title: "Tatuajes",
    desc: "Diseños personalizados y agendados. 29 años de experiencia marcando piel con estilo.",
    href: "/tatuajes",
    cta: "Conoce más",
  },
  {
    title: "Piercings",
    desc: "Perforaciones seguras con joyería de titanio grado implante. Explora las zonas del cuerpo.",
    href: "/piercings",
    cta: "Ver piercings",
  },
  {
    title: "Smoke Shop",
    desc: "Productos y accesorios seleccionados. Pregúntanos por lo que tenemos disponible.",
    href: "/contacto",
    cta: "Escríbenos",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Cinta con los diferenciadores */}
      <Marquee />

      {/* SERVICIOS */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blood">
            Lo que hacemos
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Arte, cuerpo y <span className="text-blood">actitud</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <Link
                href={s.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-carbon-light bg-carbon p-8 transition-colors hover:border-blood"
              >
                <div>
                  <h3 className="text-2xl text-bone transition-colors group-hover:text-blood">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-ash">{s.desc}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-bone">
                  {s.cta}
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="border-y border-carbon-light bg-carbon">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {site.claims.map((claim, i) => {
            const Icon = iconMap[claim.icon] ?? FaGem;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blood/10 text-blood">
                    <Icon size={24} />
                  </div>
                  <p className="text-sm font-medium text-bone">{claim.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* BANDA CTA FINAL */}
      <section className="grain relative overflow-hidden bg-ink py-24">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blood/20 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl">
              ¿Listo para tu <span className="text-blood">próxima pieza</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ash">
              Escríbenos por WhatsApp y cuéntanos tu idea. Te asesoramos y
              agendamos tu cita.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blood px-8 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark"
            >
              <FaWhatsapp size={20} /> Agenda tu cita
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
