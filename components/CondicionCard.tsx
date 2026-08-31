import Link from "next/link";
import { Barras } from "@/components/Evidencia";
import type { Condicion } from "@/lib/condiciones";

const Flecha = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function CondicionCard({ condicion }: { condicion: Condicion }) {
  return (
    <div className="card stack" style={{ padding: "26px", gap: "12px" }}>
      <Barras nivel={condicion.evidencia} />
      <Link
        href={`/condiciones/${condicion.slug}`}
        className="d4"
        style={{ fontSize: "20px", color: "var(--ink)" }}
      >
        {condicion.nombre}
      </Link>
      <span className="small">{condicion.resumen}</span>
      <a
        href={condicion.fuenteUrl}
        target="_blank"
        rel="noopener"
        className="meta"
        style={{ fontWeight: "600", color: "var(--sage)", textDecoration: "underline" }}
      >
        {condicion.fuente} ↗
      </a>
      <Link
        href={`/condiciones/${condicion.slug}`}
        className="btn btn-ghost btn-xs"
        style={{ marginTop: "8px", alignSelf: "flex-start" }}
      >
        Pide tu cita
        <Flecha />
      </Link>
    </div>
  );
}
