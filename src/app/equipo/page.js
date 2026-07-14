import PageHeader from "@/components/PageHeader";
import TeamShowcase from "@/components/team/TeamShowcase";
import { getTeam } from "@/sanity/content";

export const metadata = {
  title: "Equipo",
  description:
    "Conoce al equipo de artistas y piercers de Babylon Ink en Barranquilla.",
};

export default async function EquipoPage() {
  const team = await getTeam();
  return (
    <>
      <PageHeader
        kicker="Nuestro equipo"
        title={
          <>
            Las manos detrás del <span className="text-blood">arte</span>
          </>
        }
        subtitle="Artistas y piercers con años de experiencia detrás de cada procedimiento."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <TeamShowcase team={team} />
      </section>
    </>
  );
}
