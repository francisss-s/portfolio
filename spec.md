# SPEC-001 - Portafolio profesional MVP

**Estado:** Draft — alcance de home aprobado para implementación  
**Propietario:** Francisco Fuentes  
**Creado:** 2026-09-02  
**Última actualización:** 2026-09-02  
**Documentos relacionados:** `AGENTS.md`, `DESIGN.md`

## 1. Propósito

Francisco necesita un portafolio que haga visible su capacidad de construir software completo y que pueda utilizarse como evidencia durante postulaciones laborales. La versión MVP debe permitir que una persona reclutadora comprenda rápidamente su perfil y que una persona técnica profundice en proyectos, arquitectura, decisiones y resultados.

El producto debe distinguirse de una plantilla genérica mediante una dirección artística propia llamada internamente **Constelación de Sistemas**. Esa identidad se inspira en ideas de viaje, conexión y mundos distintos, pero no reproduce recursos ni interfaces de videojuegos existentes.

## 2. Resultado observable

Después de implementar esta especificación, una persona podrá:

1. abrir la home y reconocer en menos de 30 segundos el nombre, rol, especialización y experiencia de Francisco;
2. explorar al menos dos proyectos completos;
3. abrir un caso de estudio y comprender el problema, la solución, la arquitectura, una decisión técnica, la validación y las limitaciones;
4. revisar la trayectoria profesional;
5. abrir o descargar el CV;
6. acceder a GitHub, LinkedIn y un canal de contacto;
7. realizar todas estas acciones en escritorio o móvil, con teclado y con movimiento reducido.

## 3. Usuarios

### U1 - Reclutador o selección

Dispone de poco tiempo y necesita determinar rápidamente el perfil, la experiencia, las tecnologías principales y la existencia de trabajo verificable.

### U2 - Tech Lead o desarrollador entrevistador

Busca evidencia sobre criterio técnico, arquitectura, trade-offs, pruebas, infraestructura, claridad de código y capacidad de reflexión.

### U3 - Francisco

Necesita actualizar proyectos y experiencia sin modificar múltiples componentes ni romper la identidad visual del sitio.

## 4. Alcance del MVP

### Incluido

- Home con presentación, proyectos destacados, trayectoria resumida, perfil breve y contacto.
- Índice de proyectos.
- Dos casos de estudio completos como mínimo.
- Página de experiencia.
- Ruta de CV con visualización y descarga.
- Enlaces verificados a GitHub y LinkedIn.
- Sistema visual base descrito en `DESIGN.md`.
- Mapa o constelación de proyectos con alternativa textual equivalente.
- Responsive para móvil, tablet y escritorio.
- Accesibilidad WCAG 2.2 AA como objetivo mínimo.
- Metadatos SEO y sociales por ruta principal y caso de estudio.
- Página 404 y límites de error útiles.
- Contenido profesional almacenado en una fuente local tipada.
- Pruebas de los recorridos críticos.

### Fuera de alcance

- Blog, newsletter o CMS remoto.
- Panel de administración.
- Registro o inicio de sesión.
- Comentarios, testimonios o recomendaciones.
- Formulario que almacene datos en una base de datos.
- Chat con IA.
- Música, cursor personalizado o intro cinematográfica.
- Soporte completo en inglés durante el MVP.
- Más de cuatro proyectos destacados.
- Analítica avanzada o seguimiento publicitario.

## 5. Requisitos funcionales

### FR-001 - Presentación inmediata

La primera región visible de la home debe mostrar el nombre `Francisco Fuentes`, el rol `Full Stack Engineer`, el foco `TypeScript / Node.js + Python` y un CTA primario hacia proyectos.

**Prioridad:** Must.

### FR-002 - Acciones profesionales principales

La home debe ofrecer acceso identificable a proyectos, trayectoria, CV, GitHub, LinkedIn y contacto. Los enlaces externos deben abrir destinos reales y no placeholders.

**Prioridad:** Must.

### FR-003 - Proyectos destacados

La home debe mostrar entre dos y cuatro proyectos destacados. Cada proyecto debe presentar nombre, problema o resultado, estado, visual propio, stack agrupado por capa y enlaces disponibles.

Un proyecto `planned` o `in-progress` no puede presentarse como caso terminado ni utilizar resultados simulados.

**Prioridad:** Must.

### FR-004 - Índice de proyectos

La ruta `/projects` debe listar proyectos destacados y experimentos. La clasificación debe comunicar estado y tipo de problema. El MVP no requiere búsqueda ni filtros complejos; si existen filtros, su estado debe reflejarse en la URL.

**Prioridad:** Should.

### FR-005 - Caso de estudio

Cada ruta `/projects/:slug` publicada debe contener:

