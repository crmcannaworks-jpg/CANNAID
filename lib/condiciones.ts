export type Evidencia = "solida" | "moderada" | "limitada" | "insuficiente";

export type Condicion = {
  slug: string;
  nombre: string;
  /** Como aparece dentro de "Cannabis medicinal para ___ en Puerto Rico". */
  nombreEnFrase: string;
  evidencia: Evidencia;
  resumen: string;
  fuente: string;
  fuenteUrl: string;
  relacionadas: string[];
};

export const ETIQUETA_EVIDENCIA: Record<Evidencia, string> = {
  solida: "Evidencia sólida",
  moderada: "Evidencia moderada",
  limitada: "Evidencia limitada",
  insuficiente: "Evidencia insuficiente",
};

export const CONDICIONES: Condicion[] = [
  {
    slug: "cancer-y-quimioterapia",
    nombre: "Cáncer y quimioterapia",
    nombreEnFrase: "cáncer y quimioterapia",
    evidencia: "solida",
    resumen:
      "Antieméticos eficaces. Estudio prospectivo israelí en 2,970 pacientes: sueño, dolor, náusea y apetito.",
    fuente: "Israel · EJIM 2018",
    fuenteUrl: "https://pubmed.ncbi.nlm.nih.gov/29482741/",
    relacionadas: ["enfermedad-inflamatoria-intestinal", "enfermedades-avanzadas-y-cuidado-paliativo", "anorexia-y-caquexia", "sida-y-desordenes-por-vih"],
  },
  {
    slug: "epilepsia",
    nombre: "Epilepsia",
    nombreEnFrase: "epilepsia",
    evidencia: "solida",
    resumen:
      "Ensayo fase III: 41.9% menos convulsiones atónicas con CBD farmacéutico en síndrome de Lennox-Gastaut.",
    fuente: "NEJM 2018",
    fuenteUrl: "https://www.nejm.org/doi/full/10.1056/NEJMoa1714631",
    relacionadas: ["esclerosis-multiple", "alzheimer", "esclerosis-lateral-amiotrofica", "autismo"],
  },
  {
    slug: "esclerosis-multiple",
    nombre: "Esclerosis múltiple",
    nombreEnFrase: "esclerosis múltiple",
    evidencia: "solida",
    resumen:
      "Ensayo SAVANT: THC:CBD añadido al tratamiento estándar mejora la espasticidad resistente.",
    fuente: "SAVANT · PubMed 2018",
    fuenteUrl: "https://pubmed.ncbi.nlm.nih.gov/29792372/",
    relacionadas: ["epilepsia", "alzheimer", "esclerosis-lateral-amiotrofica", "autismo"],
  },
  {
    slug: "dolor-cronico",
    nombre: "Dolor crónico",
    nombreEnFrase: "dolor crónico",
    evidencia: "moderada",
    resumen:
      "Mejorías pequeñas, sobre todo neuropático, con más efectos adversos. Bajado de sólida a moderada en 2025.",
    fuente: "AHRQ 2025",
    fuenteUrl: "https://www.ncbi.nlm.nih.gov/books/NBK618045/",
    relacionadas: ["fibromialgia", "migrana", "neuropatias-periferales", "lesion-en-el-cordon-espinal"],
  },
  {
    slug: "fibromialgia",
    nombre: "Fibromialgia",
    nombreEnFrase: "fibromialgia",
    evidencia: "moderada",
    resumen:
      "367 pacientes a seis meses: 70.8% respondió, dolor de 9 a 5 en escala de 10.",
    fuente: "Israel · Sagy 2019",
    fuenteUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6616435/",
    relacionadas: ["dolor-cronico", "migrana", "neuropatias-periferales", "lesion-en-el-cordon-espinal"],
  },
  {
    slug: "migrana",
    nombre: "Migraña",
    nombreEnFrase: "migraña",
    evidencia: "moderada",
    resumen:
      "Primer ensayo aleatorizado con vaporizado: THC+CBD superior a placebo a las 2 horas, sostenido a 24 y 48.",
    fuente: "Neurology 2024",
    fuenteUrl: "https://www.neurology.org/doi/10.1212/WNL.0000000000204925",
    relacionadas: ["dolor-cronico", "fibromialgia", "neuropatias-periferales", "lesion-en-el-cordon-espinal"],
  },
  {
    slug: "enfermedad-inflamatoria-intestinal",
    nombre: "Enfermedad inflamatoria intestinal",
    nombreEnFrase: "enfermedad inflamatoria intestinal",
    evidencia: "moderada",
    resumen:
      "Remisión clínica hasta en 65% en Crohn, pero sin mejoría endoscópica: alivia síntomas, no la inflamación.",
    fuente: "Israel · Naftali 2021",
    fuenteUrl: "https://pubmed.ncbi.nlm.nih.gov/33858011/",
    relacionadas: ["cancer-y-quimioterapia", "enfermedades-avanzadas-y-cuidado-paliativo", "anorexia-y-caquexia", "sida-y-desordenes-por-vih"],
  },
  {
    slug: "alzheimer",
    nombre: "Alzheimer",
    nombreEnFrase: "alzheimer",
    evidencia: "moderada",
    resumen:
      "Ensayo fase II LiBBY en 120 pacientes: la agitación cedió en cerca del 90% a las 12 semanas.",
    fuente: "LiBBY · AAIC 2026",
    fuenteUrl: "https://aaic.alz.org/releases-2026/libby-trial-thc-cbd-agitation-late-stage-dementia.asp",
    relacionadas: ["epilepsia", "esclerosis-multiple", "esclerosis-lateral-amiotrofica", "autismo"],
  },
  {
    slug: "neuropatias-periferales",
    nombre: "Neuropatías periferales",
    nombreEnFrase: "neuropatías periferales",
    evidencia: "moderada",
    resumen:
      "Ensayo danés multicéntrico a doble ciego en dolor neuropático y espasticidad.",
    fuente: "Dinamarca · RCT",
    fuenteUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10459421/",
    relacionadas: ["dolor-cronico", "fibromialgia", "migrana", "lesion-en-el-cordon-espinal"],
  },
  {
    slug: "lesion-en-el-cordon-espinal",
    nombre: "Lesión en el cordón espinal",
    nombreEnFrase: "lesión en el cordón espinal",
    evidencia: "moderada",
    resumen:
      "Mismo ensayo danés: dolor neuropático central y espasticidad en lesión medular y esclerosis múltiple.",
    fuente: "Dinamarca · RCT",
    fuenteUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10459421/",
    relacionadas: ["dolor-cronico", "fibromialgia", "migrana", "neuropatias-periferales"],
  },
  {
    slug: "insomnio",
    nombre: "Insomnio",
    nombreEnFrase: "insomnio",
    evidencia: "moderada",
    resumen:
      "Beneficio a corto plazo cuando el insomnio es secundario a dolor crónico o apnea; se debilita con el uso prolongado.",
    fuente: "NASEM 2017",
    fuenteUrl: "https://www.nationalacademies.org/read/24625",
    relacionadas: ["desordenes-de-ansiedad", "ptsd", "depresion", "trastorno-bipolar"],
  },
  {
    slug: "esclerosis-lateral-amiotrofica",
    nombre: "Esclerosis lateral amiotrófica",
    nombreEnFrase: "esclerosis lateral amiotrófica",
    evidencia: "limitada",
    resumen:
      "Dronabinol bien tolerado: mejoró apetito y sueño, pero no los calambres ni las fasciculaciones.",
    fuente: "Revisión · PMC",
    fuenteUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5270417/",
    relacionadas: ["epilepsia", "esclerosis-multiple", "alzheimer", "autismo"],
  },
  {
    slug: "artritis",
    nombre: "Artritis",
    nombreEnFrase: "artritis",
    evidencia: "limitada",
    resumen:
      "Sativex en 58 pacientes con artritis reumatoide a 5 semanas: efecto analgésico significativo pero pequeño.",
    fuente: "Blake · PubMed 2006",
    fuenteUrl: "https://pubmed.ncbi.nlm.nih.gov/16282192/",
    relacionadas: ["dolor-cronico", "fibromialgia", "migrana", "neuropatias-periferales"],
  },
  {
    slug: "autismo",
    nombre: "Autismo",
    nombreEnFrase: "autismo",
    evidencia: "limitada",
    resumen:
      "Primer ensayo aleatorizado con placebo en 150 niños y jóvenes. Resultados mixtos: mejoría en conducta disruptiva, no en todas las medidas.",
    fuente: "Israel · Aran 2021",
    fuenteUrl: "https://pubmed.ncbi.nlm.nih.gov/33536055/",
    relacionadas: ["epilepsia", "esclerosis-multiple", "alzheimer", "esclerosis-lateral-amiotrofica"],
  },
  {
    slug: "enfermedades-avanzadas-y-cuidado-paliativo",
    nombre: "Enfermedades avanzadas y cuidado paliativo",
    nombreEnFrase: "enfermedades avanzadas y cuidado paliativo",
    evidencia: "limitada",
    resumen:
      "Ensayos con THC:CBD para carga sintomática en cáncer avanzado. Evidencia todavía escasa en cuidado paliativo.",
    fuente: "RCT · PMC",
    fuenteUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12289739/",
    relacionadas: ["cancer-y-quimioterapia", "enfermedad-inflamatoria-intestinal", "anorexia-y-caquexia", "sida-y-desordenes-por-vih"],
  },
  {
    slug: "parkinson",
    nombre: "Parkinson",
    nombreEnFrase: "parkinson",
    evidencia: "limitada",
    resumen:
      "Incluido en la cohorte israelí de 2,736 pacientes mayores de 65 años. Faltan ensayos controlados propios.",
    fuente: "Israel · Abuhasira 2018",
    fuenteUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0953620518300190",
    relacionadas: ["epilepsia", "esclerosis-multiple", "alzheimer", "esclerosis-lateral-amiotrofica"],
  },
  {
    slug: "anorexia-y-caquexia",
    nombre: "Anorexia y caquexia",
    nombreEnFrase: "anorexia y caquexia",
    evidencia: "limitada",
    resumen:
      "El dronabinol está aprobado por la FDA para pérdida de apetito, pero la evidencia sobre cannabis de planta es limitada.",
    fuente: "NASEM · NCBI",
    fuenteUrl: "https://www.ncbi.nlm.nih.gov/books/NBK425767/",
    relacionadas: ["cancer-y-quimioterapia", "enfermedad-inflamatoria-intestinal", "enfermedades-avanzadas-y-cuidado-paliativo", "sida-y-desordenes-por-vih"],
  },
  {
    slug: "sida-y-desordenes-por-vih",
    nombre: "SIDA y desórdenes por VIH",
    nombreEnFrase: "SIDA y desórdenes por VIH",
    evidencia: "limitada",
    resumen:
      "Evidencia limitada para apetito, peso y dolor. La mayoría de los estudios son pequeños y antiguos.",
    fuente: "NASEM · NCBI",
    fuenteUrl: "https://www.ncbi.nlm.nih.gov/books/NBK425767/",
    relacionadas: ["cancer-y-quimioterapia", "enfermedad-inflamatoria-intestinal", "enfermedades-avanzadas-y-cuidado-paliativo", "anorexia-y-caquexia"],
  },
  {
    slug: "desordenes-de-ansiedad",
    nombre: "Desórdenes de ansiedad",
    nombreEnFrase: "desórdenes de ansiedad",
    evidencia: "limitada",
    resumen:
      "Muy dependiente de la dosis: el CBD muestra señal, el THC en dosis altas puede empeorar la ansiedad.",
    fuente: "Síntesis de evidencia",
    fuenteUrl: "https://www.cannabisevidence.org/evidence-syntheses/anxiety_and_mood_disorders/",
    relacionadas: ["insomnio", "ptsd", "depresion", "trastorno-bipolar"],
  },
  {
    slug: "ptsd",
    nombre: "PTSD",
    nombreEnFrase: "PTSD",
    evidencia: "limitada",
    resumen:
      "El único ensayo aleatorizado — 76 veteranos, dirigido por la Dra. Sue Sisley — no superó al placebo. Pero el cannabis federal que la obligaron a usar tenía 27% del THC del comercial. El resultado nulo puede ser del material, no de la planta.",
    fuente: "Sisley · PLOS One 2021",
    fuenteUrl: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0246990",
    relacionadas: ["insomnio", "desordenes-de-ansiedad", "depresion", "trastorno-bipolar"],
  },
  {
    slug: "depresion",
    nombre: "Depresión",
    nombreEnFrase: "depresión",
    evidencia: "limitada",
    resumen:
      "Sin evidencia de calidad sobre calidad de vida o funcionamiento. Puede acompañar a otra condición certificable.",
    fuente: "Síntesis de evidencia",
    fuenteUrl: "https://www.cannabisevidence.org/evidence-syntheses/anxiety_and_mood_disorders/",
    relacionadas: ["insomnio", "desordenes-de-ansiedad", "ptsd", "trastorno-bipolar"],
  },
  {
    slug: "trastorno-bipolar",
    nombre: "Trastorno bipolar",
    nombreEnFrase: "trastorno bipolar",
    evidencia: "insuficiente",
    resumen:
      "No hay evidencia sobre seguridad del cannabis en trastorno bipolar. Requiere evaluación psiquiátrica antes de certificar.",
    fuente: "Síntesis de evidencia",
    fuenteUrl: "https://www.cannabisevidence.org/evidence-syntheses/anxiety_and_mood_disorders/",
    relacionadas: ["insomnio", "desordenes-de-ansiedad", "ptsd", "depresion"],
  },
  {
    slug: "hepatitis-c",
    nombre: "Hepatitis C",
    nombreEnFrase: "hepatitis C",
    evidencia: "insuficiente",
    resumen:
      "Califica bajo el reglamento, pero no encontramos ensayos clínicos que respalden el uso para la hepatitis C en sí.",
    fuente: "NASEM · NCBI",
    fuenteUrl: "https://www.ncbi.nlm.nih.gov/books/NBK425767/",
    relacionadas: ["cancer-y-quimioterapia", "enfermedad-inflamatoria-intestinal", "enfermedades-avanzadas-y-cuidado-paliativo", "anorexia-y-caquexia"],
  },
  {
    slug: "glaucoma",
    nombre: "Glaucoma",
    nombreEnFrase: "glaucoma",
    evidencia: "insuficiente",
    resumen:
      "La Academia Americana de Oftalmología NO lo recomienda: haría falta THC 6 a 8 veces al día y puede reducir el flujo al nervio óptico.",
    fuente: "AAO",
    fuenteUrl: "https://www.aao.org/eye-health/tips-prevention/medical-marijuana-glaucoma-treament",
    relacionadas: [],
  },
];

export const porSlug = (slug: string) => CONDICIONES.find((c) => c.slug === slug);
