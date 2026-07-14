// ============================================================
//  Piercings por zonas del cuerpo
//  Cada zona tiene una posición (left/top en %) sobre la figura,
//  una descripción y la lista de piercings de esa zona.
//  👈 Ajusta textos y agrega/quita piercings según el estudio.
// ============================================================

export const zones = [
  {
    id: "orejas",
    name: "Orejas",
    left: 64,
    top: 10,
    blurb:
      "La zona más versátil. Desde el clásico lóbulo hasta combinaciones en todo el cartílago.",
    items: ["Lóbulo", "Helix", "Tragus", "Daith", "Conch", "Industrial"],
    material: "Titanio grado implante",
  },
  {
    id: "cara",
    name: "Cara",
    left: 50,
    top: 12,
    blurb:
      "Perforaciones faciales que resaltan tus rasgos. Colocación precisa y segura.",
    items: ["Ceja", "Nostril (nariz)", "Septum", "Medusa", "Monroe", "Labret"],
    material: "Titanio grado implante",
  },
  {
    id: "boca",
    name: "Boca / Lengua",
    left: 50,
    top: 15,
    blurb:
      "Perforaciones orales. Requieren cuidados especiales durante la cicatrización.",
    items: ["Lengua", "Smiley", "Frenillo"],
    material: "Titanio grado implante",
  },
  {
    id: "pezones",
    name: "Pezones",
    left: 39,
    top: 28,
    blurb:
      "Perforación íntima muy solicitada. Procedimiento discreto, seguro y estéril.",
    items: ["Nipple (horizontal)", "Nipple (vertical)"],
    material: "Titanio grado implante",
  },
  {
    id: "ombligo",
    name: "Ombligo",
    left: 50,
    top: 41,
    blurb:
      "Un clásico atemporal. Joyería colgante o de banana según tu estilo.",
    items: ["Navel (ombligo)", "Navel invertido"],
    material: "Titanio grado implante",
  },
  {
    id: "espalda-baja",
    name: "Espalda baja",
    left: 61,
    top: 47,
    blurb:
      "Microdermales y superficiales en la zona lumbar. Colocación experta para mejor cicatrización.",
    items: ["Microdermal", "Dermal lumbar", "Surface"],
    material: "Titanio grado implante",
  },
];

// ---- Materiales de las joyas ----
// 👈 Confirma el segundo material y agrega las fotos en public/joyas/
export const materials = [
  {
    name: "Titanio grado implante",
    subtitle: "ASTM F-136 · Biocompatible",
    desc: "El estándar de oro para piercings. Hipoalergénico, no libera níquel y es ideal para perforaciones nuevas y cicatrización. Máxima seguridad para tu piel.",
    highlight: true,
    photo: "/joyas/joyas-4.jpg",
  },
  {
    name: "Acero quirúrgico",
    subtitle: "316L",
    desc: "Opción resistente y económica para piercings ya cicatrizados. Amplia variedad de diseños y acabados.",
    highlight: false,
    photo: "/joyas/joyas-8.jpg",
  },
];

// ---- Lista de precios (piercings) ----
// 👈 Ajusta valores cuando cambien.
export const pricing = [
  { label: "Piercing + joya de titanio", price: "$80K" },
  { label: "Piercing + joya de acero", price: "$50K – $60K" },
  { label: "Piercing ombligo lujo (titanio)", price: "$90K" },
];

// ---- Lista de precios (solo joyas) ----
export const jewelryPricing = [
  { label: "Joya de titanio", price: "$40K" },
  { label: "Joya titanio ombligo lujo", price: "$50K" },
  { label: "Joya de acero básico", price: "$20K" },
  { label: "Joya de acero lujo", price: "$25K" },
];

// ---- Fotos de la vitrina de joyas ----
// Guarda tus fotos en  public/joyas/  con estos nombres y aparecerán solas.
// (Si un archivo no existe, simplemente no se muestra esa tarjeta.)
// Los "caption" son descripciones generales de lo que se ve en cada foto.
// 👈 Cámbialos por los nombres exactos de las joyas si quieres.
export const jewelryPhotos = [
  { src: "/joyas/joyas-1.jpg", caption: "Septum y clickers" },
  { src: "/joyas/joyas-2.jpg", caption: "Joyas de ombligo" },
  { src: "/joyas/joyas-3.jpg", caption: "Joya de ombligo" },
  { src: "/joyas/joyas-4.jpg", caption: "Barras y argollas" },
  { src: "/joyas/joyas-5.jpg", caption: "Barras y nostril" },
  { src: "/joyas/joyas-6.jpg", caption: "Joya de ombligo" },
  { src: "/joyas/joyas-7.jpg", caption: "Vitrina de joyas" },
  { src: "/joyas/joyas-8.jpg", caption: "Anillos y argollas" },
  { src: "/joyas/joyas-9.jpg", caption: "Escudos para pezón" },
  { src: "/joyas/joyas-10.jpg", caption: "Barras y circulares" },
];

// ---- Cuidados (Precauciones del catálogo) ----
export const care = {
  antes: [
    "Evita consumir alcohol, drogas o aspirinas 24 horas antes del procedimiento.",
    "Come algo antes de tu cita para evitar mareos o desmayos.",
    "Informa al perforador si tienes alguna alergia, condición médica o si estás embarazada.",
  ],
  despues: [
    "Lava tus manos antes de tocar tu piercing.",
    "Limpia tu piercing 2 a 3 veces al día con solución salina estéril.",
    "Evita tocar, girar o cambiar la joya hasta que sane completamente.",
    "No ingreses a piscinas, playas, jacuzzis ni saunas durante la cicatrización.",
  ],
};
