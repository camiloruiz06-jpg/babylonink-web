import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import WhatsappForm from "@/components/contact/WhatsappForm";
import Faq from "@/components/contact/Faq";
import { buildWhatsappLink } from "@/data/site";
import { getSiteSettings } from "@/sanity/content";
import {
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FiMapPin, FiMail, FiClock } from "react-icons/fi";

export const metadata = {
  title: "Contacto",
  description:
    "Agenda tu cita en Babylon Ink. Escríbenos por WhatsApp, encuéntranos en Barranquilla y resuelve tus dudas.",
};

export default async function ContactoPage() {
  const settings = await getSiteSettings();
  const wa = buildWhatsappLink(settings.contact.whatsapp);
  const mapSrc =
    settings.map.embedSrc ||
    `https://www.google.com/maps?q=${encodeURIComponent(
      settings.map.query
    )}&output=embed`;
  return (
    <>
      <PageHeader
        kicker="Contacto"
        title={
          <>
            Hablemos de tu <span className="text-blood">próxima cita</span>
          </>
        }
        subtitle="Todo empieza con un mensaje. Escríbenos y te respondemos por WhatsApp."
      />

      {/* FORMULARIO + INFO */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Formulario a WhatsApp */}
          <Reveal>
            <WhatsappForm settings={settings} />
          </Reveal>

          {/* Info de contacto */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-carbon-light bg-carbon p-5 transition-colors hover:border-blood"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blood/10 text-blood">
                  <FaWhatsapp size={22} />
                </span>
                <span>
                  <span className="block text-sm text-ash">WhatsApp</span>
                  <span className="block font-semibold text-bone">
                    {settings.contact.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${settings.contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-carbon-light bg-carbon p-5 transition-colors hover:border-blood"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blood/10 text-blood">
                  <FiMail size={22} />
                </span>
                <span>
                  <span className="block text-sm text-ash">Correo</span>
                  <span className="block font-semibold text-bone">
                    {settings.contact.email}
                  </span>
                </span>
              </a>

              <a
                href={settings.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-carbon-light bg-carbon p-5 transition-colors hover:border-blood"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blood/10 text-blood">
                  <FaInstagram size={22} />
                </span>
                <span>
                  <span className="block text-sm text-ash">Instagram</span>
                  <span className="block font-semibold text-bone">
                    {settings.social.instagramHandle}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-carbon-light bg-carbon p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blood/10 text-blood">
                  <FiMapPin size={22} />
                </span>
                <span>
                  <span className="block text-sm text-ash">Dirección</span>
                  <span className="block font-semibold text-bone">
                    {settings.contact.address}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-carbon-light bg-carbon p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blood/10 text-blood">
                  <FiClock size={22} />
                </span>
                <span>
                  <span className="block text-sm text-ash">Horario</span>
                  <span className="block font-semibold text-bone">
                    {settings.contact.hours}
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAPA + HORARIO */}
      <section className="border-y border-carbon-light">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <Reveal>
            <h2 className="mb-6 text-3xl md:text-4xl">
              Dónde <span className="text-blood">encontrarnos</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="overflow-hidden rounded-3xl border border-carbon-light">
              <iframe
                src={mapSrc}
                title="Ubicación de Babylon Ink"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Tabla de horario */}
            <div className="rounded-3xl border border-carbon-light bg-carbon p-6">
              <h3 className="text-2xl text-bone">Horario</h3>
              <ul className="mt-4 divide-y divide-carbon-light">
                {settings.contact.schedule.map((s) => (
                  <li
                    key={s.day}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className="text-ash">{s.day}</span>
                    <span className="font-medium text-bone">{s.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blood">
            Dudas
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Preguntas <span className="text-blood">frecuentes</span>
          </h2>
        </Reveal>
        <div className="mt-10">
          <Faq />
        </div>
      </section>
    </>
  );
}
