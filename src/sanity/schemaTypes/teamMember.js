import { defineType, defineField } from "sanity";

// Un artista del equipo
export default defineType({
  name: "teamMember",
  title: "Artista",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nombre", type: "string" }),
    defineField({
      name: "role",
      title: "Rol (Tatuador, Piercer…)",
      type: "string",
    }),
    defineField({ name: "specialty", title: "Especialidad", type: "string" }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "instagram", title: "Instagram (enlace)", type: "url" }),
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
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
});
