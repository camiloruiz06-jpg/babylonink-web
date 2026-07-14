// ============================================================
//  BABYLON INK — Datos centrales del negocio
//  Cambia aquí la información y se actualiza en TODA la página.
// ============================================================

export const site = {
  name: "Babylon Ink",
  tagline: "29 años marcando piel",
  city: "Barranquilla, Colombia",
  // Frase de marca (texto oficial del estudio)
  slogan: "Pioneros del arte corporal en la Costa Caribe",

  // Frases / diferenciadores (aparecen en el Hero)
  claims: [
    { icon: "trophy", text: "Primer estudio de tatuajes en Barranquilla" },
    { icon: "clock", text: "29 años de servicio y seguimos vigentes" },
    { icon: "gem", text: "Piercings seguros con titanio grado implante" },
    { icon: "smoke", text: "Smoke shop" },
  ],

  // ---- CONTACTO ---- (👈 CAMBIAR por los datos reales)
  contact: {
    // Número de WhatsApp en formato internacional SIN + ni espacios.
    // Ej: Colombia (57) + número => "573001234567"
    whatsapp: "573013915261",
    // Cómo se muestra en pantalla (bonito):
    phoneDisplay: "+57 301 391 5261",
    email: "contacto@babylonink.com", // 👈 CAMBIAR (falta el correo real)
    address: "Cra. 45B #90-210 Loc 2, Nte. Centro Histórico, Barranquilla, Atlántico",
    // Horario
    hours: "Lun–Sáb 10:00 a.m.–7:30 p.m. · Dom 2:00–6:00 p.m.",
    // Horario detallado (para la tabla en Contacto)
    schedule: [
      { day: "Lunes", time: "10:00 a.m. – 7:30 p.m." },
      { day: "Martes", time: "10:00 a.m. – 7:30 p.m." },
      { day: "Miércoles", time: "10:00 a.m. – 7:30 p.m." },
      { day: "Jueves", time: "10:00 a.m. – 7:30 p.m." },
      { day: "Viernes", time: "10:00 a.m. – 7:30 p.m." },
      { day: "Sábado", time: "10:00 a.m. – 7:30 p.m." },
      { day: "Domingo", time: "2:00 p.m. – 6:00 p.m." },
    ],
  },

  // ---- REDES SOCIALES ---- (👈 CAMBIAR los @ / URLs si hace falta)
  social: {
    instagram: "https://www.instagram.com/babylonink.tattoo",
    instagramHandle: "@babylonink.tattoo",
    tiktok: "https://www.tiktok.com/@babylontattooshop",
    tiktokHandle: "@babylontattooshop",
    facebook: "https://www.facebook.com/p/Babylon-ink-tattoo-100071635014825/",
  },

  // ---- UBICACIÓN (mapa) ----
  // Pega aquí el enlace "Insertar mapa" de Google Maps (iframe src)
  // o deja la búsqueda por dirección de abajo.
  map: {
    embedSrc: "", // 👈 opcional: URL del iframe de Google Maps
    query:
      "Cra. 45B #90-210, Nte. Centro Historico, Barranquilla, Atlántico", // usado si no hay embedSrc
  },
};

// Mensaje que se autocompleta al abrir WhatsApp desde los botones
export const defaultWhatsappMessage =
  "¡Hola Babylon Ink! Me gustaría agendar una cita / recibir más información.";

// Genera el link de WhatsApp con un mensaje opcional
export function whatsappLink(message = defaultWhatsappMessage) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}
