import { defineType, defineField } from "sanity";

const item = {
  type: "object",
  fields: [
    { name: "label", title: "Concepto", type: "string" },
    { name: "price", title: "Precio", type: "string" },
  ],
  preview: { select: { title: "label", subtitle: "price" } },
};

// Lista de precios (documento único)
export default defineType({
  name: "priceList",
  title: "Precios",
  type: "document",
  fields: [
    defineField({
      name: "piercings",
      title: "Precios de piercings",
      type: "array",
      of: [item],
    }),
    defineField({
      name: "joyas",
      title: "Precios de joyas",
      type: "array",
      of: [item],
    }),
    defineField({
      name: "tattooMin",
      title: "Tatuaje minimalista (desde)",
      type: "string",
    }),
  ],
  preview: { prepare: () => ({ title: "Precios" }) },
});