- resumen;
- problema y contexto;
- rol y alcance real;
- solución;
- arquitectura;
- al menos una decisión con alternativas y trade-off;
- desafío técnico principal;
- estrategia de pruebas o validación;
- resultado verificable;
- limitaciones y qué cambiaría;
- enlaces a demo y código cuando puedan publicarse.

**Prioridad:** Must.

### FR-006 - Trayectoria profesional

La home debe incluir un resumen de experiencia y `/experience` debe presentar la trayectoria ampliada. El contenido debe provenir de una fuente revisada por Francisco y coincidir con el CV vigente.

**Prioridad:** Must.

### FR-007 - CV

La ruta `/resume` debe permitir visualizar información esencial del CV y descargar el archivo vigente. La descarga debe tener nombre estable y profesional. El número telefónico no se incluirá en código o contenido estructurado público salvo aprobación explícita.

**Prioridad:** Must.

### FR-008 - Contacto

El sitio debe ofrecer un enlace de correo, GitHub y LinkedIn. El correo debe confirmarse antes del release porque el PDF utilizado como fuente podría contener un error tipográfico.

El MVP no necesita formulario con backend. Si se utiliza un formulario, debe tener mejora progresiva, estados accesibles y una especificación independiente para el tratamiento de datos.

**Prioridad:** Must.

### FR-009 - Navegación temática

En escritorio, la navegación puede presentarse como un panel de comandos original. En móvil debe convertirse en un patrón compacto y convencional. Los nombres de las opciones seguirán siendo profesionales: Proyectos, Trayectoria, Perfil y Contacto.

**Prioridad:** Should.

### FR-010 - Mapa de proyectos

La home debe incluir una representación visual de proyectos como nodos conectados. La información y la navegación del mapa deben existir también como HTML semántico; canvas, SVG o animación no pueden ser la única vía de acceso.

**Prioridad:** Should.

### FR-011 - Estados de navegación y error

El sitio debe mostrar foco, selección y navegación pendiente de forma perceptible. Una ruta o proyecto inexistente debe ofrecer una respuesta 404 útil y caminos para regresar. Un error de carga no debe dejar una pantalla vacía.

**Prioridad:** Must.

### FR-012 - Fuente única de contenido

Datos de proyectos, experiencia, enlaces y metadatos deben provenir de contenido tipado y no duplicarse entre rutas. Una actualización de un proyecto debe reflejarse en la home, el índice y su caso de estudio sin editar tres copias independientes.

**Prioridad:** Must.

## 6. Requisitos no funcionales

### NFR-001 - Accesibilidad

El sitio debe aspirar a WCAG 2.2 AA. Debe funcionar con teclado, presentar foco visible, mantener jerarquía semántica, respetar movimiento reducido y no depender solo de color o animación.

### NFR-002 - Rendimiento

En una medición móvil representativa, el objetivo es Lighthouse 90 o superior y Core Web Vitals dentro de los límites definidos en `DESIGN.md`. Los adornos deben degradarse o eliminarse antes de perjudicar la interacción principal.

### NFR-003 - Responsive

No debe existir scroll horizontal no intencional desde 320 px. Móvil debe ser una composición propia, no una reducción proporcional del layout de escritorio.

### NFR-004 - Privacidad

No se publicarán secretos, teléfono, datos internos de empleadores ni métricas inventadas. La analítica, si se añade, será mínima y respetuosa de la privacidad.

### NFR-005 - Mantenibilidad

La aplicación debe usar TypeScript estricto, contenido tipado, fronteras de módulo claras y pruebas por comportamiento. No se añadirán abstracciones sin una variación o dependencia real.

### NFR-006 - Compatibilidad

La experiencia principal debe ser funcional en las versiones estables actuales de Chrome, Edge, Firefox y Safari. Sin JavaScript, el contenido y los enlaces esenciales deben seguir disponibles cuando la estrategia de despliegue lo permita.

### NFR-007 - Legal e identidad

Todos los emblemas, iconos y ornamentos principales deben ser originales o contar con una licencia compatible. No se usarán assets oficiales de Kingdom Hearts, Persona, Disney u otras franquicias.

## 7. Contrato de rutas

| URL | Route Module sugerido | Responsabilidad | Renderizado inicial |
| --- | --- | --- | --- |
| `/` | `app/routes/home.tsx` | presentación y resumen | prerender |
| `/projects` | `app/routes/projects.tsx` | índice de proyectos | prerender |
| `/projects/:slug` | `app/routes/project-detail.tsx` | caso de estudio | prerender por slug publicado |
| `/experience` | `app/routes/experience.tsx` | trayectoria completa | prerender |
| `/resume` | `app/routes/resume.tsx` | CV y descarga | prerender |
| `*` | boundary o catch-all definido por el framework | 404 útil | estático cuando sea posible |

