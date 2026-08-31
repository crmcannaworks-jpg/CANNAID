import type { Evidencia } from "@/lib/condiciones";

/**
 * Las tres barras de fuerza de la evidencia. Se leen como dato, no como reseña:
 * llenas cuando la evidencia sostiene el uso, en color de aviso cuando es
 * limitada, y en contorno cuando no hay evidencia suficiente.
 */
export function Barras({ nivel, sobreOscuro = false }: { nivel: Evidencia; sobreOscuro?: boolean }) {
  const claseDe = (indice: number) => {
    if (nivel === "solida") return "on";
    if (nivel === "moderada") return indice < 2 ? "on" : "";
    if (nivel === "limitada") return indice === 0 ? "warn" : "";
    return indice === 0 ? "none" : "";
  };

  return (
    <span className={sobreOscuro ? "bars bars-sobre-oscuro" : "bars"}>
      {[0, 1, 2].map((i) => (
        <i key={i} className={claseDe(i) || undefined} />
      ))}
    </span>
  );
}
