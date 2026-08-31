/**
 * Citas de pacientes. Hoy son marcadores entre corchetes: reemplazar por
 * testimonios reales —cada uno con consentimiento escrito— y poner
 * MOSTRAR_TESTIMONIOS en true en lib/site.ts.
 */
export default function Testimonios() {
  return (
      <div className="wrap pad">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <h2 className="d2" style={{ maxWidth: '520px' }}>Gente que ya pasó por esto</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div className="card-soft stack" style={{ gap: '24px' }}>
            <p className="serif" style={{ fontSize: '24px', lineHeight: '1.4' }}><span className="ph">[Testimonio real de un paciente residente: qué cambió después de certificarse. Dos o tres líneas, en sus palabras.]</span></p>
            <div className="stack" style={{ gap: '3px', marginTop: 'auto' }}>
              <span style={{ fontWeight: '600', fontSize: '16px' }}><span className="ph">[Nombre]</span></span>
              <span className="meta"><span className="ph">[Edad] · [Municipio]</span></span>
            </div>
          </div>
          <div className="card-clay stack" style={{ gap: '24px' }}>
            <p className="serif" style={{ fontSize: '24px', lineHeight: '1.4' }}><span className="ph">[Testimonial from a visitor about getting certified before landing. Ideally mentions how long it actually took.]</span></p>
            <div className="stack" style={{ gap: '3px', marginTop: 'auto' }}>
              <span style={{ fontWeight: '600', fontSize: '16px' }}><span className="ph">[Name]</span></span>
              <span className="meta"><span className="ph">[City, State] · visited [MONTH YEAR]</span></span>
            </div>
          </div>
          <div className="card-soft stack" style={{ gap: '24px' }}>
            <p className="serif" style={{ fontSize: '24px', lineHeight: '1.4' }}><span className="ph">[Testimonio sobre el acompañamiento: el chequeo a los 30 días, o cuando el médico ajustó la dosis. Este es el que diferencia.]</span></p>
            <div className="stack" style={{ gap: '3px', marginTop: 'auto' }}>
              <span style={{ fontWeight: '600', fontSize: '16px' }}><span className="ph">[Nombre]</span></span>
              <span className="meta"><span className="ph">[Edad] · [Municipio]</span></span>
            </div>
          </div>
        </div>
        <p className="meta" style={{ marginTop: '20px' }}>Publicados con consentimiento escrito, sin mencionar la condición médica salvo autorización expresa.</p>
      </div>  );
}