La configuración canónica vive en `app/routes.ts`. Los nombres son una propuesta y pueden cambiar en el plan, pero las URLs públicas no deben modificarse sin actualizar esta especificación.

## 8. Modelo de contenido inicial

El detalle final se resolverá en el plan técnico. Como mínimo, un proyecto debe poder expresar:

```ts
type ProjectStatus = "planned" | "in-progress" | "completed" | "archived";

interface ProjectSummary {
  slug: string;
  name: string;
  status: ProjectStatus;
  featured: boolean;
  summary: string;
  problem: string;
  accent: string;
  stack: {
    frontend?: string[];
    backend?: string[];
    data?: string[];
    infrastructure?: string[];
  };
  links: {
    demo?: string;
    repository?: string;
  };
}
```

El modelo debe impedir que contenido incompleto sea publicado accidentalmente como proyecto terminado. Los campos requeridos para un caso `completed` se definirán y validarán en el plan.

## 9. Decisiones iniciales

### ADR-001 - React Router Framework Mode

Se utilizará React Router en Framework Mode para disponer de Route Modules tipados, loaders, actions, error boundaries, code splitting y estrategias de renderizado dentro de un mismo framework.

### ADR-002 - Prerender como opción por defecto

El contenido del portafolio cambia con poca frecuencia y debe cargar rápidamente. Las rutas públicas se prerenderizarán cuando sea posible; solo la interacción del mapa y otros controles se hidratará en cliente. Cualquier necesidad de SSR por solicitud debe justificarse en una especificación posterior.

### ADR-003 - Contenido local y tipado

El MVP no necesita un CMS. Los proyectos y la experiencia vivirán en archivos locales tipados o MDX validado, reduciendo complejidad operativa y evitando una dependencia externa sin beneficio inmediato.

### ADR-004 - Arquitectura proporcional

Las rutas actuarán como adaptadores del framework y compondrán features. Solo se crearán dominio, puertos y adapters cuando exista lógica estable o integración externa real. Se prohíbe añadir capas vacías para aparentar Clean Architecture.

### ADR-005 - Contacto sin backend

El MVP utilizará enlaces directos de contacto. Un formulario remoto añade privacidad, spam, estados operativos y tratamiento de datos que no son necesarios para validar el portafolio.

## 10. Escenarios de aceptación

### AC-001 - Comprensión inicial

**Dado** que una persona abre `/` por primera vez,  
**cuando** observa la primera región visible,  
**entonces** puede identificar a Francisco, su rol, su foco tecnológico y cómo abrir sus proyectos sin hacer una exploración previa.

### AC-002 - Profundización técnica

**Dado** un proyecto destacado terminado,  
**cuando** la persona abre su caso de estudio,  
**entonces** encuentra problema, alcance, arquitectura, decisión, validación, resultado y limitaciones con información verificable.

### AC-003 - Honestidad de estado

**Dado** un proyecto cuyo estado es `planned` o `in-progress`,  
**cuando** se muestra en cualquier ruta,  
**entonces** el estado es visible y no aparecen métricas, demos o resultados como si el proyecto estuviera terminado.

### AC-004 - Navegación con teclado

**Dado** que una persona no utiliza mouse,  
**cuando** recorre la home, el menú, el mapa alternativo y los enlaces,  
**entonces** alcanza todas las acciones en un orden lógico, ve el foco y no queda atrapada.

### AC-005 - Movimiento reducido

**Dado** que el sistema solicita movimiento reducido,  
**cuando** la persona navega o selecciona un proyecto,  
**entonces** viajes, parallax y movimiento ambiental se eliminan sin ocultar información ni estado.

### AC-006 - Móvil

**Dado** un viewport de 320 px,  
**cuando** la persona recorre todas las rutas del MVP,  
**entonces** no encuentra scroll horizontal accidental, texto cortado ni controles inaccesibles.

### AC-007 - Proyecto inexistente

**Dado** un slug que no corresponde a un proyecto publicado,  
**cuando** se solicita `/projects/:slug`,  
**entonces** se presenta una respuesta 404 comprensible con enlace a `/projects` y `/`.

### AC-008 - Actualización única

**Dado** que Francisco actualiza el resumen de un proyecto en la fuente canónica,  
**cuando** se ejecuta el build,  
**entonces** la home, el índice y el caso de estudio muestran la misma versión sin editar copias independientes.

### AC-009 - CV

**Dado** que una persona abre `/resume`,  
**cuando** activa descargar CV,  
**entonces** obtiene el PDF vigente con nombre profesional y el enlace no devuelve error.

### AC-010 - Degradación segura

**Dado** que una animación o recurso decorativo no puede cargarse,  
**cuando** la persona abre una ruta,  
**entonces** el contenido, navegación y CTA principales siguen siendo utilizables.

