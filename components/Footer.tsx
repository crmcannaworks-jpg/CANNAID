import Link from "next/link";
import { CONTACTO } from "@/lib/site";

export default function Footer() {
  return (
    <div className="wrap" style={{ paddingBottom: "60px" }}>
      <div
        className="grid12"
        style={{ borderTop: "1px solid var(--line)", paddingTop: "44px" }}
      >
        <div style={{ gridColumn: "span 5" }}>
          <Link href="/" className="brand" style={{ marginBottom: "18px" }}>
            <span className="mark" style={{ width: "38px", height: "26px" }} role="img" aria-label="CannaID" />
            <span className="brand-name" style={{ fontSize: "20px" }}>
              CannaID
            </span>
          </Link>
          <p className="meta" style={{ lineHeight: "1.7", marginTop: "16px", maxWidth: "360px" }}>
            CannaID es un grupo de expertos de la salud en el uso de Cannabis Medicinal,
            comprometidos en mejorar la calidad de vida de miles de pacientes.
          </p>
        </div>

        <div style={{ gridColumn: "span 2" }} className="stack">
          <span className="meta" style={{ fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
            Pacientes
          </span>
          <Link href="/condiciones" className="small" style={{ marginBottom: "12px" }}>
            Condiciones y publicaciones
          </Link>
          <Link href="/#ruta-residente" className="small" style={{ marginBottom: "12px" }}>
            Residentes
          </Link>
          <Link href="/#ruta-visitante" className="small" style={{ marginBottom: "12px" }}>
            Visitors
          </Link>
          <Link href="/#ruta-residente" className="small">
            Renovación
          </Link>
        </div>

        <div style={{ gridColumn: "span 2" }} className="stack">
          <span className="meta" style={{ fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
            Aprende
          </span>
          <Link href="/prevencion" className="small" style={{ marginBottom: "12px" }}>
            Prevención
          </Link>
          <Link href="/blog" className="small" style={{ marginBottom: "12px" }}>
            Blog
          </Link>
          <Link href="/dispensarios" className="small">
            Para dispensarios
          </Link>
        </div>

        <div style={{ gridColumn: "span 3" }} className="stack">
          <span className="meta" style={{ fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
            Contacto
          </span>
          <a href={`tel:+1${CONTACTO.telefono.replace(/-/g, "")}`} className="small" style={{ marginBottom: "12px" }}>
            {CONTACTO.telefono}
          </a>
          <a href={`mailto:${CONTACTO.email}`} className="small" style={{ marginBottom: "12px" }}>
            {CONTACTO.email}
          </a>
          <span className="meta">Lun–Vie, 9:00–18:00 AST</span>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--line)",
          marginTop: "40px",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
        className="meta"
      >
        <span>© {new Date().getFullYear()} CannaID PR</span>
        {/* Política de privacidad, términos y aviso HIPAA: enlazar aquí cuando existan
            los documentos aprobados. Un enlace a una página vacía en un sitio de salud
            es peor que no tener el enlace. */}
        <span style={{ display: "flex", gap: "24px" }}>
          <a href={`mailto:${CONTACTO.email}`}>Preguntas sobre privacidad</a>
        </span>
      </div>
    </div>
  );
}
