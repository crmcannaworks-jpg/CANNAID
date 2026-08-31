import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prevención de la adicción",
  description:
    "El cannabis no es para todo el mundo. Autoevaluación, señales de uso problemático y a quién llamar en Puerto Rico.",
};

export default function Prevencion() {
  return (
    <>
      <SiteNav active="prevencion" />
  
    <div className="wrap" style={{ paddingTop: '72px' }}>
      <div className="grid12" style={{ alignItems: 'center', gap: '48px' }}>
        <div style={{ gridColumn: 'span 7' }}>
          <span className="tag tag-clay" style={{ marginBottom: '26px' }}>Prevención de la adicción</span>
          <h1 className="d1" style={{ fontSize: 'clamp(38px, 5vw, 68px)', marginBottom: '24px' }}>El cannabis no es para todo el mundo.</h1>
          <p className="lead" style={{ maxWidth: '560px', marginBottom: '20px' }}>Cerca de 1 de cada 10 personas que consume cannabis puede desarrollar un trastorno por su uso. Informarte con claridad también es parte de nuestro compromiso.</p>
          <p className="lead" style={{ maxWidth: '560px', marginBottom: '20px' }}>El cannabis puede acompañar un tratamiento, pero no sustituye el cuidado de tu salud. Una buena alimentación, ejercicio y seguimiento profesional siguen siendo la base.</p>
          <p className="lead" style={{ maxWidth: '560px' }}>La planta puede acompañar el camino, pero el bienestar se construye todos los días.</p>
        </div>
        <div style={{ gridColumn: 'span 5' }}>
          <div className="card-clay">
            <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>Si necesitas ayuda ahora</span>
            <p className="body" style={{ color: 'var(--ink)', marginBottom: '20px' }}>Línea PAS de ASSMCA. Salud mental y uso de sustancias, gratis y confidencial, 24/7.</p>
            <div className="d3" style={{ marginBottom: '10px' }}>1-800-981-0023</div>
          </div>
        </div>
      </div>
    </div>
  
    {/* AUTOEVALUACIÓN */}
    <div className="wrap" style={{ paddingTop: '88px' }}>
      <div className="panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', background: 'var(--white)' }}>
        <div style={{ padding: '48px' }} className="stack">
          <span className="tag" style={{ marginBottom: '22px' }}>3 minutos · anónimo</span>
          <h2 className="d2" style={{ fontSize: 'clamp(30px, 3.2vw, 42px)', marginBottom: '20px' }}>¿Cómo está tu relación con el cannabis?</h2>
          <p className="body" style={{ marginBottom: '32px' }}>Ocho preguntas basadas en el CUDIT-R, un cuestionario validado clínicamente. Sin registro, y el resultado no afecta tu solicitud.</p>
          <span className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Hacer la autoevaluación</span>
          <p className="meta" style={{ marginTop: '20px', lineHeight: '1.65' }}>No es un diagnóstico. Es una señal de si vale la pena conversarlo con un profesional.</p>
        </div>
        <div style={{ padding: '48px', background: 'var(--sage-tint)' }} className="stack">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span className="meta" style={{ fontWeight: '600' }}>Pregunta 3 de 8</span>
            <span className="meta">37%</span>
          </div>
          <div style={{ height: '6px', background: 'rgba(0, 0, 0, 0.12)', borderRadius: '999px', overflow: 'hidden', marginBottom: '28px' }}><div style={{ width: '37%', height: '6px', background: 'var(--sage)', borderRadius: '999px' }}></div></div>
          <h3 className="d4" style={{ marginBottom: '24px' }}>En los últimos 6 meses, ¿con qué frecuencia no lograste parar una vez que empezaste?</h3>
          <div className="stack" style={{ gap: '10px' }}>
            <div style={{ background: 'var(--white)', borderRadius: '999px', padding: '16px 24px', fontSize: '16px', fontWeight: '500' }}>Nunca</div>
            <div style={{ background: 'var(--white)', borderRadius: '999px', padding: '16px 24px', fontSize: '16px', fontWeight: '500' }}>Menos de una vez al mes</div>
            <div style={{ background: 'var(--sage)', color: 'var(--white)', borderRadius: '999px', padding: '16px 24px', fontSize: '16px', fontWeight: '600', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}><span>Mensualmente</span><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></div>
            <div style={{ background: 'var(--white)', borderRadius: '999px', padding: '16px 24px', fontSize: '16px', fontWeight: '500' }}>Semanalmente</div>
            <div style={{ background: 'var(--white)', borderRadius: '999px', padding: '16px 24px', fontSize: '16px', fontWeight: '500' }}>A diario o casi a diario</div>
          </div>
        </div>
      </div>
    </div>
  
    {/* SEÑALES */}
    <div className="wrap pad">
      <h2 className="d2" style={{ marginBottom: '12px' }}>Cuando deja de ser medicinal</h2>
      <p className="lead" style={{ marginBottom: '40px', maxWidth: '540px' }}>Ninguna señal sola confirma nada. Tres o más sostenidas por seis meses merecen una conversación con tu médico.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <div className="card-soft stack" style={{ gap: '12px' }}><h3 className="d4">Tolerancia creciente</h3><p className="small">Necesitas más cantidad o más potencia para el mismo alivio que antes lograbas con menos.</p></div>
        <div className="card-soft stack" style={{ gap: '12px' }}><h3 className="d4">Uso fuera del síntoma</h3><p className="small">Consumes por costumbre, aburrimiento o ansiedad social, no por la condición que te certificó.</p></div>
        <div className="card-soft stack" style={{ gap: '12px' }}><h3 className="d4">Síntomas al parar</h3><p className="small">Irritabilidad, insomnio, pérdida de apetito o inquietud en los días siguientes a dejarlo.</p></div>
        <div className="card-soft stack" style={{ gap: '12px' }}><h3 className="d4">Costo en tu vida</h3><p className="small">Faltas al trabajo, tensiones en casa o gastos que ya no cuadran, y aun así sigues igual.</p></div>
      </div>
    </div>
  
    {/* POBLACIONES */}
    <div className="bg-sand pad">
      <div className="wrap">
        <h2 className="d2" style={{ marginBottom: '12px' }}>Quién debe tener más cuidado</h2>
        <p className="lead" style={{ marginBottom: '40px', maxWidth: '600px' }}>En estos casos el protocolo es más estricto: puede que el médico recomiende no certificar, o certificar con seguimiento cercano.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div className="card stack" style={{ gap: '16px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4E606D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4c-3.9 0-7 2.9-7 6.5 0 2.2 1.1 4.1 2.8 5.3V19h8.4v-3.2c1.7-1.2 2.8-3.1 2.8-5.3C19 6.9 15.9 4 12 4Z" /><path d="M9.8 21h4.4" /></svg>
            <h3 className="d4">Menores de 25</h3>
            <p className="small">El cerebro sigue madurando. El uso frecuente en esta etapa se asocia a mayor riesgo de dependencia y a efectos cognitivos.</p>
          </div>
          <div className="card stack" style={{ gap: '16px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4E606D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 8v4.5l3 2" /></svg>
            <h3 className="d4">Historial de psicosis</h3>
            <p className="small">Antecedentes personales o familiares de esquizofrenia o episodios psicóticos. El THC puede precipitar o agravar síntomas.</p>
          </div>
          <div className="card stack" style={{ gap: '16px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4E606D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-4.6-7-9.6A4.4 4.4 0 0 1 12 8a4.4 4.4 0 0 1 7 3.4c0 5-7 9.6-7 9.6Z" /></svg>
            <h3 className="d4">Embarazo y lactancia</h3>
            <p className="small">Los cannabinoides cruzan la placenta y pasan a la leche materna. No hay dosis establecida como segura.</p>
          </div>
          <div className="card stack" style={{ gap: '16px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4E606D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19 19 4" /><path d="M9.5 5.5h9v9" /><path d="M4.5 9.5v9h9" /></svg>
            <h3 className="d4">Recuperación en curso</h3>
            <p className="small">Si estás en tratamiento por uso de alcohol u otras sustancias, tu equipo de recuperación debe ser parte de la decisión.</p>
          </div>
        </div>
      </div>
    </div>
  
    {/* USO DE MENOR RIESGO */}
    <div className="wrap pad">
      <div className="grid12" style={{ gap: '48px' }}>
        <div style={{ gridColumn: 'span 5' }}>
          <h2 className="d2" style={{ marginBottom: '20px' }}>Si vas a usarlo, úsalo bien</h2>
          <p className="lead" style={{ marginBottom: '32px' }}>Lo que el médico te va a repetir en tu consulta, aquí para que lo tengas a mano.</p>
          <span className="btn btn-ghost">Descargar la guía en PDF</span>
        </div>
        <div style={{ gridColumn: 'span 7' }} className="stack">
          <div className="stack" style={{ gap: '12px' }}>
            <div className="card-soft" style={{ padding: '28px', display: 'grid', gridTemplateColumns: '44px 1fr', gap: '20px', alignItems: 'start' }}><span className="stepnum" style={{ width: '36px', height: '36px', fontSize: '15px' }}>1</span><span className="stack" style={{ gap: '6px' }}><span className="d4" style={{ fontSize: '20px' }}>Empieza bajo, ve lento</span><span className="small">La dosis mínima efectiva es la meta, no el punto de partida. Sube después de días estables, nunca dentro de la misma sesión.</span></span></div>
            <div className="card-soft" style={{ padding: '28px', display: 'grid', gridTemplateColumns: '44px 1fr', gap: '20px', alignItems: 'start' }}><span className="stepnum" style={{ width: '36px', height: '36px', fontSize: '15px' }}>2</span><span className="stack" style={{ gap: '6px' }}><span className="d4" style={{ fontSize: '20px' }}>La vía cambia todo</span><span className="small">Un comestible tarda hasta dos horas en pegar y dura mucho más. Ahí ocurre la mayoría de las sobredosis por impaciencia.</span></span></div>
            <div className="card-soft" style={{ padding: '28px', display: 'grid', gridTemplateColumns: '44px 1fr', gap: '20px', alignItems: 'start' }}><span className="stepnum" style={{ width: '36px', height: '36px', fontSize: '15px' }}>3</span><span className="stack" style={{ gap: '6px' }}><span className="d4" style={{ fontSize: '20px' }}>Días sin consumo, a propósito</span><span className="small">Las pausas programadas mantienen la tolerancia baja y te dicen la verdad sobre cuánto lo necesitas.</span></span></div>
            <div className="card-soft" style={{ padding: '28px', display: 'grid', gridTemplateColumns: '44px 1fr', gap: '20px', alignItems: 'start' }}><span className="stepnum" style={{ width: '36px', height: '36px', fontSize: '15px' }}>4</span><span className="stack" style={{ gap: '6px' }}><span className="d4" style={{ fontSize: '20px' }}>Nunca al volante</span><span className="small">El deterioro dura más de lo que sientes. En Puerto Rico conducir bajo efectos es delito aunque tengas licencia médica.</span></span></div>
            <div className="card-soft" style={{ padding: '28px', display: 'grid', gridTemplateColumns: '44px 1fr', gap: '20px', alignItems: 'start' }}><span className="stepnum" style={{ width: '36px', height: '36px', fontSize: '15px' }}>5</span><span className="stack" style={{ gap: '6px' }}><span className="d4" style={{ fontSize: '20px' }}>Dile a tu médico primario</span><span className="small">Hay interacciones reales con anticoagulantes, sedantes y antiepilépticos. El cannabis no debe ser un secreto en tu expediente.</span></span></div>
          </div>
        </div>
      </div>
    </div>
  
    {/* RECURSOS */}
    <div className="wrap pad">
      <h2 className="d2" style={{ marginBottom: '36px' }}>Recursos en Puerto Rico</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '20px' }}>
        <div className="card-soft stack" style={{ gap: '12px' }}>
          <h3 className="d4">Línea PAS</h3>
          <p className="small">Primera Ayuda Psicosocial de ASSMCA. Apoyo emocional, consejería en crisis y coordinación de servicios. Gratis, confidencial y 24/7.</p>
          <span style={{ marginTop: '4px' }}><span style={{ fontWeight: '600', color: 'var(--sage)', display: 'block', marginTop: '4px' }}>1-800-981-0023</span><span style={{ fontWeight: '600', color: 'var(--sage)', display: 'block', marginTop: '4px' }}>VRS 787-615-4112</span><span style={{ fontWeight: '600', color: 'var(--sage)', display: 'block', marginTop: '4px' }}>lineapas.assmca.pr.gov</span></span>
        </div>
        <div className="card-soft stack" style={{ gap: '12px' }}>
          <h3 className="d4">Narcóticos Anónimos</h3>
          <p className="small">Más de 50 reuniones en toda la isla, presenciales y por Zoom, con sede en Bayamón. El único requisito es el deseo de dejar de consumir.</p>
          <span style={{ marginTop: '4px' }}><span style={{ fontWeight: '600', color: 'var(--sage)', display: 'block', marginTop: '4px' }}>787-763-5919</span><span style={{ fontWeight: '600', color: 'var(--sage)', display: 'block', marginTop: '4px' }}>narcoticosanonimospr.org</span></span>
        </div>
        <div className="card-soft stack" style={{ gap: '12px' }}>
          <h3 className="d4">ASSMCA</h3>
          <p className="small">Administración de Servicios de Salud Mental y Contra la Adicción. Evaluación, tratamiento, programas ambulatorios y clínica de desintoxicación.</p>
          <span style={{ marginTop: '4px' }}><span style={{ fontWeight: '600', color: 'var(--sage)', display: 'block', marginTop: '4px' }}>assmca.pr.gov</span></span>
        </div>
        <div className="card-soft stack" style={{ gap: '12px' }}>
          <h3 className="d4">Línea 988</h3>
          <p className="small">Prevención del suicidio y crisis. Disponible las 24 horas en español, por llamada o mensaje de texto.</p>
          <span style={{ marginTop: '4px' }}><span style={{ fontWeight: '600', color: 'var(--sage)', display: 'block', marginTop: '4px' }}>Marca o escribe al 988</span></span>
        </div>
      </div>
  
    </div>
      <Footer />
    </>
  );
}
