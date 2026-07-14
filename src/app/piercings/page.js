import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import BodyMap from "@/components/piercings/BodyMap";
import PriceList from "@/components/piercings/PriceList";
import JewelryGallery from "@/components/piercings/JewelryGallery";
import { materials, pricing, jewelryPricing, care } from "@/data/piercings";
import { FaGem, FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/data/site";

export const metadata = {
  title: "Piercings",
  description:
    "Piercings por zonas del cuerpo con joyería de titanio grado implante. Precios, joyas y zonas en Babylon Ink, Barranquilla.",
};

export default function PiercingsPage() {
  return (
    <>
      <PageHeader
        kicker="Piercings"
        title={
          <>
            Explora por <span className="text-blood">zonas</span>
          </>
        }
        subtitle="Toca un punto en la figura o una zona para ver los piercings disponibles y el material recomendado."
      />

      {/* MAPA INTERACTIVO */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <BodyMap />
      </section>

      {/* GUÍA VISUAL DE ZONAS (oreja / rostro) */}
      <section className="border-t border-carbon-light bg-carbon">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <Reveal>
            <Ornament label="Guía de zonas" />
            <h2 className="mt-4 text-center text-4xl md:text-5xl">
              Oreja & <span className="text-blood">rostro</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-ash">
              Ubica cada perforación con nuestras guías profesionales.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-carbon-light">
                <Image
                  src="/piercings/oreja.jpg"
                  alt="Guía de piercings de oreja: hélix, tragus, daith, conch y más"
                  width={978}
                  height={1400}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-carbon-light">
                <Image
                  src="/piercings/cara.jpg"
                  alt="Guía de piercings de rostro: ceja, nostril, septum, medusa y más"
                  width={978}
                  height={1400}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section className="border-t border-carbon-light bg-carbon">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blood">
                Precios
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">
                Tarifas <span className="text-blood">claras</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-ash">
                Precios de referencia. El valor final depende de la zona y la
                joya que elijas.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <PriceList title="Piercings" items={pricing} />
            </Reveal>
            <Reveal delay={0.1}>
              <PriceList title="Joyas" items={jewelryPricing} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* MATERIALES DE JOYERÍA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blood">
              Joyería
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl">
              Dos materiales, una <span className="text-blood">garantía</span>
            </h2>
            <p className="mt-4 max-w-2xl text-ash">
              Trabajamos con joyería de calidad para que tu piercing luzca bien
              y cicatrice seguro.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {materials.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div
                  className={`h-full overflow-hidden rounded-3xl border bg-carbon ${
                    m.highlight ? "border-gold/50" : "border-carbon-light"
                  }`}
                >
                  {/* Foto de la joya (o marcador de posición) */}
                  <div className="relative aspect-video w-full bg-carbon-light">
                    {m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center text-ash">
                        <FaGem size={32} className="opacity-40" />
                        <span className="mt-2 text-xs uppercase tracking-wide">
                          Foto de la joya
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-2xl text-bone">{m.name}</h3>
                      {m.highlight && (
                        <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm uppercase tracking-wide text-blood">
                      {m.subtitle}
                    </p>
                    <p className="mt-4 text-ash">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VITRINA DE JOYAS */}
      <section className="border-t border-carbon-light bg-carbon">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <Reveal>
            <Ornament label="Joyas Titanio" />
            <h2 className="mt-4 text-center text-4xl md:text-5xl">
              Vitrina de <span className="text-blood">joyas</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-ash">
              Una muestra de nuestra joyería de titanio grado implante y más.
            </p>
          </Reveal>
          <div className="mt-12">
            <JewelryGallery />
          </div>

          {/* Enlace al catálogo completo */}
          <div className="mt-10 text-center">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-gold transition-colors hover:bg-gold/10"
            >
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      {/* CUIDADOS (Precauciones) */}
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <Ornament label="Cuidados" />
            <h2 className="mt-4 text-center text-4xl md:text-5xl">
              Antes y <span className="text-blood">después</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-ash">
              Sigue estas recomendaciones para una cicatrización segura.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-carbon-light bg-carbon p-8">
                <h3 className="text-2xl text-blood">Antes</h3>
                <ul className="mt-4 space-y-3">
                  {care.antes.map((c) => (
                    <li key={c} className="flex gap-3 text-ash">
                      <span className="mt-1 text-blood">✦</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-carbon-light bg-carbon p-8">
                <h3 className="text-2xl text-blood">Después</h3>
                <ul className="mt-4 space-y-3">
                  {care.despues.map((c) => (
                    <li key={c} className="flex gap-3 text-ash">
                      <span className="mt-1 text-blood">✦</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-carbon-light bg-carbon py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">
              ¿Te decides por un <span className="text-blood">piercing</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ash">
              Escríbenos y te asesoramos sobre la zona, la joya y los cuidados.
            </p>
            <a
              href={whatsappLink(
                "¡Hola Babylon Ink! Quiero información sobre un piercing."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blood px-8 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark"
            >
              <FaWhatsapp size={20} /> Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
