// Cómo se organiza el menú del panel (Studio)
export const deskStructure = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("⚙️ Configuración del sitio")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .title("💲 Precios")
        .id("priceList")
        .child(S.document().schemaType("priceList").documentId("priceList")),
      S.divider(),
      S.documentTypeListItem("teamMember").title("👥 Equipo"),
      S.documentTypeListItem("galleryItem").title("🖼️ Galería"),
    ]);

// Documentos únicos (no se pueden crear/duplicar/borrar)
export const singletonTypes = new Set(["siteSettings", "priceList"]);
