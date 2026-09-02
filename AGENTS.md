# AGENTS.md

## Propósito

Este archivo contiene las reglas permanentes para cualquier agente que trabaje en el portafolio de Francisco Fuentes. Léelo antes de proponer, planificar o modificar código.

El objetivo del producto es demostrar, con evidencia, que Francisco puede comprender un problema, diseñar una solución full stack, implementarla y llevarla a producción. La identidad visual es importante, pero nunca debe imponerse sobre claridad, accesibilidad, rendimiento o contenido verificable.

## Fuentes de verdad

Lee estos documentos antes de realizar cambios relacionados:

1. `AGENTS.md`: normas de trabajo, arquitectura y calidad.
2. `DESIGN.md`: dirección visual, experiencia, voz y restricciones de marca.
3. `specs/<id>-<slug>/spec.md`: comportamiento y alcance aprobado de una iniciativa.
4. `specs/<id>-<slug>/plan.md`: estrategia técnica aprobada para implementar la especificación.
5. `specs/<id>-<slug>/tasks.md`: unidades de trabajo y trazabilidad.
6. Código y pruebas: describen el comportamiento actualmente implementado, pero no autorizan ampliar el alcance.

Si dos fuentes se contradicen, detente y resuelve la contradicción en el documento de mayor autoridad antes de implementar. No corrijas silenciosamente el producto para acomodarlo al código existente.

## Flujo Spec-Driven Development

Los cambios que alteren comportamiento visible, rutas, arquitectura, datos, dependencias de producción o contratos requieren una especificación.

El flujo normal es:

1. **Specify:** crear o actualizar `specs/<id>-<slug>/spec.md`. Definir resultado para el usuario, alcance, requisitos numerados, escenarios de aceptación, restricciones y dudas abiertas. No decidir detalles internos innecesarios.
2. **Clarify:** resolver contradicciones y decisiones que cambiarían materialmente el resultado. No inventar contenido profesional, métricas ni preferencias de Francisco.
3. **Plan:** después de que la especificación figure como `Approved`, crear `plan.md` con arquitectura, archivos afectados, riesgos, migraciones y estrategia de verificación.
4. **Tasks:** crear `tasks.md` con tareas pequeñas, ordenadas y vinculadas a requisitos de la especificación.
5. **Implement:** trabajar requisito por requisito, manteniendo la aplicación ejecutable.
6. **Verify:** ejecutar checks relevantes y comprobar los escenarios de aceptación como comportamiento observable.
7. **Close:** actualizar estado, decisiones, diferencias y retrospectiva. Una implementación que se aparta de la especificación exige actualizar la especificación, no esconder la diferencia.

Excepciones: correcciones ortográficas, formato, comentarios o refactors puramente mecánicos que no cambien contratos pueden ejecutarse sin una especificación nueva. Si existe duda sobre si cambia comportamiento, trátalo como cambio especificable.

No implementes una especificación `Draft` salvo que el usuario pida explícitamente comenzar la implementación. En ese caso, registra la aprobación y cambia su estado antes de editar código.

## Stack y convenciones del framework

La aplicación usa **React Router en Framework Mode** con TypeScript estricto.

- Mantén la configuración de rutas en `app/routes.ts`.
- Trata cada archivo referenciado desde `app/routes.ts` como un Route Module.
- Usa los tipos generados de cada ruta, por ejemplo `Route.LoaderArgs`, `Route.ActionArgs`, `Route.ComponentProps` y `Route.MetaArgs`.
- Usa `loader` para leer datos necesarios para renderizar una ruta.
- Usa `action` para mutaciones provocadas por formularios o solicitudes de la ruta.
- Usa `<Form>` para navegación o mutaciones con historial y `useFetcher` cuando la interacción no deba navegar.
- Usa `<Link>` y `<NavLink>` para navegación interna. No reemplaces navegación semántica con `onClick` sobre elementos genéricos.
- Usa `ErrorBoundary` en las fronteras donde exista una recuperación útil y un límite raíz para errores no controlados.
- Modela estados pending, success, empty y error de forma explícita.
- Usa parámetros de URL y search params para estado compartible, enlazable o dependiente de navegación.
- No dupliques datos de `loader`, estados de navegación o revalidación en `useEffect` y estado local.
- No incorpores React Query, Redux, Zustand u otra capa de estado por costumbre. Añádela solo cuando una especificación demuestre un problema que React Router y el estado local no resuelven.
- Conserva mejora progresiva en formularios cuando sea razonable.
- Prefiere prerenderizar contenido público y estable. Justifica SSR en tiempo de ejecución o una SPA completamente cliente en el plan correspondiente.

## Arquitectura

La arquitectura limpia significa dependencias claras, no una cantidad fija de carpetas.

