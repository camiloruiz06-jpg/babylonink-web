import Ornament from "@/components/Ornament";

/**
 * Lista de precios estilo carta: nombre ........... precio
 * @param title  Título de la lista (ej: "Piercings")
 * @param items  [{ label, price }]
 */
export default function PriceList({ title, items }) {
  return (
    <div className="rounded-3xl border border-carbon-light bg-carbon p-6 sm:p-8">
      <Ornament label={title} />
      <ul className="mt-4 space-y-4">
        {items.map((it) => (
          <li key={it.label} className="flex items-end gap-2">
            <span className="text-bone">{it.label}</span>
            {/* Línea de puntos que rellena el espacio */}
            <span className="mb-1 flex-1 border-b border-dotted border-ash/40" />
            <span className="font-display text-lg text-gold">{it.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
