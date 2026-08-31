# CannaID PR

Sitio de CannaID Puerto Rico: certificación y renovación de licencias de cannabis
medicinal por telemedicina. Next.js 16 (App Router), TypeScript, CSS propio.

## Correr en local

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # build de producción
npm run start    # sirve el build
npm run lint
```

## Estructura

```
app/
  page.tsx                    Home
  prevencion/                 Prevención de la adicción
  condiciones/                Las 24 condiciones + evidencia + registro
  condiciones/[slug]/         Ficha de cada condición (24 páginas estáticas)
  blog/                       Índice del blog
  dispensarios/               Propuesta para dispensarios
  globals.css                 Sistema de diseño: tokens, tipografía, componentes
components/
  SiteNav.tsx                 Navegación con submenús y menú móvil
  Footer.tsx                  Pie de página
  CondicionCard.tsx           Tarjeta de condición del índice
  Evidencia.tsx               Las tres barras de fuerza de la evidencia
  Testimonios.tsx             Citas de pacientes (apagado, ver abajo)
lib/
  condiciones.ts              Las 24 condiciones: evidencia, resumen y fuente
  site.ts                     Contacto y destino de los botones de acción
```

Las fichas de condición se generan desde `lib/condiciones.ts`: para corregir un
resumen, una clasificación de evidencia o una fuente se edita ese archivo y las
24 páginas se rearman solas.

## Pendientes antes de considerarlo lanzado

Estos puntos vienen del prototipo y necesitan una decisión o un dato real:

- **Destino de los botones de acción.** `REGISTRO_URL` en `lib/site.ts` apunta hoy
  a `cannaidpr.com`. Cambiar esa constante cuando exista el formulario propio.
- **Testimonios.** El prototipo los trae como marcadores entre corchetes. El bloque
  está en `components/Testimonios.tsx` y apagado con `MOSTRAR_TESTIMONIOS` en
  `lib/site.ts`. Cada cita necesita consentimiento por escrito: ser paciente de
  CannaID revela una condición médica.
- **Autoevaluación (CUDIT-R) y guía en PDF.** En Prevención los dos botones están
  sin conectar porque no existe el destino todavía.
- **Registro de pacientes.** El botón "Participar" y los contadores de la sección
  siguen sin formulario ni datos.
- **Artículos del blog.** El índice muestra las fichas, pero no hay páginas de
  artículo: las tarjetas no son enlaces todavía.
- **Firma médica de las fichas.** El prototipo cerraba cada ficha con "Revisado por
  [Dr./Dra. Nombre, Lic. #]". Sin nombre y licencia reales esa línea no se publica.
- **Privacidad, términos y aviso HIPAA.** El pie no los enlaza hasta que existan los
  documentos aprobados.
- **Teléfono de la Línea PAS.** Está publicado 1-800-981-0023 (ASSMCA). Conviene
  verificarlo con ellos: es el dato donde un error hace daño de verdad.
- **Reglamento 9038.** La lista de las 24 condiciones debería cotejarse contra el
  texto oficial antes de publicar.
