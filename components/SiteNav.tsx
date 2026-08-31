import Link from "next/link";

type Section = "pacientes" | "condiciones" | "prevencion" | "blog" | "dispensarios";

const Chevron = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function SiteNav({ active }: { active: Section }) {
  const here = (s: Section) => (active === s ? "here" : undefined);

  return (
    <div className="sitenav">
      <div className="sitenav-inner">
        <Link href="/" className="brand">
          <span className="mark mark-nav" role="img" aria-label="CannaID" />
          <span className="brand-name">CannaID</span>
        </Link>

        <div className="sitenav-links">
          <span className="navitem">
            <Link href="/" className={here("pacientes")}>
              Pacientes <Chevron />
            </Link>
            <span className="dropdown">
              <Link href="/#ruta-residente">Paciente nuevo</Link>
              <Link href="/#ruta-residente">Renovación</Link>
              <Link href="/#ruta-visitante">Visiting the island</Link>
            </span>
          </span>

          <Link href="/#preguntas-frecuentes">Preguntas frecuentes</Link>

          <span className="navitem">
            <Link href="/condiciones" className={here("condiciones")}>
              Condiciones y publicaciones <Chevron />
            </Link>
            <span className="dropdown">
              <Link href="/condiciones#las-condiciones">Las 24 condiciones</Link>
              <Link href="/condiciones#fuentes">Evidencia y fuentes</Link>
              <Link href="/condiciones#registro">Registro de pacientes</Link>
            </span>
          </span>

          <Link href="/prevencion" className={here("prevencion")}>
            Prevención
          </Link>
          <Link href="/blog" className={here("blog")}>
            Blog
          </Link>
        </div>

        <div className="sitenav-right">
          <span className="lang">
            <span className="on">ES</span>
            <span>EN</span>
          </span>
          <Link href="/#ruta-residente" className="btn btn-primary btn-sm">
            Empezar
          </Link>
        </div>

        {/* En móvil las secciones se despliegan desde aquí: el menú de escritorio se oculta. */}
        <details className="sitenav-mobile">
          <summary aria-label="Menú">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 8h16" />
              <path d="M4 16h16" />
            </svg>
          </summary>
          <nav className="sitenav-mobile-panel">
            <Link href="/">Pacientes</Link>
            <Link href="/#preguntas-frecuentes">Preguntas frecuentes</Link>
            <Link href="/condiciones">Condiciones y publicaciones</Link>
            <Link href="/prevencion">Prevención</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/dispensarios">Para dispensarios</Link>
          </nav>
        </details>
      </div>
    </div>
  );
}
