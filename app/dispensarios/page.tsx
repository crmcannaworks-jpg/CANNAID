import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Para dispensarios",
  description:
    "Gestoría de pacientes para dispensarios: certificación, renovación y seguimiento, con tu link y tu código QR.",
};

export default function Dispensarios() {
  return (
    <>
      <SiteNav active="dispensarios" />
  
  
    <div className="wrap" style={{ paddingTop: '72px' }}>
      <div className="grid12" style={{ alignItems: 'center', gap: '48px' }}>
        <div style={{ gridColumn: 'span 7' }}>
          <span className="tag" style={{ marginBottom: '26px' }}>Para dispensarios</span>
          <h1 className="d1" style={{ fontSize: 'clamp(38px, 5vw, 68px)', marginBottom: '24px' }}>Tus pacientes, certificados y de vuelta en tu mostrador.</h1>
          <p className="lead" style={{ maxWidth: '540px' }}>CannaID provee gestoría de pacientes a dispensarios: certificación, renovación, orientación como cuidado preventivo y monitoreo del progreso del paciente.</p>
        </div>
        <div style={{ gridColumn: 'span 5' }}>
          <div className="bg-ink" style={{ borderRadius: 'var(--r-lg)', padding: '40px' }}>
            <h3 className="d4" style={{ marginBottom: '12px', color: 'var(--cream)' }}>Inscribe tu dispensario</h3>
            <p className="small" style={{ color: 'var(--ink-text)', marginBottom: '24px' }}>Con la inscripción recibes gratis tu link personalizado y tu código QR.</p>
            <a href="tel:+17873447110" className="btn btn-light btn-block"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" /></svg>Llama ahora e inscribe tu dispensario</a>
            <p className="meta" style={{ marginTop: '14px', color: 'var(--ink-text)' }}>787-344-7110 · info@cannaidPR.com</p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="bg-sage-soft pad" style={{ marginTop: '76px' }}>
      <div className="wrap">
        <h2 className="d2" style={{ marginBottom: '12px' }}>¿Cómo funciona?</h2>
        <p className="lead" style={{ marginBottom: '40px', maxWidth: '560px' }}>Cinco pasos, de la inscripción al paciente en tu mostrador.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div className="card stack" style={{ gap: '16px' }}>
            <span className="stepnum">1</span>
            <h3 className="d4">Inscripción</h3>
            <p className="small">Recibes una página personalizada para el registro y certificación de tus pacientes, con tu link y tu código QR gratis. Desde ahí activas las promociones específicas de tu dispensario.</p>
          </div>
          <div className="card stack" style={{ gap: '16px' }}>
            <span className="stepnum">2</span>
            <h3 className="d4">Adiestramiento</h3>
            <p className="small">Nos reunimos con tu personal y los capacitamos en el uso de la plataforma de reclutamiento. Es fácil de usar, pero nos mantenemos en contacto para cualquier duda.</p>
          </div>
          <div className="card stack" style={{ gap: '16px' }}>
            <span className="stepnum">3</span>
            <h3 className="d4">Comenzamos a trabajar</h3>
            <p className="small">El dispensario añade al paciente en su página. Inmediatamente CannaID lo contacta y lo asiste en completar el proceso.</p>
          </div>
          <div className="card stack" style={{ gap: '16px' }}>
            <span className="stepnum">4</span>
            <h3 className="d4">Evaluación del médico</h3>
            <p className="small">Un médico autorizado por el Departamento de Salud comienza la evaluación y hace la recomendación al programa de Cannabis Medicinal.</p>
          </div>
          <div className="card stack" style={{ gap: '16px' }}>
            <span className="stepnum">5</span>
            <h3 className="d4">¡Aprobado!</h3>
            <p className="small">Tu paciente recibe email y llamada personalizada <strong>con el nombre de tu dispensario</strong>, pidiéndole que pase a recoger sus documentos. En esa llamada podemos incluir tus promociones o incentivos.</p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="wrap pad">
      <div className="grid12" style={{ gap: '48px', alignItems: 'center' }}>
        <div style={{ gridColumn: 'span 6' }}>
          <h2 className="d2" style={{ marginBottom: '20px' }}>Personaliza tu página</h2>
          <p className="lead" style={{ marginBottom: '26px' }}>Tu propio link y tu código QR, gratis con la inscripción, para distribuir e inscribir pacientes donde estés.</p>
          <div className="stack" style={{ gap: '14px' }}>
            <span style={{ display: 'flex', gap: '12px', fontSize: '16px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Reportes accesibles desde cualquier lugar</span>
            <span style={{ display: 'flex', gap: '12px', fontSize: '16px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Estatus de cada paciente en tiempo real</span>
            <span style={{ display: 'flex', gap: '12px', fontSize: '16px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Herramientas para alinear la estrategia a tu modelo de negocio</span>
          </div>
        </div>
        <div style={{ gridColumn: 'span 6' }}>
          <div className="card-clay">
            <h3 className="d4" style={{ marginBottom: '14px' }}>Escoge cuánto cubres tú</h3>
            <p className="small" style={{ marginBottom: '24px' }}>Puedes cubrir la certificación de tu paciente total o parcialmente, según tu presupuesto.</p>
            <div className="stack" style={{ gap: '10px' }}>
              <span style={{ background: 'var(--white)', borderRadius: '999px', padding: '15px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}><span style={{ fontWeight: '600' }}>Pacientes regulares</span><span style={{ fontWeight: '700' }}>$35 · $25 · $20 · Gratis</span></span>
              <span style={{ background: 'var(--white)', borderRadius: '999px', padding: '15px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}><span style={{ fontWeight: '600' }}>Turistas</span><span style={{ fontWeight: '700' }}>desde $39</span></span>
            </div>
            <p className="meta" style={{ lineHeight: '1.7', marginTop: '20px' }}>El monto cubre costos clínicos, gestoría y el arancel de la plataforma del Departamento de Salud.</p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="wrap pad-sm">
      <h2 className="d2" style={{ marginBottom: '40px' }}>¿Qué ganas con nosotros?</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div className="card-soft stack" style={{ gap: '12px' }}><h3 className="d4">Account Executive exclusivo</h3><p className="small">Una persona asignada a tu dispensario para estatus, enmiendas y reenvío de documentación.</p></div>
          <div className="card-soft stack" style={{ gap: '12px' }}><h3 className="d4">Entrega rápida de documentos</h3><p className="small">Voucher y recomendación médica por correo al dispensario de origen en 48–72 horas, sujeto a la aprobación de la Oficina de Cannabis Medicinal. En turistas, hasta en 15 minutos.</p></div>
          <div className="card-soft stack" style={{ gap: '12px' }}><h3 className="d4">Call center dedicado</h3><p className="small">Apoyo a tu gestión de convocatoria y venta, con chat activo en horario extendido para resolver en tiempo real.</p></div>
          <div className="card-soft stack" style={{ gap: '12px' }}><h3 className="d4">Operador dedicado</h3><p className="small">Atención personalizada tanto para tus pacientes como para tu personal.</p></div>
          <div className="card-soft stack" style={{ gap: '12px' }}><h3 className="d4">Reportes en tiempo real</h3><p className="small">Accedes desde cualquier lugar y conoces el estatus actualizado de cada paciente en su proceso de certificación.</p></div>
          <div className="card-soft stack" style={{ gap: '12px' }}><h3 className="d4">Precio accesible</h3><p className="small">Desde $35 por paciente. Ese monto cubre costos clínicos, gestoría y el arancel de la plataforma del Departamento de Salud.</p></div>
      </div>
    </div>
  
    <div className="bg-ink pad">
      <div className="wrap">
        <div className="grid12" style={{ gap: '48px', alignItems: 'center' }}>
          <div style={{ gridColumn: 'span 6' }}>
            <span className="eyebrow eyebrow-light" style={{ display: 'block', marginBottom: '22px' }}>Por qué importa</span>
            <h2 className="d2" style={{ marginBottom: '20px' }}>El paciente certificado compra. El que no renovó, no.</h2>
            <p className="lead" style={{ color: 'var(--ink-text)' }}>El programa de Puerto Rico pasó de 124,592 pacientes en 2022 a 110,548 en 2026. Cada licencia vencida es un cliente que dejó de entrar a tu dispensario.</p>
          </div>
          <div style={{ gridColumn: 'span 6' }} className="stack">
            <div style={{ borderRadius: 'var(--r)', background: '#141414', padding: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '12px' }}><span className="small" style={{ color: 'var(--ink-text)' }}>Dispensarios atendidos</span><span className="d3">[XX]</span></div>
            <div style={{ borderRadius: 'var(--r)', background: '#141414', padding: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '12px' }}><span className="small" style={{ color: 'var(--ink-text)' }}>Pacientes gestionados</span><span className="d3">[X,XXX]</span></div>
            <div style={{ borderRadius: 'var(--r)', background: '#141414', padding: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}><span className="small" style={{ color: 'var(--ink-text)' }}>Turistas certificados en</span><span className="d3">15 min</span></div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="wrap pad">
      <div className="bg-sage" style={{ borderRadius: 'var(--r-lg)', padding: '64px 48px', textAlign: 'center' }}>
        <h2 className="d2" style={{ margin: '0 auto 20px', maxWidth: '640px' }}>Inscribe tu dispensario hoy.</h2>
        <p className="lead" style={{ color: 'var(--ink-text)', margin: '0 auto 34px', maxWidth: '480px' }}>Recibes tu link personalizado y tu código QR gratis con la inscripción.</p>
        <a href="tel:+17873447110" className="btn btn-light">Llama ahora e inscribe tu dispensario</a>
      </div>
    </div>
      <Footer />
    </>
  );
}
