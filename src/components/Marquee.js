import { site } from "@/data/site";

/**
 * Cinta de texto que se desplaza en bucle infinito.
 * Duplicamos el contenido para que el bucle se vea continuo.
 */
export default function Marquee({ items }) {
  const list = items ?? site.claims.map((c) => c.text);
  // Duplicamos la lista para el efecto de bucle sin cortes
  const doubled = [...list, ...list];

  return (
    <div className="relative flex overflow-hidden border-y border-carbon-light bg-blood py-3">
      <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap">
        {doubled.map((text, i) => (
          <span key={i} className="mx-6 flex items-center gap-6">
            <span className="font-display text-lg uppercase tracking-wider text-white">
              {text}
            </span>
            <span className="text-white/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
