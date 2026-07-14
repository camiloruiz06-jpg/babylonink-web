import { Anton, Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { site } from "@/data/site";
import { getSiteSettings } from "@/sanity/content";

// Fuente para titulares gigantes (estilo cartel rock)
const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

// Fuente para el texto normal
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// SEO: esto es lo que Google y las redes muestran de tu página
export const metadata = {
  title: {
    default: `${site.name} — Estudio de Tatuajes y Piercings en ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Primer estudio de tatuajes de Barranquilla. Pioneros del arte corporal en la Costa Caribe, 29 años marcando piel. Piercings con titanio grado implante y smoke shop. Agenda tu cita.",
  keywords: [
    "tatuajes Barranquilla",
    "piercings Barranquilla",
    "estudio de tatuajes",
    "titanio grado implante",
    "Babylon Ink",
  ],
  openGraph: {
    title: `${site.name} — Tatuajes y Piercings`,
    description: "+29 años marcando piel en Barranquilla.",
    type: "website",
    locale: "es_CO",
  },
};

export default async function RootLayout({ children }) {
  const settings = await getSiteSettings();
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ink text-bone">
        <AppShell settings={settings}>{children}</AppShell>
      </body>
    </html>
  );
}
