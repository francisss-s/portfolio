# Plan técnico — Home

**Estado:** Approved  
**Alcance:** únicamente la ruta `/`, según `HOMEPAGE.md`.

## Decisión

Implementar la home como Route Module delgado que compone una feature `portfolio-home`. El contenido profesional vivirá en una fuente TypeScript tipada; los datos opcionales de correo y CV controlarán la presencia de sus acciones. La presentación usará CSS Modules y tokens globales, con SVG original para la constelación y sin dependencias de producción adicionales.

La salida continuará siendo prerender estático de React Router, con `BASE_PATH=/portfolio` en GitHub Actions para GitHub Pages.

## Archivos

- `app/routes/home.tsx`: metadata y composición de la feature.
- `app/content/portfolio.ts`: contenido profesional y enlaces configurables.
- `app/features/portfolio-home/`: secciones, navegación, emblemas y estilos.
- `app/design-system/tokens.css`: color, tipografía, espacio y movimiento.
- `app/root.tsx`: documento, fuentes, skip link y boundary raíz.

## Riesgos y mitigaciones

- Navegación activa sin JavaScript complejo: `aria-current` y anclas visibles; el estado de sección seguirá siendo comprensible sin observadores.
- Mapa ornamental: SVG decorativo oculto y lista HTML equivalente.
- GitHub Pages: solo anclas dentro de `/`, assets con base de repositorio y rutas prerenderizadas.
- Datos pendientes: correo y CV se omiten mientras su valor sea `null`.

## Verificación

- Typecheck, lint, tests y build mediante scripts del repositorio.
- Revisión a 320 px, tablet y escritorio.
- Navegación solo con teclado y foco visible.
- Revisión con `prefers-reduced-motion`.

El entorno actual no ofrece Node.js/npm; los checks se ejecutarán cuando el runtime esté disponible y cualquier bloqueo se reportará sin declararlos exitosos.
