import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { Barras } from "@/components/Evidencia";
import { CONDICIONES, ETIQUETA_EVIDENCIA, porSlug } from "@/lib/condiciones";
import { REGISTRO_URL } from "@/lib/site";

export function generateStaticParams() {
  return CONDICIONES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condicion = porSlug(slug);
  if (!condicion) return {};

  return {
    title: `Cannabis medicinal para ${condicion.nombreEnFrase}`,
    description: condicion.resumen,
  };
}

export default async function FichaCondicion({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condicion = porSlug(slug);
  if (!condicion) notFound();

  const relacionadas = condicion.relacionadas
    .map(porSlug)
    .filter((c) => c !== undefined);

  return (
    <>
      <SiteNav active="condiciones" />

      <div className="wrap" style={{ paddingTop: "40px", paddingBottom: "76px" }}>
        <Link href="/condiciones" className="btn btn-ghost btn-xs" style={{ marginBottom: "26px" }}>
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
            <path d="M19 12H5" />
            <path d="m11 18-6-6 6-6" />
          </svg>
          Todas las condiciones
        </Link>

        <p className="meta" style={{ marginBottom: "18px" }}>
          Condiciones → {condicion.nombre}
        </p>

        <div className="grid12" style={{ gap: "48px" }}>
          <div style={{ gridColumn: "span 7" }}>
            <h1 className="d2" style={{ marginBottom: "22px" }}>
              Cannabis medicinal para {condicion.nombreEnFrase} en Puerto Rico
            </h1>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "30px" }}>
              <span className="tag">Califica bajo el Reglamento 9038</span>
              <span className="tag" style={{ background: "var(--sage)", color: "var(--white)" }}>
                <Barras nivel={condicion.evidencia} sobreOscuro />{" "}
                {ETIQUETA_EVIDENCIA[condicion.evidencia]}
              </span>
            </div>

            <h2 className="d4" style={{ marginBottom: "10px" }}>
              Qué dice la evidencia
            </h2>
            <p className="body" style={{ marginBottom: "12px" }}>
              {condicion.resumen}
            </p>
            <p className="body" style={{ marginBottom: "28px" }}>
              <a
                href={condicion.fuenteUrl}
                target="_blank"
                rel="noopener"
                style={{ color: "var(--clay)", fontWeight: "600", textDecoration: "underline" }}
              >
                Leer el estudio ({condicion.fuente}) ↗
              </a>
            </p>

            <h2 className="d4" style={{ marginBottom: "10px" }}>
              Qué esperar en tu consulta
            </h2>
            <p className="body" style={{ marginBottom: "28px" }}>
              El médico revisará tu historial, la condición que te trae, qué has probado antes y qué
              medicamentos tomas ahora — sobre todo anticoagulantes, sedantes y antiepilépticos, donde
              hay interacciones documentadas. Saldrás con una dosis inicial baja y una fecha de
              seguimiento.
            </p>

            <h2 className="d4" style={{ marginBottom: "10px" }}>
              Antes de decidir
            </h2>
            <p className="body" style={{ marginBottom: "32px" }}>
              El cannabis no es la primera línea para todo. Lee la sección de{" "}
              <Link
                href="/prevencion"
                style={{ color: "var(--sage)", fontWeight: "600", textDecoration: "underline" }}
              >
                Prevención
              </Link>{" "}
              antes de tu cita.
            </p>

            <a href={REGISTRO_URL} className="btn btn-primary">
              Pide tu cita — $39
            </a>
            {/* Firma médica: cada ficha debería ir revisada por un médico con nombre y
                número de licencia. Sin ese dato la sección pierde su fuerza, así que la
                línea no se publica en blanco. */}
          </div>

          <div style={{ gridColumn: "span 5" }} className="stack">
            {relacionadas.length > 0 && (
              <div className="card" style={{ marginBottom: "14px" }}>
                <h2 className="d4" style={{ marginBottom: "16px" }}>
                  Condiciones relacionadas
                </h2>
                <div className="stack" style={{ gap: "12px" }}>
                  {relacionadas.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/condiciones/${c.slug}`}
                      className="small"
                      style={{ fontWeight: "600", color: "var(--sage)" }}
                    >
                      {c.nombre}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="card-clay">
              <h2 className="d4" style={{ marginBottom: "12px" }}>
                Si no calificas
              </h2>
              <p className="small">
                Te devolvemos el pago completo. Sin preguntas y sin letra pequeña.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
