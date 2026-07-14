import { defineType, defineField } from "sanity";

// Catálogo en PDF (documento único). El cliente sube/reemplaza el archivo.
export default defineType({
  name: "catalog",
  title: "Catálogo (PDF)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      initialValue: "Catálogo de piercings",
    }),
    defineField({
      name: "pdf",
      title: "Archivo PDF del catálogo",
      type: "file",
      options: { accept: "application/pdf" },
    }),
  ],
  preview: { prepare: () => ({ title: "Catálogo (PDF)" }) },
});