## 11. Estrategia de verificación

La implementación deberá demostrar los escenarios anteriores mediante una combinación de:

- pruebas unitarias para contenido, validadores y funciones puras;
- pruebas de integración para loaders, rutas y estados de error;
- React Testing Library para comportamiento accesible de componentes;
- E2E para home -> proyecto, navegación, 404 y descarga de CV;
- auditoría automatizada de accesibilidad;
- revisión manual con teclado, lector de pantalla básico y movimiento reducido;
- verificación visual en 320 px, móvil común, tablet y escritorio;
- build de producción y auditoría Lighthouse.

Las herramientas concretas y los comandos se decidirán en `plan.md` después de inspeccionar el proyecto inicial y su package manager.

## 12. Matriz de trazabilidad inicial

| Requisito | Escenario principal | Verificación esperada |
| --- | --- | --- |
| FR-001, FR-002 | AC-001 | componente + E2E |
| FR-003, FR-005 | AC-002, AC-003 | contenido + ruta + E2E |
| FR-006 | AC-001 | contenido + revisión manual |
| FR-007 | AC-009 | integración + E2E |
| FR-008 | AC-001 | enlaces + E2E |
| FR-009, FR-010 | AC-004, AC-005 | componente + accesibilidad |
| FR-011 | AC-007, AC-010 | integración + E2E |
| FR-012 | AC-008 | unitario + build |
| NFR-001 | AC-004, AC-005 | axe + manual |
| NFR-002 | AC-010 | build + Lighthouse |
| NFR-003 | AC-006 | visual + E2E |

## 13. Riesgos

### R-001 - Estética sobre evidencia

El mapa y las animaciones pueden consumir tiempo antes de tener casos de estudio sólidos. Mitigación: el primer milestone implementará contenido y flujo semántico antes del ornamento avanzado.

### R-002 - Sobreingeniería

Aplicar Clean Architecture de forma literal podría crear capas sin valor en un sitio mayormente estático. Mitigación: cada abstracción debe aislar una regla o dependencia real.

### R-003 - Rendimiento del mapa

SVG complejo, partículas o animación continua pueden degradar móvil. Mitigación: versión HTML equivalente, motion reducido, presupuestos medibles y eliminación progresiva de decoración.

### R-004 - Contenido incompleto

Los proyectos candidatos aún pueden no contar con demo, métricas o documentación. Mitigación: publicar al menos dos casos completos y representar el resto con estado honesto o mantenerlos fuera del release.

### R-005 - Uso accidental de propiedad intelectual

Una referencia demasiado directa puede convertir el sitio en una obra derivada reconocible. Mitigación: assets originales, revisión contra `DESIGN.md` y eliminación de iconografía característica de franquicias.

## 14. Preguntas abiertas

Estas preguntas deben resolverse antes de cambiar el estado a `Approved`:

1. ¿Qué dos proyectos poseen evidencia suficiente para el MVP?
2. ¿Cuál es el correo profesional correcto?
3. ¿Cuál es la URL pública definitiva del CV?
4. ¿El MVP incluirá fotografía personal o solo emblema?
5. ¿Dónde se desplegará el sitio?
6. ¿La primera versión utilizará CSS Modules solamente o Tailwind como herramienta adicional?
7. ¿Qué visuales de proyectos pueden publicarse sin restricciones de confidencialidad?

## 15. Criterio de aprobación

Esta especificación puede pasar de `Draft` a `Approved` cuando:

- [ ] Francisco confirme el alcance.
- [ ] Se seleccionen los dos casos de estudio iniciales.
- [ ] Se confirmen correo, GitHub, LinkedIn y CV.
- [ ] Se resuelvan las decisiones que afecten arquitectura o contenido del MVP.
- [ ] Los escenarios de aceptación representen correctamente el resultado esperado.

Después de la aprobación se debe crear `specs/001-portfolio-mvp/plan.md`. Todavía no corresponde descomponer la implementación en tareas porque hacerlo antes de cerrar estas decisiones produciría trabajo basado en supuestos.

## 16. Historial de decisiones y cambios

| Fecha | Cambio | Motivo |
| --- | --- | --- |
| 2026-09-02 | Creación de SPEC-001 en estado Draft | Iniciar el proyecto con SDD antes de implementar |
| 2026-09-02 | React Router Framework Mode elegido como framework | Decisión explícita de Francisco |
| 2026-09-02 | Prerender y contenido local tipado como defaults | Reducir complejidad y priorizar rendimiento del portafolio |
| 2026-09-02 | Home aprobada para implementación mediante `HOMEPAGE.md` | Ejecutar solo `/`; las páginas secundarias y decisiones restantes continúan en Draft |
