// ============================================================
//  Migración: sube el contenido actual a Sanity.
//  Uso (PowerShell):
//    $env:SANITY_WRITE_TOKEN="tu_token"; node scripts/seed.mjs
//  El token se crea en sanity.io/manage → API → Tokens (rol Editor).
// ============================================================
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("Falta SANITY_WRITE_TOKEN. Ver instrucciones arriba.");
  process.exit(1);
}

const client = createClient({
  projectId: "czjulml9",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// Sube una imagen local y devuelve la referencia para un campo image
async function uploadImage(relPath) {
  const buf = readFileSync(join(root, "public", relPath));
  const asset = await client.assets.upload("image", buf, {
    filename: relPath.split("/").pop(),
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function run() {
  // 1) Configuración del sitio
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    name: "Babylon Ink",
    tagline: "29 años marcando piel",
    slogan: "Pioneros del arte corporal en la Costa Caribe",
    city: "Barranquilla, Colombia",
    whatsapp: "573013915261",
    phoneDisplay: "+57 301 391 5261",
    email: "contacto@babylonink.com",
    address:
      "Cra. 45B #90-210 Loc 2, Nte. Centro Histórico, Barranquilla, Atlántico",
    hours: "Lun–Sáb 10:00 a.m.–7:30 p.m. · Dom 2:00–6:00 p.m.",
    instagram: "https://www.instagram.com/babylonink.tattoo",
    instagramHandle: "@babylonink.tattoo",
    tiktok: "https://www.tiktok.com/@babylontattooshop",
    facebook:
      "https://www.facebook.com/p/Babylon-ink-tattoo-100071635014825/",
    mapQuery:
      "Cra. 45B #90-210, Nte. Centro Historico, Barranquilla, Atlántico",
  });
  console.log("✓ Configuración del sitio");

  // 2) Precios
  await client.createOrReplace({
    _id: "priceList",
    _type: "priceList",
    piercings: [
      { _key: "p1", label: "Piercing + joya de titanio", price: "$80K" },
      { _key: "p2", label: "Piercing + joya de acero", price: "$50K – $60K" },
      { _key: "p3", label: "Piercing ombligo lujo (titanio)", price: "$90K" },
    ],
    joyas: [
      { _key: "j1", label: "Joya de titanio", price: "$40K" },
      { _key: "j2", label: "Joya titanio ombligo lujo", price: "$50K" },
      { _key: "j3", label: "Joya de acero básico", price: "$20K" },
      { _key: "j4", label: "Joya de acero lujo", price: "$25K" },
    ],
    tattooMin: "$130.000",
  });
  console.log("✓ Precios");

  // 3) Equipo (con fotos)
  const team = [
    {
      _id: "team-santiago",
      name: "Santiago",
      role: "Piercer",
      specialty: "Piercings & Titanio grado implante",
      instagram: "https://www.instagram.com/santi.piercer/",
      order: 1,
      img: "equipo/piercer.jpg",
    },
    {
      _id: "team-tatuador-1",
      name: "Tatuador 1",
      role: "Tatuador",
      specialty: "Tatuajes personalizados",
      instagram: "https://www.instagram.com/babylonink.tattoo",
      order: 2,
      img: "equipo/tatuador-1.jpg",
    },
    {
      _id: "team-tatuador-2",
      name: "Tatuador 2",
      role: "Tatuador",
      specialty: "Tatuajes personalizados",
      instagram: "https://www.instagram.com/babylonink.tattoo",
      order: 3,
      img: "equipo/tatuador-2.jpg",
    },
    {
      _id: "team-tatuador-3",
      name: "Tatuador 3",
      role: "Tatuador",
      specialty: "Tatuajes personalizados",
      instagram: "https://www.instagram.com/babylonink.tattoo",
      order: 4,
      img: "equipo/tatuador-3.jpg",
    },
  ];
  for (const m of team) {
    const photo = await uploadImage(m.img);
    await client.createOrReplace({
      _id: m._id,
      _type: "teamMember",
      name: m.name,
      role: m.role,
      specialty: m.specialty,
      instagram: m.instagram,
      order: m.order,
      photo,
    });
    console.log("✓ Equipo:", m.name);
  }

  // 4) Galería (posts de Instagram)
  const posts = [
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
  for (let i = 0; i < posts.length; i++) {
    await client.createOrReplace({
      _id: `gallery-${i + 1}`,
      _type: "galleryItem",
      instagramUrl: posts[i],
      order: i + 1,
    });
  }
  console.log("✓ Galería:", posts.length, "publicaciones");

  console.log("\n¡Migración completa! 🎉");
}

run().catch((e) => {
  console.error("Error en la migración:", e.message);
  process.exit(1);
});
