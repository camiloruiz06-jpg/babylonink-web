/**
 * Ornamento decorativo estilo filigrana (como los de una carta de tatuajes).
 * Úsalo para separar secciones. Opcionalmente muestra un texto en el centro.
 *
 * Uso:  <Ornament />               (solo la filigrana)
 *       <Ornament label="Joyas" /> (con texto en el centro)
 */
export default function Ornament({ label }) {
  const Flourish = ({ flip = false }) => (
    <svg
      viewBox="0 0 120 24"
      className="h-5 w-28 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <path d="M120 12 H70" strokeLinecap="round" />
      <path d="M70 12 C60 12 58 4 50 4 C44 4 42 10 48 12 C42 14 44 20 50 20 C58 20 60 12 70 12" />
      <path d="M40 12 C34 12 30 8 24 10" strokeLinecap="round" />
      <circle cx="18" cy="12" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );

  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <Flourish />
      {label ? (
        <span className="font-display text-sm uppercase tracking-[0.35em] text-gold">
          {label}
        </span>
      ) : (
        <span className="text-gold">✦</span>
      )}
      <Flourish flip />
    </div>
  );
}
