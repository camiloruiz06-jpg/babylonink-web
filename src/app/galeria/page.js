import PageHeader from "@/components/PageHeader";
import InstagramGrid from "@/components/gallery/InstagramGrid";

export const metadata = {
  title: "Galería",
  description:
    "Galería de tatuajes, piercings y procedimientos realizados en Babylon Ink, directamente desde Instagram.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        kicker="Galería"
        title={
          <>
            Nuestro <span className="text-blood">trabajo</span> habla
          </>
        }
        subtitle="Tatuajes, piercings y procedimientos reales, directo desde nuestro Instagram."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <InstagramGrid />
      </section>
    </>
  );
}
