// ============================================================
//  Galería — Conexión con Instagram
//
//  MÉTODO PRINCIPAL: Widget automático con Behold.so (gratis)
//  Cuando publiques en Instagram, la galería se actualiza SOLA.
//
//  Cómo obtener tu Feed ID (una sola vez):
//   1. Entra a https://behold.so  y crea una cuenta gratis.
//   2. Conecta tu Instagram de Babylon Ink (debe ser cuenta
//      Profesional: Empresa o Creador. Si es personal, cámbiala
//      gratis en Instagram > Configuración > Tipo de cuenta).
//   3. Crea un "feed" con esa cuenta.
//   4. En el código de inserción verás algo como:
//         <behold-widget feed-id="AbC123XyZ"></behold-widget>
//      Copia SOLO ese id (lo que va entre comillas en feed-id).
//   5. Pégalo aquí abajo, entre las comillas de beholdFeedId.
// ============================================================

// ------------------------------------------------------------
//  GALERÍA ESTÁTICA (método actual): 7 fotos que tú controlas.
//  Para cambiar una foto: guarda tu imagen en  public/galeria/
//  con el mismo nombre (galeria-1.jpg ... galeria-7.jpg).
//  No necesitas acceso a la cuenta de Instagram del cliente.
// ------------------------------------------------------------
export const galleryPhotos = [
  { src: "/galeria/galeria-1.jpg", caption: "Septum con ópalo" },
  { src: "/galeria/galeria-2.jpg", caption: "Piercing de ombligo" },
  { src: "/galeria/galeria-3.jpg", caption: "Industrial (oreja)" },
  { src: "/galeria/galeria-4.jpg", caption: "Ombligo flor de cristal" },
  { src: "/galeria/galeria-5.jpg", caption: "Plugs y expansiones" },
  { src: "/galeria/galeria-6.jpg", caption: "Anillos" },
  { src: "/galeria/galeria-7.jpg", caption: "Ombligo hoja de cristal" },
];

// ------------------------------------------------------------
//  (FUTURO / OPCIONAL) Widget automático de Behold.
//  Requiere que el DUEÑO conecte su Instagram. Mientras esté
//  vacío, la galería usa las fotos estáticas de arriba.
// ------------------------------------------------------------
export const beholdFeedId = ""; // 👈 (opcional) Feed ID de Behold

// ------------------------------------------------------------
//  RESPALDO (opcional): si no usas Behold, puedes pegar links
//  de publicaciones concretas y se mostrarán como posts reales.
//  Solo se usa si beholdFeedId está vacío.
// ------------------------------------------------------------
export const instagramPosts = [
  "https://www.instagram.com/p/DWkQxzjjfgn/",
  "https://www.instagram.com/p/DXXynL9jOd8/",
  "https://www.instagram.com/p/DXYCeCJjPJh/",
  "https://www.instagram.com/p/DVhaWzhjZEQ/",
  "https://www.instagram.com/p/DSGIBc9D7vb/",
  "https://www.instagram.com/p/CKeV7x-rF-p/",
  "https://www.instagram.com/p/DW0Tzh8DdHM/",
  "https://www.instagram.com/p/CSVUCxorMAx/",
  "https://www.instagram.com/p/DW0UKt7DWQp/",
];
