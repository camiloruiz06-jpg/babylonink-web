import { defineType, defineField } from "sanity";

// Configuración general del estudio (documento único)
export default defineType({
  name: "siteSettings",
  title: "Configuración del sitio",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nombre del estudio", type: "string" }),
    defineField({ name: "tagline", title: "Frase corta", type: "string" }),
    defineField({ name: "slogan", title: "Eslogan", type: "string" }),
    defineField({ name: "city", title: "Ciudad", type: "string" }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp (solo números con país, ej: 573013915261)",
      type: "string",
    }),
    defineField({
      name: "phoneDisplay",
      title: "Teléfono (como se muestra)",
      type: "string",
    }),
    defineField({ name: "email", title: "Correo", type: "string" }),
    defineField({ name: "address", title: "Dirección", type: "string" }),
    defineField({ name: "hours", title: "Horario (resumen)", type: "string" }),
    defineField({
      name: "instagram",
      title: "Instagram (enlace)",
      type: "url",
    }),
    defineField({
      name: "instagramHandle",
      title: "Instagram (@usuario)",
      type: "string",
    }),
    defineField({ name: "tiktok", title: "TikTok (enlace)", type: "url" }),
    defineField({ name: "facebook", title: "Facebook (enlace)", type: "url" }),
    defineField({
      name: "mapQuery",
      title: "Ubicación para el mapa (dirección de búsqueda)",
      type: "string",
    }),
  ],
  preview: { prepare: () => ({ title: "Configuración del sitio" }) },
});
