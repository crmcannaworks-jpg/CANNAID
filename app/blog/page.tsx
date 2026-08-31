import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Leyes, viajes y vida diaria con tu licencia de cannabis medicinal en Puerto Rico.",
};

export default function Blog() {
  return (
    <>
      <SiteNav active="blog" />
  
    <div className="wrap" style={{ paddingTop: '72px' }}>
      <div className="grid12" style={{ alignItems: 'center', gap: '48px' }}>
        <div style={{ gridColumn: 'span 7' }}>
          <span className="tag" style={{ marginBottom: '26px' }}>Blog</span>
          <h1 className="d1" style={{ fontSize: 'clamp(38px, 5vw, 68px)', marginBottom: '24px' }}>Leyes, viajes y vida diaria con tu licencia.</h1>
          <p className="lead" style={{ maxWidth: '500px' }}>Lo cotidiano de ser paciente en Puerto Rico. Lo clínico vive en Research y los riesgos en Prevención — separarlos evita que un artículo de viaje se lea como consejo médico.</p>
        </div>
        <div style={{ gridColumn: 'span 5' }}>
          <div className="card-clay">
            <h3 className="d4" style={{ marginBottom: '12px' }}>Recibe los nuevos</h3>
            <p className="small" style={{ marginBottom: '22px' }}>Un correo cuando publicamos algo que te afecta como paciente. Sin promociones de dispensarios.</p>
            <div style={{ background: 'var(--white)', borderRadius: '999px', padding: '16px 24px', fontSize: '16px', color: 'var(--faint)', marginBottom: '12px' }}>tu@correo.com</div>
            <span className="btn btn-clay btn-block">Suscribirme</span>
          </div>
        </div>
      </div>
    </div>
  
    <div className="wrap" style={{ paddingTop: '64px' }}>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
        <span className="btn btn-primary btn-sm">Todo</span>
        <span className="btn btn-ghost btn-sm">Viajes</span>
        <span className="btn btn-ghost btn-sm">Legal</span>
        <span className="btn btn-ghost btn-sm">Proceso</span>
        <span className="btn btn-ghost btn-sm">Vida diaria</span>
      </div>
  
      <div className="post" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', marginBottom: '20px', alignItems: 'stretch' }}>
        <span className="post-thumb" style={{ aspectRatio: 'auto', minHeight: '320px' }}><span className="mark" style={{ width: '130px', height: '88px', opacity: '0.4' }}></span></span>
        <span className="stack" style={{ padding: '48px', justifyContent: 'center', gap: '14px' }}>
          <span className="eyebrow">Viajes · Destacado</span>
          <span className="d2" style={{ fontSize: 'clamp(28px, 2.8vw, 38px)' }}>Volar a Puerto Rico con cannabis medicinal</span>
          <span className="body">Qué permite la TSA, qué pasa realmente en el Luis Muñoz Marín, y por qué tu certificación estatal no viaja contigo aunque Puerto Rico sea territorio de EE.UU.</span>
          <span className="meta" style={{ marginTop: '6px' }}>[FECHA] · 6 min</span>
        </span>
      </div>
  
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px', paddingBottom: '104px' }}>
        <div className="post">
          <span className="post-thumb post-thumb-clay"><span className="mark" style={{ width: '84px', height: '57px', opacity: '0.4' }}></span></span>
          <span className="stack" style={{ padding: '28px', gap: '10px' }}>
            <span className="eyebrow">Legal</span>
            <span className="d4">Cannabis y playa: cómo disfrutar ambas sin multa</span>
            <span className="small">Las playas son propiedad pública y ahí la licencia médica no te protege. Dónde sí puedes consumir.</span>
            <span className="meta" style={{ marginTop: '6px' }}>[FECHA] · 5 min</span>
          </span>
        </div>
        <div className="post">
          <span className="post-thumb post-thumb-sand"><span className="mark" style={{ width: '84px', height: '57px', opacity: '0.4' }}></span></span>
          <span className="stack" style={{ padding: '28px', gap: '10px' }}>
            <span className="eyebrow">Proceso</span>
            <span className="d4">Cómo certificarte para cannabis medicinal en PR</span>
            <span className="small">Requisitos, documentos, costos reales y cuánto tarda de verdad cada etapa ante el Departamento de Salud.</span>
            <span className="meta" style={{ marginTop: '6px' }}>[FECHA] · 8 min</span>
          </span>
        </div>
        <div className="post">
          <span className="post-thumb"><span className="mark" style={{ width: '84px', height: '57px', opacity: '0.25' }}></span></span>
          <span className="stack" style={{ padding: '28px', gap: '10px' }}>
            <span className="eyebrow" style={{ color: 'var(--faint)' }}>Vida diaria · Borrador</span>
            <span className="d4"><span className="ph">[Trabajo y licencia médica en Puerto Rico]</span></span>
            <span className="small"><span className="ph">[Qué protege y qué no frente a una prueba de dopaje del patrono. De lo que más preguntan y de lo que casi nadie escribe con precisión.]</span></span>
            <span className="meta" style={{ marginTop: '6px' }}>Sin publicar</span>
          </span>
        </div>
        <div className="post">
          <span className="post-thumb"><span className="mark" style={{ width: '84px', height: '57px', opacity: '0.25' }}></span></span>
          <span className="stack" style={{ padding: '28px', gap: '10px' }}>
            <span className="eyebrow" style={{ color: 'var(--faint)' }}>Vida diaria · Borrador</span>
            <span className="d4"><span className="ph">[Cómo leer la etiqueta de un producto de dispensario]</span></span>
            <span className="small"><span className="ph">[THC, CBD, terpenos y miligramos por dosis. Enlaza natural hacia Research y da razón para volver después de certificarse.]</span></span>
            <span className="meta" style={{ marginTop: '6px' }}>Sin publicar</span>
          </span>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
