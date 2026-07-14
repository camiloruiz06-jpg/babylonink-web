import { defineType, defineField } from "sanity";

// Una publicación de Instagram para la galería
export default defineType({
  name: "galleryItem",
  title: "Publicación de galería",
  type: "document",
  fields: [
    defineField({
      name: "instagramUrl",
      title: "Enlace de la publicación de Instagram",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Orden (1 = primero)",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Orden",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: { select: { title: "instagramUrl", subtitle: "order" } },
});
