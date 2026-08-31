import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import Testimonios from "@/components/Testimonios";
import { REGISTRO_URL, CONTACTO, MOSTRAR_TESTIMONIOS } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteNav active="pacientes" />
    {/* HERO */}
    <div className="wrap" style={{ paddingTop: '64px' }}>
      <div style={{ maxWidth: '760px', marginBottom: '40px' }}>
        <h1 className="d1" style={{ marginBottom: '22px' }}>¿Estás list@ para tomar el control de tu salud?</h1>
        <p className="lead" style={{ marginBottom: '20px', maxWidth: '560px' }}>Renueva o saca tu licencia de Cannabis Medicinal por tan solo $39.</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <span className="tag">Todo incluido &mdash; sin cargos aparte por la radicación</span>
          <span className="tag tag-clay">Si no calificas, te devolvemos el pago completo</span>
        </div>
      </div>
  
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
        <div id="ruta-residente" className="card stack" style={{ gap: '22px' }}>
          <span className="tag">Residente</span>
          <h3 className="d3">¿Vives en Puerto Rico?</h3>
          <p className="body">Evaluación médica vía telemedicina y gestoría completa de tu licencia ante el Departamento de Salud. Licencia de un año.</p>
          <div className="stack" style={{ gap: '12px' }}>
            <span style={{ display: 'flex', gap: '11px', fontSize: '16px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Honorarios del Departamento de Salud incluidos</span>
            <span style={{ display: 'flex', gap: '11px', fontSize: '16px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Recomendación médica y voucher</span>
            <span style={{ display: 'flex', gap: '11px', fontSize: '16px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Recordatorio cuando toque renovar</span>
          </div>
          <div style={{ marginTop: '4px' }}>
            <a href={REGISTRO_URL} className="btn btn-primary btn-block">Quiero ser paciente — $39</a>
          </div>
        </div>
  
        <div id="ruta-visitante" className="card stack" style={{ gap: '22px' }}>
          <span className="tag tag-clay">Visitor <span style={{ opacity: '0.6' }}>EN</span></span>
          <h3 className="d3">Traveling to Puerto Rico?</h3>
          <p className="body">Get your medical cannabis card in about 15 minutes, before you even land. Same telemedicine evaluation, same licensed doctors.</p>
          <div className="stack" style={{ gap: '12px' }}>
            <span style={{ display: 'flex', gap: '11px', fontSize: '16px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4E606D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Approved in about 15 minutes</span>
            <span style={{ display: 'flex', gap: '11px', fontSize: '16px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4E606D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Where you can legally consume on the island</span>
            <span style={{ display: 'flex', gap: '11px', fontSize: '16px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4E606D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Optional: transportation, dispensary visits and tour</span>
          </div>
          <div style={{ marginTop: '4px' }}>
            <a href={REGISTRO_URL} className="btn btn-clay btn-block">I’m visiting: I want my card</a>
          </div>
        </div>
      </div>
      <p className="meta" style={{ marginTop: '18px' }}>Ley 169-2018 · Debes tener 21 años o más</p>
    </div>
  
    {/* PRUEBA RÁPIDA */}
    <div className="wrap" style={{ paddingTop: '72px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
        <div className="card-soft" style={{ padding: '30px' }}>
          <div className="d3" style={{ marginBottom: '6px' }}>+25</div>
          <div className="small">condiciones médicas cubiertas</div>
        </div>
        <div className="card-soft" style={{ padding: '30px' }}>
          <div className="d3" style={{ marginBottom: '6px' }}>15 min</div>
          <div className="small">para turistas, de principio a fin</div>
        </div>
        <div className="card-soft" style={{ padding: '30px' }}>
          <div className="d3" style={{ marginBottom: '6px' }}>$39</div>
          <div className="small">todo incluido, sin sorpresas</div>
        </div>
      </div>
    </div>
  
    {/* ¿QUÉ INCLUYE? */}
    <div className="wrap pad-sm">
        <div className="card" style={{ marginTop: '20px', padding: '48px' }}>
          <div className="grid12" style={{ gap: '40px', alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 5' }}>
              <h3 className="d2" style={{ fontSize: 'clamp(28px, 3vw, 40px)', marginBottom: '14px' }}>¿Qué incluye?</h3>
              <p className="lead">Por solo $39, obtendrás una EXPERIENCIA COMPLETA.</p>
            </div>
            <div style={{ gridColumn: 'span 7' }} className="stack">
              <div className="stack" style={{ gap: '14px' }}>
                <span style={{ display: 'flex', gap: '14px', fontSize: '17px', alignItems: 'flex-start' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Evaluación médica vía telemedicina</span>
                <span style={{ display: 'flex', gap: '14px', fontSize: '17px', alignItems: 'flex-start' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Gestoría de tu licencia de Cannabis Medicinal</span>
                <span style={{ display: 'flex', gap: '14px', fontSize: '17px', alignItems: 'flex-start' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Honorarios del Departamento de Salud y costo de la plataforma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    {/* PROCESO */}
    <div className="bg-sage-soft pad">
      <div className="wrap">
        <h2 className="d2" style={{ marginBottom: '12px' }}>¿Cómo funciona?</h2>
        <p className="lead" style={{ marginBottom: '40px', maxWidth: '500px' }}>Tres pasos. Ni uno más.</p>
        <div className="steps">
          <div className="card stack" style={{ gap: '18px' }}>
            <span className="stepnum">1</span>
            <h3 className="d4">Haz tu cita</h3>
            <p className="small">Para comenzar tu proceso de certificación, llena el formulario, incluye tu ID y tu foto, registra tu pago y estás listo para tu cita médica.</p>
          </div>
          <div className="card stack" style={{ gap: '18px' }}>
            <span className="stepnum">2</span>
            <h3 className="d4">Consulta con el médico</h3>
            <p className="small">Un médico especializado en Cannabis te evaluará, responderá todas tus dudas y hará tu recomendación médica. No tengas miedo de preguntar demasiado, estamos aquí para ayudarte.</p>
          </div>
          <div className="card stack" style={{ gap: '18px' }}>
            <span className="stepnum">3</span>
            <h3 className="d4">Obtén tu licencia</h3>
            <p className="small">Bienvenido al mundo de los pacientes legales del Cannabis. Recibirás una notificación del estatus de tu solicitud o aprobación seguido por tu recomendación médica y el voucher.</p>
          </div>
        </div>
        </div>
      </div>

      {MOSTRAR_TESTIMONIOS && <Testimonios />}

    <div className="wrap pad-sm">
      {/* FULL EXPERIENCE */}
      <div className="bg-sage" style={{ borderRadius: 'var(--r-lg)', padding: '52px 48px', marginTop: '20px' }}>
        <div className="grid12" style={{ gap: '40px', alignItems: 'center' }}>
          <div style={{ gridColumn: 'span 7' }}>
            <span className="eyebrow eyebrow-light" style={{ display: 'block', marginBottom: '18px' }}>The FULL Experience · EN</span>
            <h3 className="d2" style={{ fontSize: 'clamp(28px, 3vw, 40px)', marginBottom: '16px' }}>Your card, and everything around it.</h3>
            <p className="lead" style={{ color: 'var(--ink-text)', maxWidth: '520px' }}>Medical card, transportation, dispensary visits and an Old San Juan tour — arranged for you, so your first legal purchase on the island isn’t something you have to figure out alone.</p>
          </div>
          <div style={{ gridColumn: 'span 5' }} className="stack">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '26px' }}>
              <span style={{ background: 'rgba(247, 244, 241, 0.18)', borderRadius: '999px', padding: '10px 18px', fontWeight: '600', fontSize: '15px' }}>Medical card</span>
              <span style={{ background: 'rgba(247, 244, 241, 0.18)', borderRadius: '999px', padding: '10px 18px', fontWeight: '600', fontSize: '15px' }}>Transportation</span>
              <span style={{ background: 'rgba(247, 244, 241, 0.18)', borderRadius: '999px', padding: '10px 18px', fontWeight: '600', fontSize: '15px' }}>Dispensary visits</span>
              <span style={{ background: 'rgba(247, 244, 241, 0.18)', borderRadius: '999px', padding: '10px 18px', fontWeight: '600', fontSize: '15px' }}>Old San Juan tour</span>
            </div>
            <a href="tel:+17874005288" className="btn btn-light btn-block"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" /></svg>Call Us to Book · 787-400-5288</a>
          </div>
        </div>
      </div>
    </div>
  
    {/* FAQ */}
    <div className="wrap pad-sm" id="preguntas-frecuentes" style={{ scrollMarginTop: '24px' }}>
      <div className="grid12" style={{ gap: '48px' }}>
        <div style={{ gridColumn: 'span 4' }}>
          <h2 className="d2" style={{ marginBottom: '20px' }}>Preguntas frecuentes</h2>
          <p className="body" style={{ marginBottom: '26px' }}>Si no encuentras una respuesta a tu pregunta, comunícate con nosotros.</p>
          <div className="stack" style={{ gap: '10px', alignItems: 'flex-start' }}>
            <a href={`tel:+1${CONTACTO.telefono.replace(/-/g, "")}`} className="btn btn-ghost btn-sm">{CONTACTO.telefono}</a>
            <a href={`mailto:${CONTACTO.email}`} className="btn btn-ghost btn-sm">{CONTACTO.email}</a>
          </div>
        </div>
        <div style={{ gridColumn: 'span 8' }} className="stack">
          <div className="stack" style={{ gap: '12px' }}>
            <div className="card-soft" style={{ padding: '30px' }}>
              <h3 className="d4" style={{ marginBottom: '10px' }}>¿Qué tipo de identificación debo subir?</h3>
              <p className="small">Puede ser licencia de conducir, pasaporte o real ID. Es muy importante que estén vigentes.</p>
            </div>
            <div className="card-soft" style={{ padding: '30px' }}>
              <h3 className="d4" style={{ marginBottom: '10px' }}>¿Cómo debe ser la fotografía que suba?</h3>
              <p className="small">Es importante que tu rostro esté libre, no uses gafas, espejuelos o gorras. El fondo debe ser claro sin ningún diseño.</p>
            </div>
            <div className="card-soft" style={{ padding: '30px' }}>
              <h3 className="d4" style={{ marginBottom: '10px' }}>¿Cómo se realiza mi evaluación médica?</h3>
              <p className="small">El médico se comunica directamente para completar el proceso de evaluación y recomendación médica.</p>
            </div>
            <div className="card-soft" style={{ padding: '30px' }}>
              <h3 className="d4" style={{ marginBottom: '10px' }}>¿Qué sucede después de mi evaluación?</h3>
              <p className="small">Se radica la solicitud al Departamento de Salud para ser aprobada.</p>
            </div>
            <div className="card-soft" style={{ padding: '30px' }}>
              <h3 className="d4" style={{ marginBottom: '10px' }}>¿Qué documentos recibiré después de mi aprobación?</h3>
              <p className="small">Recibirás dos documentos: la recomendación médica y el voucher. Con esto estarás listo para comprar tu medicina en el dispensario de tu preferencia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* IMPACTO */}
    <div className="bg-sand pad">
      <div className="wrap">
        <div className="grid12" style={{ alignItems: 'center', gap: '48px' }}>
          <div style={{ gridColumn: 'span 6' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '22px' }}>Nuestro compromiso</span>
            <h2 className="d2" style={{ marginBottom: '22px' }}>Creando un impacto real en las personas y las comunidades</h2>
            <p className="lead" style={{ marginBottom: '32px', maxWidth: '500px' }}>En CannaID creemos que certificar no es suficiente. Hoy publicamos una sección de prevención con autoevaluación validada y recursos de ayuda en Puerto Rico, y clasificamos la evidencia de cada condición citando su fuente — incluso cuando esa evidencia es débil. No es una promesa: ya está aquí y puedes revisarlo.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/prevencion" className="btn btn-ghost btn-sm">Prevención y educación</Link>
              <Link href="/condiciones" className="btn btn-ghost btn-sm">Investigación</Link>
            </div>
          </div>
          <div style={{ gridColumn: 'span 6' }} className="stack">
            <div style={{ background: 'var(--white)', borderRadius: 'var(--r-lg)', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', marginBottom: '16px' }}>
              <span className="stack" style={{ gap: '5px' }}><span className="d4">Pacientes activos en Puerto Rico</span><a href="https://revistacronicas.com/puerto-rico/programa-de-cannabis-medicinal-se-estabiliza-en-unos-110000-pacientes-activos-en-puerto-rico/" target="_blank" rel="noopener" className="meta" style={{ fontWeight: '600', color: 'var(--clay)', textDecoration: 'underline' }}>Depto. de Salud &middot; junio 2026 &#8599;</a></span>
              <span className="d2 cifra" style={{ fontSize: '40px' }}>110,548</span>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 'var(--r-lg)', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', marginBottom: '16px' }}>
              <span className="stack" style={{ gap: '5px' }}><span className="d4">Desarrolla un trastorno si empieza antes de los 18</span><a href="https://www.cdc.gov/cannabis/health-effects/cannabis-use-disorder.html" target="_blank" rel="noopener" className="meta" style={{ fontWeight: '600', color: 'var(--clay)', textDecoration: 'underline' }}>CDC &#8599;</a></span>
              <span className="d2 cifra" style={{ fontSize: '40px' }}>1 de cada 6</span>
            </div>
            <p className="meta" style={{ lineHeight: '1.7' }}>Son datos públicos y verificables: cada uno enlaza a su fuente. El programa lleva cuatro años encogiéndose y la mitad de los pacientes que se van no vuelven. Educar y dar seguimiento no es filantropía — es lo que sostiene el programa.</p>
          </div>
        </div>
      </div>
    </div>
  
    {/* DIFERENCIADOR */}
    <div className="bg-ink pad">
      <div className="wrap">
        <div style={{ maxWidth: '620px', marginBottom: '44px' }}>
          <span className="eyebrow eyebrow-light" style={{ display: 'block', marginBottom: '22px' }}>A dónde va ese compromiso</span>
          <h2 className="d2" style={{ marginBottom: '20px' }}>Certificar es fácil. Cuidar es otra cosa.</h2>
          <p className="lead" style={{ color: 'var(--ink-text)' }}>Cualquiera te vende una licencia por $39. Estas dos secciones son la parte que puedes leer, usar y auditar hoy.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          <Link href="/prevencion" className="card-dark">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F8FFA1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 4 6.5v5.2c0 4.7 3.3 8.4 8 9.3 4.7-.9 8-4.6 8-9.3V6.5Z" /><path d="M12 8.5v4" /><path d="M12 16h.01" /></svg>
            <h3 className="d3">Prevención de la Adicción</h3>
            <p className="body" style={{ color: 'var(--ink-text)' }}>Autoevaluación validada, señales de uso problemático y a quién llamar en Puerto Rico si las cosas se salen de control.</p>
            <span style={{ fontWeight: '600', color: 'var(--ink-accent)', display: 'flex', alignItems: 'center', gap: '8px' }}>Ver la sección <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#F8FFA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg></span>
          </Link>
          <Link href="/condiciones" className="card-dark">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F8FFA1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7.5 15 3.5-4.5 3 2.5 4.5-6" /></svg>
            <h3 className="d3">Condiciones y publicaciones</h3>
            <p className="body" style={{ color: 'var(--ink-text)' }}>Qué dice la evidencia por condición, clasificada por fuerza — y dicho claro cuándo es débil, mixta o no existe todavía.</p>
            <span style={{ fontWeight: '600', color: 'var(--ink-accent)', display: 'flex', alignItems: 'center', gap: '8px' }}>Ver la sección <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#F8FFA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg></span>
          </Link>
        </div>
      </div>
    </div>
  
    {/* BLOG PREVIEW */}
    <div className="wrap pad">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: '36px' }}>
        <h2 className="d2">Del blog</h2>
        <Link href="/blog" className="btn btn-ghost btn-sm">Todos los artículos</Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px' }}>
        <Link href="/blog" className="post">
          <span className="post-thumb"><span className="mark" style={{ width: '84px', height: '57px', opacity: '0.4' }}></span></span>
          <span className="stack" style={{ padding: '28px', gap: '10px' }}>
            <span className="eyebrow">Viajes</span>
            <span className="d4">Volar a Puerto Rico con cannabis medicinal</span>
            <span className="small">Qué permite la TSA, qué pasa en el Luis Muñoz Marín, y por qué tu certificación estatal no viaja contigo.</span>
          </span>
        </Link>
        <Link href="/blog" className="post">
          <span className="post-thumb post-thumb-clay"><span className="mark" style={{ width: '84px', height: '57px', opacity: '0.4' }}></span></span>
          <span className="stack" style={{ padding: '28px', gap: '10px' }}>
            <span className="eyebrow">Legal</span>
            <span className="d4">Cannabis y playa: cómo disfrutar ambas sin multa</span>
            <span className="small">Las playas son propiedad pública y ahí la licencia médica no te protege. Dónde sí puedes.</span>
          </span>
        </Link>
        <Link href="/blog" className="post">
          <span className="post-thumb post-thumb-sand"><span className="mark" style={{ width: '84px', height: '57px', opacity: '0.4' }}></span></span>
          <span className="stack" style={{ padding: '28px', gap: '10px' }}>
            <span className="eyebrow">Proceso</span>
            <span className="d4">Cómo certificarte para cannabis medicinal en PR</span>
            <span className="small">Requisitos, documentos, costos reales y cuánto tarda de verdad cada etapa.</span>
          </span>
        </Link>
      </div>
    </div>
  
    {/* CTA FINAL */}
    <div className="wrap" style={{ paddingBottom: '104px', paddingTop: '32px' }}>
      <div className="bg-sage" style={{ borderRadius: 'var(--r-lg)', padding: '76px 48px', textAlign: 'center' }}>
        <h2 className="d1" style={{ fontSize: 'clamp(40px, 5.2vw, 72px)', margin: '0 auto 20px', maxWidth: '720px' }}>¡No lo pienses más!</h2>
        <p className="lead" style={{ color: 'var(--ink-text)', margin: '0 auto 34px', maxWidth: '480px' }}>Renueva o saca tu licencia por tan solo $39.</p>
        <a href={REGISTRO_URL} className="btn btn-light">Inicia tu proceso hoy</a>
      </div>
    </div>

      <Footer />
    </>
  );
}
