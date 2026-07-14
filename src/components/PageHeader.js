import Reveal from "@/components/Reveal";

/**
 * Encabezado estándar para las páginas internas.
 * Muestra un "kicker" pequeño arriba y un título grande.
 */
export default function PageHeader({ kicker, title, subtitle }) {
  return (
    <section className="grain relative overflow-hidden border-b border-carbon-light bg-carbon pt-32 pb-16">
      {/* Resplandor rojo suave */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blood/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <Reveal>
          {kicker && (
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blood">
              {kicker}
            </p>
          )}
          <h1 className="mt-3 text-5xl md:text-7xl">{title}</h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-ash">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
