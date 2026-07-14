# Babylon Ink — Sitio web

Landing page para el estudio de tatuajes y piercings **Babylon Ink** (Barranquilla),
con un **panel de administración (CMS)** para que el negocio edite su contenido
sin necesidad de programar.

## Tecnologías

- **Next.js 16** (App Router) + React
- **Tailwind CSS v4** (estilos)
- **Framer Motion** (animaciones)
- **Sanity** (CMS / panel de administración)
- Desplegado en **Vercel** (deploy automático al hacer push a `main`)

## Estructura del proyecto

```
src/
├── app/            → páginas (cada carpeta = una ruta)
│   ├── page.js         /            (Inicio)
│   ├── nosotros/       /nosotros
│   ├── tatuajes/       /tatuajes
│   ├── piercings/      /piercings
│   ├── equipo/         /equipo
│   ├── galeria/        /galeria
│   ├── catalogo/       /catalogo
│   ├── contacto/       /contacto
│   └── studio/         /studio      (panel de administración)
├── components/     → componentes reutilizables (Navbar, Footer, etc.)
├── data/           → contenido por defecto (RESPALDO si Sanity no responde)
└── sanity/         → configuración del CMS, esquemas y lectura de contenido
scripts/seed.mjs    → migración inicial del contenido a Sanity
public/             → imágenes y archivos (logo, fotos, catálogo PDF)
```

## Desarrollo local

1. `npm install`
2. Crear `.env.local` en la raíz con:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=czjulml9
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. `npm run dev` → abre http://localhost:3000
   - Panel de administración: http://localhost:3000/studio

## Panel de administración (Sanity)

- **Project ID:** `czjulml9` · **Dataset:** `production`
- El panel vive en la ruta **`/studio`**.
- Contenido editable: **Configuración del sitio, Precios, Catálogo (PDF), Equipo, Galería**.
- Las páginas leen desde Sanity mediante `src/sanity/content.js`; si Sanity no
  responde, usan el **respaldo** en `src/data/*.js` (el sitio nunca se cae).
- Los cambios se reflejan en la web en ~60 s.

### Migración de contenido

```powershell
$env:SANITY_WRITE_TOKEN="<token de Sanity con rol Editor>"; node scripts/seed.mjs
```

## Despliegue (Vercel)

- Conectado a GitHub: cada `git push` a `main` genera un despliegue automático.
- Para usar el panel `/studio` en el sitio publicado, agregar la URL del sitio en
  **Sanity → manage → API → CORS Origins** (con *Allow credentials*).

## Manual para el cliente

La guía de edición para personas no técnicas está en **`MANUAL-USUARIO.md`**.
