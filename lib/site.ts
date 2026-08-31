/**
 * Datos de contacto y destinos de los botones de acción.
 *
 * REGISTRO_URL apunta hoy al sitio actual de CannaID. Cuando exista el
 * formulario propio (o el checkout), cambiar esta constante es lo único
 * que hace falta: todos los botones de "Empezar", "Quiero ser paciente"
 * y "Pide tu cita" la leen desde acá.
 */
export const REGISTRO_URL = "https://cannaidpr.com";

export const CONTACTO = {
  telefono: "787-400-5288",
  email: "info@cannaidpr.com",
  dispensarios: "787-344-7110",
} as const;

/**
 * El prototipo trae los testimonios como marcadores entre corchetes: no hay
 * citas reales todavía. Publicar un testimonio de CannaID revela una condición
 * médica, así que cada uno necesita consentimiento por escrito de la persona.
 * Poner en true cuando el bloque de components/Testimonios.tsx tenga citas reales.
 */
export const MOSTRAR_TESTIMONIOS = false;
