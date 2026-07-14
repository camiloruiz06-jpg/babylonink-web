import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa";
import { FiMapPin, FiMail, FiClock } from "react-icons/fi";
import { navLinks, footerExtraLinks } from "@/data/nav";
import { site, whatsappLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-carbon-light bg-carbon">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 text-center md:grid-cols-4 md:text-left">
        {/* Marca */}
        <div className="md:col-span-1">
          <Image
            src="/brand/logo.png"
            alt="Babylon Ink"
            width={512}
            height={512}
            className="mx-auto h-20 w-auto md:mx-0"
          />
          <p className="mt-3 text-sm text-ash">{site.slogan}</p>
          <p className="mt-1 text-sm text-ash">{site.tagline}</p>
          <p className="mt-1 text-sm text-ash">{site.city}</p>

          {/* Redes */}
          <div className="mt-5 flex justify-center gap-3 md:justify-start">
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-carbon-light text-bone transition-colors hover:bg-blood"
              >
                <FaInstagram size={18} />
              </a>
            )}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-carbon-light text-bone transition-colors hover:bg-blood"
            >
              <FaWhatsapp size={18} />
            </a>
            {site.social.tiktok && (
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-carbon-light text-bone transition-colors hover:bg-blood"
              >
                <FaTiktok size={18} />
              </a>
            )}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-carbon-light text-bone transition-colors hover:bg-blood"
              >
                <FaFacebookF size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="mb-4 font-display text-lg text-bone">Navegación</h3>
          <ul className="space-y-2">
            {[...navLinks, ...footerExtraLinks].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ash transition-colors hover:text-blood"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="mb-4 font-display text-lg text-bone">Contacto</h3>
          <ul className="space-y-3 text-sm text-ash">
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <FiMapPin className="mt-0.5 shrink-0 text-blood" />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <FiMail className="mt-0.5 shrink-0 text-blood" />
              <a
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-bone"
              >
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <FaWhatsapp className="mt-0.5 shrink-0 text-blood" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-bone"
              >
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <FiClock className="mt-0.5 shrink-0 text-blood" />
              <span>{site.contact.hours}</span>
            </li>
          </ul>
        </div>

        {/* Instagram / CTA */}
        <div>
          <h3 className="mb-4 font-display text-lg text-bone">Síguenos</h3>
          <p className="text-sm text-ash">
            Mira nuestros trabajos más recientes en Instagram.
          </p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bone transition-colors hover:text-blood"
          >
            <FaInstagram /> {site.social.instagramHandle}
          </a>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-carbon-light">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-ash sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
          <p>Estudio de tatuajes y piercings · {site.city}</p>
        </div>
      </div>
    </footer>
  );
}