### Regla de dependencia

Las dependencias apuntan hacia el comportamiento estable:

```text
routes -> features -> domain
              ^          ^
              |          |
          adapters ------+

ui y shared no conocen rutas concretas
domain no importa React, React Router, DOM ni proveedores externos
```

No crees una capa `domain`, un puerto o una interfaz si no existe lógica de negocio o una dependencia externa real que aislar. Para contenido estático, una estructura simple de ruta + feature + UI es preferible a simular arquitectura empresarial.

### Responsabilidades

- `app/routes/`: módulos del framework. Declaran carga, mutaciones, metadatos, boundaries y componen features. Deben permanecer delgados.
- `app/features/`: comportamiento orientado a una capacidad del producto. Puede contener componentes, modelos de vista, hooks y pruebas propias.
- `app/domain/`: reglas de negocio puras, solo cuando realmente existan. No depende del framework.
- `app/adapters/`: integración con filesystem, CMS, correo, analítica u otros proveedores.
- `app/ui/`: primitives y composiciones visuales reutilizables, sin conocimiento de una ruta específica.
- `app/content/`: contenido tipado del portafolio y casos de estudio.
- `app/design-system/`: tokens, tipografía y vocabulario de movimiento definidos en `DESIGN.md`.
- `app/lib/`: utilidades pequeñas y específicas. No debe convertirse en un cajón de sastre.

Mantén junto lo que cambia junto. Un componente usado por una sola feature vive dentro de esa feature; muévelo a `ui` solo cuando exista reutilización real y estable.

Evita barrel files generales (`index.ts`) si ocultan dependencias o generan ciclos. Prefiere imports explícitos.

## React y componentes

- Componentes funcionales y composición antes que herencia.
- Un componente debe tener una responsabilidad conceptual clara; no uses límites arbitrarios de líneas.
- Mantén estado tan local como sea posible.
- Calcula valores derivados durante render o con funciones puras; no los sincronices con efectos.
- Usa efectos únicamente para sincronizar React con un sistema externo.
- No memorices automáticamente con `useMemo` o `useCallback`; hazlo por identidad necesaria o evidencia de rendimiento.
- Separa lógica no visual compleja en funciones puras o módulos de feature antes de crear hooks genéricos.
- Los props deben expresar intención. Evita componentes con muchas banderas booleanas; usa variantes explícitas o composición.
- Los componentes interactivos deben funcionar con teclado y tecnología asistiva.
- Todo control requiere nombre accesible, estado de foco visible y área táctil suficiente.

## TypeScript

- Mantén `strict` habilitado.
- No uses `any`. Usa `unknown` en fronteras y valida antes de estrechar el tipo.
- Evita assertions `as` para silenciar al compilador. Si una es inevitable, explica y prueba la invariante que la hace segura.
- No uses enums numéricos; prefiere uniones literales o objetos `as const` cuando corresponda.
- Modela estados imposibles como imposibles mediante uniones discriminadas.
- Los tipos de dominio o contenido viven junto a su dueño. No crees un archivo global `types.ts`.
- Valida datos externos en la frontera. Usa la librería de esquemas ya instalada; solicita aprobación antes de agregar una dependencia de producción nueva.
- No exportes algo solo para poder probarlo. Prueba mediante la API pública del módulo o extrae una unidad con sentido propio.

## Contenido y datos profesionales

- Nunca inventes experiencia, responsabilidades, clientes, usuarios, métricas, fechas o tecnologías.
- Distingue explícitamente entre proyecto `planned`, `in-progress`, `completed` y `archived`.
- Un proyecto solo puede ser destacado si posee evidencia suficiente según `DESIGN.md`.
- No publiques información sensible, credenciales, números telefónicos ni datos internos de empleadores.
- El contenido profesional debe poder rastrearse a una fuente revisada por Francisco.
- Si un caso real está cubierto por confidencialidad, anonimiza detalles y explica el alcance sin reconstruir información privada.

## Diseño y estilos

- `DESIGN.md` es obligatorio para cualquier decisión visual.
- Usa custom properties como tokens. No introduzcas valores de color, spacing, tipografía o motion arbitrarios cuando exista un token.
- CSS Modules es la opción inicial para estilos de componentes.
- Tailwind puede evaluarse como herramienta, pero no puede sustituir el sistema de diseño ni imponer una apariencia genérica.
- No uses componentes de shadcn, Tailwind UI u otros kits como resultado visual final sin rediseño sustancial.
- No copies recursos ni interfaces de Kingdom Hearts, Persona, Disney u otras franquicias.
- Conserva una alternativa textual para mapas, vitrales, diagramas o exploraciones visuales.
- Respeta `prefers-reduced-motion` y no uses `transition: all`.
- No agregues música automática, cursor personalizado, video de fondo ni una introducción bloqueante.

