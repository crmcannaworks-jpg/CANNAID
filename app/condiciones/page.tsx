import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import CondicionCard from "@/components/CondicionCard";
import { CONDICIONES } from "@/lib/condiciones";
import { REGISTRO_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Condiciones y publicaciones",
  description:
    "Las 24 condiciones que califican bajo el Reglamento 9038, clasificadas por la fuerza real de la evidencia y con la fuente citada.",
};

export default function Condiciones() {
  return (
    <>
      <SiteNav active="condiciones" />
  
  
    <div className="wrap" style={{ paddingTop: '72px' }}>
      <div className="grid12" style={{ alignItems: 'center', gap: '48px' }}>
        <div style={{ gridColumn: 'span 7' }}>
          <span className="tag" style={{ marginBottom: '26px' }}>Research · Ley 42-2017 &middot; Reglamento 9038</span>
          <h1 className="d1" style={{ fontSize: 'clamp(38px, 5vw, 68px)', marginBottom: '24px' }}>Lo que la evidencia sostiene. Y lo que no.</h1>
          <p className="lead" style={{ maxWidth: '500px', marginBottom: '20px' }}>La industria del cannabis promete demasiado. Aquí cada condición va clasificada por la fuerza real de la evidencia, con la fuente citada.</p>
          <div className="card-clay" style={{ maxWidth: '460px', marginTop: '32px' }}>
            <h3 className="d4" style={{ marginBottom: '12px' }}>¿No estás seguro?</h3>
            <p className="small" style={{ marginBottom: '22px' }}>Quien decide es el médico en tu consulta, no un formulario. Si no calificas, te devolvemos el pago completo.</p>
            <a href={REGISTRO_URL} className="btn btn-primary btn-block">Consulta con un especialista</a>
          </div>
        </div>
        <div style={{ gridColumn: 'span 5' }} className="stack">
          <div className="card-soft" style={{ padding: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '12px' }}><a href="https://www.ncbi.nlm.nih.gov/books/NBK618045/" target="_blank" rel="noopener" className="small" style={{ color: 'var(--clay)', textDecoration: 'underline' }}>Ensayos controlados en la revisión más reciente sobre dolor</a><span className="d3 cifra">29</span></div>
          <div className="card-soft" style={{ padding: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '12px' }}><a href="https://www.ncbi.nlm.nih.gov/books/NBK618045/" target="_blank" rel="noopener" className="small" style={{ color: 'var(--clay)', textDecoration: 'underline' }}>Pacientes en estudios observacionales de esa misma revisión</a><span className="d3 cifra">~50,000</span></div>
          <div className="card-soft" style={{ padding: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '0px' }}><span className="small">Países cuyas fuentes citamos: Israel, Canadá, Alemania, Reino Unido, Australia y EE.UU.</span><span className="d3 cifra">6</span></div>
        </div>
      </div>
    </div>
  
    <div className="wrap" style={{ paddingTop: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: '28px' }}>
        <h2 id="las-condiciones" className="d2">Las 24 condiciones que califican</h2>
        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', fontSize: '14px', fontWeight: '500', color: 'var(--muted)', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="bars"><i className="on"></i><i className="on"></i><i className="on"></i></span>Evidencia sólida</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="bars"><i className="on"></i><i className="on"></i><i></i></span>Moderada</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="bars"><i className="warn"></i><i></i><i></i></span>Limitada</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="bars"><i className="none"></i><i></i><i></i></span>Insuficiente</span>
        </div>
      </div>
      <p className="lead" style={{ maxWidth: '620px', margin: '-12px 0 32px' }}>Para cada una hay un especialista que puede evaluarte.</p>
  
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '14px' }}>
        {CONDICIONES.map((c) => (
          <CondicionCard key={c.slug} condicion={c} />
        ))}
      </div>
  
      <div className="card-clay" style={{ marginTop: '20px', padding: '34px' }}>
        <h3 className="d4" style={{ marginBottom: '10px' }}>La categoría abierta</h3>
        <p className="body">El Reglamento 9038 también admite <strong>“cualquier otra condición que cause caquexia, dolor crónico, náusea severa o espasmos musculares persistentes”</strong>. Si tu diagnóstico no aparece por nombre pero produce alguno de esos cuatro síntomas, puedes calificar. Esa determinación la hace el médico en tu consulta.</p>
      </div>
  
      <p className="meta" style={{ lineHeight: '1.7', marginTop: '28px', maxWidth: '800px' }}>Lista según la Ley 42-2017 y el Reglamento 9038 del Departamento de Salud de Puerto Rico. <strong>[Cotejar contra el texto oficial del Reglamento 9038 antes de publicar.]</strong> La clasificación de evidencia es de CannaID y no forma parte del reglamento: <strong>una condición califica legalmente aunque la evidencia científica sea limitada o insuficiente</strong>. Cada tarjeta enlaza el estudio en el que nos basamos; puedes leerlo y llevarnos la contraria.</p>
    </div>
  
    {/* METODOLOGÍA */}
      {/* FUENTES */}
    <div className="bg-sand pad" style={{ marginTop: '88px' }}>
      <div className="wrap">
        <span className="eyebrow" style={{ display: 'block', marginBottom: '22px' }}>De dónde sacamos la evidencia</span>
        <h2 id="fuentes" className="d2" style={{ marginBottom: '20px', maxWidth: '780px' }}>Buscamos la evidencia donde esté.</h2>
        <p className="lead" style={{ maxWidth: '640px', marginBottom: '20px' }}>Durante décadas el cannabis estuvo entero en Schedule I federal, la categoría de sustancias sin uso médico aceptado. Eso encareció y frenó los estudios estadounidenses hasta volverlos escasos y pequeños.</p>
        <p className="lead" style={{ maxWidth: '640px', marginBottom: '20px' }}>En abril de 2026 el Departamento de Justicia movió a Schedule III el cannabis medicinal con licencia estatal. <strong>El resto sigue en Schedule I</strong> y el proceso continúa. <a href="https://www.federalregister.gov/documents/2026/04/28/2026-08177/schedules-of-controlled-substances-rescheduling-of-marijuana" target="_blank" rel="noopener" style={{ color: 'var(--clay)', textDecoration: 'underline' }}>Ver la orden</a>.</p>
        <p className="lead" style={{ maxWidth: '640px' }}>Mientras tanto Israel levantó un registro nacional de pacientes con reportes mensuales públicos, Alemania obligó por ley a cada médico a reportar resultados entre 2017 y 2022, y Quebec montó en 2015 el primer registro de investigación de cannabis medicinal del mundo. Ahí es donde miramos primero.</p>
      </div>
    </div>
  
    {/* BIBLIOTECA */}
    <div className="wrap pad">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: '8px' }}>
        <h2 id="ultimos-estudios" className="d2">Últimos estudios clínicos</h2>
        <span className="meta" style={{ fontWeight: '600' }}>Actualizado cada trimestre</span>
      </div>
      <p className="lead" style={{ maxWidth: '620px', marginBottom: '36px' }}>Lo que se publicó recientemente, venga de donde venga y diga lo que diga. Incluido lo que nos contradice.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        <a href="https://www.sciencedaily.com/releases/2025/12/251211100620.htm" target="_blank" rel="noopener" className="card-clay stack" style={{ gap: '13px' }}>
          <span className="tag tag-clay">JAMA · EE.UU. · dic 2025</span>
          <span className="d4">Revisión de 2,500 estudios: el respaldo sigue siendo débil</span>
          <span className="small">Análisis liderado por UCLA Health sobre artículos publicados entre 2010 y septiembre de 2025. Concluye que la evidencia para dolor crónico, ansiedad e insomnio no alcanza para respaldar el uso con confianza.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--clay)' }}>Leer el estudio &#8599;</span>
        </a>
        <a href="https://aaic.alz.org/releases-2026/libby-trial-thc-cbd-agitation-late-stage-dementia.asp" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">AAIC · EE.UU. · 2026</span>
          <span className="d4">Demencia: la agitación cedió en cerca del 90%</span>
          <span className="small">Ensayo fase II LiBBY en 120 pacientes con Alzheimer u otra demencia, elegibles para hospicio. Fórmula purificada de THC:CBD contra placebo durante 12 semanas.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--clay)' }}>Leer el estudio &#8599;</span>
        </a>
        <a href="https://www.neurology.org/doi/10.1212/WNL.0000000000204925" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">Neurology · 2026</span>
          <span className="d4">Migraña: primer ensayo aleatorizado con vaporizado</span>
          <span className="small">92 adultos, diseño cruzado a doble ciego. THC+CBD superó al placebo a las 2 horas, con beneficio sostenido a 24 y 48. Sin eventos adversos serios.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--clay)' }}>Leer el estudio &#8599;</span>
        </a>
        <a href="https://norml.org/blog/2026/08/10/clinical-trial-plant-derived-cannabis-preparation-is-safe-and-effective-in-children-with-autism/" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">2026</span>
          <span className="d4">Autismo: tres investigaciones independientes coinciden</span>
          <span className="small">Preparaciones dominantes en CBD mostraron mejoras en irritabilidad, aislamiento e hiperactividad en niños con trastorno del espectro autista.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--clay)' }}>Leer el estudio &#8599;</span>
        </a>
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12862010/" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">Metaanálisis · 2015–2025</span>
          <span className="d4">Calidad de vida en pacientes de cannabis medicinal</span>
          <span className="small">Revisión sistemática y metaanálisis de una década de investigación primaria sobre calidad de vida relacionada con la salud.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--clay)' }}>Leer el estudio &#8599;</span>
        </a>
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK618045/" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">AHRQ · EE.UU. · 2025</span>
          <span className="d4">Dolor crónico: mejorías pequeñas, más efectos adversos</span>
          <span className="small">Revisión viva con 29 ensayos controlados y casi 50,000 pacientes en estudios observacionales. Es la razón por la que bajamos dolor crónico de sólida a moderada.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--clay)' }}>Leer el estudio &#8599;</span>
        </a>
      </div>
    </div>
  
    <div className="wrap pad-sm">
      <h3 className="d3" style={{ marginBottom: '8px' }}>Israel</h3>
      <p className="body" style={{ marginBottom: '26px', maxWidth: '700px' }}>Raphael Mechoulam aisló el THC en la Universidad Hebrea en 1964. La Unidad de Cannabis Medicinal del Ministerio de Salud publica reportes mensuales de pacientes licenciados desde diciembre de 2020 — es el único registro nacional vigente de los tres. <a href="https://jcannabisresearch.biomedcentral.com/articles/10.1186/s42238-025-00344-1" target="_blank" rel="noopener" style={{ color: 'var(--clay)', textDecoration: 'underline' }}>Revisión 2011–2025</a>.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '52px' }}>
        <a href="https://pubmed.ncbi.nlm.nih.gov/29482741/" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">Israel · 2018</span>
          <span className="d4" style={{ fontSize: '21px' }}>Cannabis en 2,970 pacientes con cáncer</span>
          <span className="small">Estudio prospectivo de seguridad y eficacia en una población amplia y no seleccionada. Indicaciones principales: problemas de sueño, dolor, náusea y pérdida de apetito.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--sage)' }}>European Journal of Internal Medicine · PubMed ↗</span>
        </a>
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0953620518300190" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">Israel · 2018</span>
          <span className="d4" style={{ fontSize: '21px' }}>2,736 pacientes mayores de 65 años</span>
          <span className="small">Mediana de edad 74.5 años. A los seis meses, 93.7% reportó mejoría, las caídas se redujeron significativamente y bajó el uso de medicamentos recetados, incluidos opioides. Relevante para la población de Puerto Rico.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--sage)' }}>Abuhasira et al. · EJIM 49:44-50 ↗</span>
        </a>
        <a href="https://pubmed.ncbi.nlm.nih.gov/33065768/" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">Israel · 2021</span>
          <span className="d4" style={{ fontSize: '21px' }}>Dolor crónico: resultados y predicción de respuesta</span>
          <span className="small">Uno de los pocos estudios que intenta predecir qué paciente va a responder al tratamiento y cuál no, en vez de solo medir el promedio.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--sage)' }}>Aviram et al. · PubMed ↗</span>
        </a>
      </div>
  
      <h3 className="d3" style={{ marginBottom: '8px' }}>Canadá</h3>
      <p className="body" style={{ marginBottom: '26px', maxWidth: '700px' }}>Legal a nivel federal desde 2018, sin las trabas regulatorias de Estados Unidos. El registro es provincial, de Quebec, y cerró seguimiento en 2019 — pero sigue siendo el modelo más citado.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '52px' }}>
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10714117/" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">Canadá · 2023</span>
          <span className="d4" style={{ fontSize: '21px' }}>Quebec Cannabis Registry</span>
          <span className="small">2,991 pacientes seguidos entre 2015 y 2019 en práctica clínica real. McGill lo describe como la primera base de datos de investigación sobre cannabis medicinal del mundo. Es el modelo directo del registro que proponemos para Puerto Rico.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--sage)' }}>Vigano et al. · Cannabis and Cannabinoid Research ↗</span>
        </a>
      </div>
  
      <h3 className="d3" style={{ marginBottom: '8px' }}>Alemania</h3>
      <p className="body" style={{ marginBottom: '26px', maxWidth: '700px' }}>Entre 2017 y 2022, todo médico que recetaba cannabis con cargo al seguro público estuvo obligado por ley a reportar el resultado. Eso produjo la data menos sesgada que existe.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '52px' }}>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7932947/" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">Alemania · 2021</span>
          <span className="d4" style={{ fontSize: '21px' }}>Begleiterhebung — encuesta nacional obligatoria</span>
          <span className="small">Dolor 73% de los casos, espasticidad 10%, anorexia 6%. El dato incómodo y valioso: 37% de los pacientes interrumpió el tratamiento en el primer año — 45% por falta de efecto y 31% por efectos secundarios.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--sage)' }}>BfArM · PMC ↗</span>
        </a>
      </div>
  
      <h3 className="d3" style={{ marginBottom: '8px' }}>Reino Unido y Australia</h3>
      <p className="body" style={{ marginBottom: '26px', maxWidth: '700px' }}>Guías clínicas oficiales e investigación con financiamiento privado de largo plazo.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '52px' }}>
        <a href="https://www.nice.org.uk/guidance/ng144" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">Reino Unido · NG144</span>
          <span className="d4" style={{ fontSize: '21px' }}>Guía clínica del NICE</span>
          <span className="small">Recomendaciones oficiales para náusea y vómito intratables, dolor crónico, espasticidad y epilepsia resistente al tratamiento. Es la guía más conservadora de todas y por eso vale leerla.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--sage)' }}>National Institute for Health and Care Excellence ↗</span>
        </a>
        <a href="https://www.sydney.edu.au/lambert/" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">Australia · Vigente</span>
          <span className="d4" style={{ fontSize: '21px' }}>Lambert Initiative for Cannabinoid Therapeutics</span>
          <span className="small">Universidad de Sídney. Una donación de 33.7 millones de dólares australianos financia investigación en epilepsia, cáncer, dolor crónico y trastornos neurológicos.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--sage)' }}>The University of Sydney ↗</span>
        </a>
      </div>
  
      <h3 className="d3" style={{ marginBottom: '8px' }}>Estados Unidos</h3>
      <p className="body" style={{ marginBottom: '26px', maxWidth: '700px' }}>Menos volumen, pero las revisiones sistemáticas siguen siendo rigurosas y de acceso libre.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK618045/" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">EE.UU. · 2025</span>
          <span className="d4" style={{ fontSize: '21px' }}>Living Systematic Review — cannabis y dolor crónico</span>
          <span className="small">29 ensayos controlados y casi 50,000 pacientes en estudios observacionales. Revisión viva iniciada en 2021 y actualizada cada año; la de 2025 es la última. Es la evidencia más reciente sobre cannabis y dolor.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--sage)' }}>Agency for Healthcare Research and Quality (AHRQ) ↗</span>
        </a>
        <a href="https://www.nationalacademies.org/read/24625" target="_blank" rel="noopener" className="card stack" style={{ gap: '13px' }}>
          <span className="tag">EE.UU. · 2017</span>
          <span className="d4" style={{ fontSize: '21px' }}>The Health Effects of Cannabis and Cannabinoids</span>
          <span className="small">La revisión más amplia por número de condiciones cubiertas, pero tiene casi una década. Donde hay evidencia más nueva, esa manda.</span>
          <span className="meta" style={{ fontWeight: '600', color: 'var(--sage)' }}>National Academies of Sciences, Engineering, and Medicine ↗</span>
        </a>
      </div>
  
      <div className="card-clay" style={{ marginTop: '32px', padding: '34px' }}>
        <h3 className="d4" style={{ marginBottom: '10px' }}>Registro de cambios</h3>
        <p className="body" style={{ marginBottom: '12px' }}><strong>2025 — Dolor crónico: de sólida a moderada.</strong> La revisión viva de AHRQ encontró mejorías más pequeñas de lo que sugería el informe NASEM de 2017, con más efectos adversos documentados. Bajamos la clasificación.</p>
        <p className="small">Cuando una clasificación cambia, aparece aquí con fecha y motivo. Si sube, también.</p>
      </div>
  
      <p className="meta" style={{ lineHeight: '1.7', marginTop: '28px', maxWidth: '800px' }}>Todos los enlaces abren la fuente original. Los estudios observacionales de registro (Israel, Canadá, Alemania) muestran lo que pasa en la práctica real pero no tienen grupo control; los ensayos controlados sí, y por eso pesan más en nuestra clasificación. Las dos cosas se leen distinto.</p>
    </div>
  
    {/* REGISTRO */}
    <div className="wrap" style={{ paddingBottom: '104px' }}>
      <div className="bg-ink" style={{ borderRadius: 'var(--r-lg)', padding: '64px 48px' }}>
        <div className="grid12" style={{ gap: '48px', alignItems: 'center' }}>
          <div style={{ gridColumn: 'span 7' }}>
            <span id="registro" className="eyebrow eyebrow-light" style={{ display: 'block', marginBottom: '22px' }}>Registro CannaID · Puerto Rico</span>
            <h2 className="d2" style={{ marginBottom: '20px' }}>Casi toda la investigación de cannabis se hace lejos de aquí.</h2>
            <p className="lead" style={{ color: 'var(--ink-text)', marginBottom: '32px', maxWidth: '500px' }}>Nuestros pacientes pueden aportar datos de resultado, de forma voluntaria y anónima, a un registro puertorriqueño. Publicamos los agregados cada seis meses, abiertos a cualquiera.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span className="btn btn-light">Participar</span>
            </div>
          </div>
          <div style={{ gridColumn: 'span 5' }} className="stack">
            <div style={{ borderRadius: 'var(--r)', background: '#141414', padding: '26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '12px' }}><span className="small" style={{ color: 'var(--ink-text)' }}>Pacientes</span><span className="d3">[XXX]</span></div>
            <div style={{ borderRadius: 'var(--r)', background: '#141414', padding: '26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '12px' }}><span className="small" style={{ color: 'var(--ink-text)' }}>Condiciones</span><span className="d3">[XX]</span></div>
            <div style={{ borderRadius: 'var(--r)', background: '#141414', padding: '26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}><span className="small" style={{ color: 'var(--ink-text)' }}>Próximo informe</span><span className="d3">[MES]</span></div>
          </div>
        </div>
      </div>
      <div className="panel" style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', background: 'var(--white)' }}>
        <div style={{ padding: '48px' }} className="stack">
          <span className="tag" style={{ marginBottom: '22px' }}>Al pulsar &ldquo;Participar&rdquo;</span>
          <h3 className="d2" style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', marginBottom: '20px' }}>Consentimiento informado</h3>
          <p className="body" style={{ marginBottom: '24px' }}>Antes de aportar un solo dato, el paciente lee qué se recoge, para qué sirve y cómo salirse. Sin esto, el registro no vale nada.</p>
          <div className="stack" style={{ gap: '14px' }}>
            <span style={{ display: 'flex', gap: '12px', fontSize: '15px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Es <strong>voluntario</strong>. No participar no afecta tu certificación ni tu renovación.</span>
            <span style={{ display: 'flex', gap: '12px', fontSize: '15px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Es <strong>anónimo</strong>. Tu nombre no viaja con las respuestas.</span>
            <span style={{ display: 'flex', gap: '12px', fontSize: '15px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Puedes <strong>retirarte cuando quieras</strong> y pedir que borren tus datos.</span>
            <span style={{ display: 'flex', gap: '12px', fontSize: '15px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Solo se publican <strong>agregados</strong>, nunca respuestas individuales.</span>
            <span style={{ display: 'flex', gap: '12px', fontSize: '15px', alignItems: 'flex-start' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px', flexShrink: '0' }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Cada permiso se pide <strong>por separado</strong>: aportar datos y ser contactado para un estudio son dos decisiones distintas.</span>
          </div>
          <p className="meta" style={{ lineHeight: '1.7', marginTop: '26px' }}><strong>[El texto legal de consentimiento debe redactarlo y aprobarlo un comité de ética o asesor legal. Esto es la estructura, no el documento final.]</strong></p>
        </div>
  
        <div style={{ padding: '48px', background: 'var(--sage-tint)' }} className="stack">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px', marginBottom: '6px' }}>
            <span className="d4">Cinco preguntas</span>
            <span className="meta" style={{ fontWeight: '600' }}>2 minutos</span>
          </div>
          <p className="meta" style={{ lineHeight: '1.6', marginBottom: '8px' }}>Las mismas cada seis meses, para poder comparar en el tiempo.</p>
          <div className="stack">
              <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '16px', padding: '20px 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontWeight: '700', color: 'var(--sage)' }}>1</span>
                <span className="stack" style={{ gap: '6px' }}><span style={{ fontSize: '16px', lineHeight: '1.5' }}>¿Qué condición te certificaron?</span><span className="meta">Menú con las 24 condiciones del Reglamento 9038</span></span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '16px', padding: '20px 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontWeight: '700', color: 'var(--sage)' }}>2</span>
                <span className="stack" style={{ gap: '6px' }}><span style={{ fontSize: '16px', lineHeight: '1.5' }}>¿Qué formulación usas?</span><span className="meta">Flor · Aceite · Comestible · Vaporizador · Tópico · Varias</span></span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '16px', padding: '20px 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontWeight: '700', color: 'var(--sage)' }}>3</span>
                <span className="stack" style={{ gap: '6px' }}><span style={{ fontSize: '16px', lineHeight: '1.5' }}>¿Con qué frecuencia la usas?</span><span className="meta">A diario · Varias veces por semana · Semanal · Ocasional</span></span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '16px', padding: '20px 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontWeight: '700', color: 'var(--sage)' }}>4</span>
                <span className="stack" style={{ gap: '6px' }}><span style={{ fontSize: '16px', lineHeight: '1.5' }}>Del 0 al 10, ¿cuánto han mejorado tus síntomas desde que empezaste?</span><span className="meta">Escala deslizante de 0 a 10</span></span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '16px', padding: '20px 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <span style={{ fontWeight: '700', color: 'var(--sage)' }}>5</span>
                <span className="stack" style={{ gap: '6px' }}><span style={{ fontSize: '16px', lineHeight: '1.5' }}>¿Has tenido efectos secundarios?</span><span className="meta">Ninguno · Mareo · Sequedad de boca · Somnolencia · Ansiedad · Otro</span></span>
              </div>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--r)', padding: '24px', marginTop: '26px' }}>
            <span style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '18px' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>
              <span style={{ fontSize: '15px', lineHeight: '1.55' }}>He leído lo anterior, entiendo que es voluntario y anónimo, y acepto aportar mis respuestas al registro.</span>
            </span>
  
            <span style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '20px', paddingTop: '18px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'transparent', boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.22)', flexShrink: '0' }}></span>
              <span className="stack" style={{ gap: '6px' }}>
                <span style={{ fontSize: '15px', lineHeight: '1.55' }}><strong>Opcional.</strong> Autorizo que me contacten si surge un estudio de investigación para el que pudiera ser elegible.</span>
                <span className="meta" style={{ lineHeight: '1.6' }}>Marcar esta casilla no te inscribe en ningún estudio ni te obliga a nada: si te contactamos, decides en ese momento y con la información completa delante. Puedes retirar esta autorización cuando quieras sin que afecte tu certificación ni tu participación en el registro.</span>
              </span>
            </span>
            <span className="btn btn-primary btn-block">Aceptar y participar</span>
          </div>
        </div>
      </div>
  
      <p className="meta" style={{ lineHeight: '1.7', marginTop: '36px', maxWidth: '760px' }}>El contenido de esta sección es educativo y no constituye consejo médico ni una recomendación de tratamiento.</p>
    </div>
      <Footer />
    </>
  );
}
