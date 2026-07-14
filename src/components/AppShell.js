"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

// Muestra la navbar/footer del sitio, EXCEPTO en el panel /studio
export default function AppShell({ children, settings }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return children;
  }

  return (
    <>
      <Navbar settings={settings} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
      <WhatsappFloat settings={settings} />
    </>
  );
}