## Accesibilidad

- Objetivo mínimo: WCAG 2.2 nivel AA.
- Usa HTML semántico antes que ARIA.
- Mantén orden lógico de headings y landmarks.
- Incluye skip link al contenido principal.
- El foco debe ser visible en todos los elementos interactivos.
- No comuniques estado únicamente mediante color, posición o animación.
- Imágenes informativas necesitan texto alternativo; imágenes decorativas usan alt vacío.
- Mensajes de error deben identificar el problema y, cuando sea posible, cómo corregirlo.
- Prueba navegación completa con teclado y movimiento reducido antes de cerrar una tarea visual.

## Rendimiento

- No hidrates contenido estático solo para facilitar la implementación.
- Aísla interactividad en componentes pequeños.
- Evita WebGL, canvas continuo y librerías grandes hasta que una especificación justifique su valor.
- Optimiza imágenes y define dimensiones para evitar layout shift.
- Carga fuentes de manera controlada y limita familias, pesos y subsets.
- Respeta los objetivos de rendimiento definidos en `DESIGN.md`.
- Ante un trade-off, prioriza comprensión y respuesta de la interfaz por sobre ornamentación.

## Seguridad y privacidad

- Nunca confirmes secretos en el repositorio. Usa `.env.example` con nombres y valores ficticios.
- Todo secreto se lee solo en código de servidor.
- No uses variables expuestas al cliente para datos sensibles.
- Escapa o sanitiza contenido no confiable antes de renderizar HTML.
- No uses `dangerouslySetInnerHTML` salvo requisito documentado, sanitización explícita y pruebas.
- Dependencias nuevas requieren propósito, evaluación de mantenimiento y aprobación si son de producción.
- Analítica y formularios deben recolectar la menor cantidad posible de datos.

## Pruebas

Prueba comportamiento, no detalles internos.

- Funciones puras: pruebas unitarias.
- Componentes: React Testing Library con consultas accesibles.
- Rutas, loaders y actions: pruebas de integración de sus contratos.
- Flujos críticos: Playwright o la herramienta E2E ya configurada.
- Accesibilidad: comprobación automatizada más revisión manual de teclado.
- Corrección de bug: agrega primero una prueba que falle cuando sea razonable.
- No abuses de snapshots grandes; usa aserciones sobre resultados observables.
- No reduzcas cobertura eliminando pruebas o debilitando aserciones sin justificarlo.

## Comandos y dependencias

- Usa el package manager indicado por el lockfile existente.
- No cambies de package manager ni regeneres otro lockfile.
- Usa scripts de `package.json` en vez de inventar comandos paralelos.
- Antes de instalar una dependencia, comprueba si el repositorio ya resuelve el problema.
- Las dependencias de producción requieren una razón registrada en el plan.
- Cuando se cree el proyecto, documenta aquí los comandos reales de desarrollo, typecheck, lint, test, E2E y build. No dejes comandos supuestos como si estuvieran verificados.

## Política de cambios

- Lee los archivos afectados y sus pruebas antes de editar.
- Conserva cambios ajenos o no relacionados.
- No realices refactors amplios dentro de una tarea pequeña.
- No cambies una API pública sin actualizar especificación, consumidores, pruebas y documentación.
- No uses comandos destructivos para resolver conflictos.
- No edites archivos generados manualmente.
- Los comentarios explican por qué existe una decisión no obvia, no traducen el código línea por línea.
- Actualiza documentación junto con el comportamiento, no después como una tarea opcional.

## Definition of Done

Una tarea está terminada cuando:

- cumple los requisitos y escenarios de aceptación vinculados;
- no amplía silenciosamente el alcance;
- typecheck, lint, pruebas relevantes y build pasan;
- estados loading, empty, error y success fueron considerados cuando corresponda;
- se verificaron teclado, responsive y movimiento reducido para cambios de interfaz;
- no existen logs, mocks, flags o texto provisional accidentales;
- documentación y decisiones están actualizadas;
- el resumen final indica qué cambió, cómo se verificó y qué riesgo permanece.

Si un check no puede ejecutarse, no lo declares exitoso: explica el bloqueo y entrega el comando exacto que falta ejecutar.

## Code Review Rules

Durante una revisión, prioriza en este orden:

1. Comportamiento incorrecto o pérdida de datos.
2. Seguridad y privacidad.
3. Incumplimiento de la especificación.
4. Accesibilidad.
5. Arquitectura y mantenibilidad.
6. Rendimiento con impacto observable.
7. Legibilidad.

Reporta hallazgos con archivo, ubicación, impacto y una forma segura de corregirlos. No conviertas preferencias personales de formato en defectos si las herramientas automáticas ya establecen el estándar.
