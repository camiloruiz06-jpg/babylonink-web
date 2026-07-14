import { cache } from "react";
import { sanityFetch } from "./client";
import { site as staticSite } from "@/data/site";
import { team as staticTeam } from "@/data/team";
import { pricing as staticPricing, jewelryPricing as staticJoyas } from "@/data/piercings";
import { instagramPosts as staticPosts } from "@/data/gallery";

// ---- Configuración del sitio (contacto, redes, horario, marca) ----
export const getSiteSettings = cache(async () => {
  const s = await sanityFetch(`*[_type == "siteSettings"][0]`, {}, null);
  if (!s) return staticSite;
  return {
    name: s.name ?? staticSite.name,
    tagline: s.tagline ?? staticSite.tagline,
    slogan: s.slogan ?? staticSite.slogan,
    city: s.city ?? staticSite.city,
    claims: staticSite.claims, // no editable en Sanity (se queda fijo)
    contact: {
      whatsapp: s.whatsapp ?? staticSite.contact.whatsapp,
      phoneDisplay: s.phoneDisplay ?? staticSite.contact.phoneDisplay,
      email: s.email ?? staticSite.contact.email,
      address: s.address ?? staticSite.contact.address,
      hours: s.hours ?? staticSite.contact.hours,
      schedule: staticSite.contact.schedule,
    },
    social: {
      instagram: s.instagram ?? staticSite.social.instagram,
      instagramHandle: s.instagramHandle ?? staticSite.social.instagramHandle,
      tiktok: s.tiktok ?? staticSite.social.tiktok,
      tiktokHandle: staticSite.social.tiktokHandle,
      facebook: s.facebook ?? staticSite.social.facebook,
    },
    map: {
      embedSrc: staticSite.map.embedSrc,
      query: s.mapQuery ?? staticSite.map.query,
    },
  };
});

// ---- Precios (piercings, joyas, tatuaje minimalista) ----
export const getPrices = cache(async () => {
  const p = await sanityFetch(`*[_type == "priceList"][0]`, {}, null);
  return {
    piercings: p?.piercings?.length ? p.piercings : staticPricing,
    joyas: p?.joyas?.length ? p.joyas : staticJoyas,
    tattooMin: p?.tattooMin ?? "$130.000",
  };
});

// ---- Equipo ----
export const getTeam = cache(async () => {
  const t = await sanityFetch(
    `*[_type == "teamMember"] | order(order asc){
      name, role, specialty, instagram, "photo": photo.asset->url
    }`,
    {},
    null
  );
  return t?.length ? t : staticTeam;
});

// ---- Catálogo (PDF) ----
export const getCatalog = cache(async () => {
  const c = await sanityFetch(
    `*[_type == "catalog"][0]{ "pdfUrl": pdf.asset->url, title }`,
    {},
    null
  );
  return {
    // Si no han subido PDF en Sanity, usa el que ya está en la web
    pdfUrl: c?.pdfUrl || "/catalogo/babylon-catalogo.pdf",
    title: c?.title || "Catálogo de piercings",
  };
});

// ---- Galería (URLs de publicaciones de Instagram) ----
export const getGalleryPosts = cache(async () => {
  const g = await sanityFetch(
    `*[_type == "galleryItem"] | order(order asc){ "url": instagramUrl }`,
    {},
    null
  );
  const urls = g?.map((x) => x.url).filter(Boolean);
  return urls?.length ? urls : staticPosts;
});
