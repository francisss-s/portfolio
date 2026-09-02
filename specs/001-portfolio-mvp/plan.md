# Plan técnico — Portafolio multipágina

**Estado:** Approved  
**Alcance:** `/`, `/proyectos`, `/proyectos/:slug`, `/trayectoria` y `/perfil`.

## Decisión

Mantener Route Modules delgados que componen la feature `portfolio-home`. La navegación compartida utilizará `Link` y `NavLink`; el contenido profesional seguirá en una única fuente TypeScript tipada. La home conservará presentación, evidencia, una selección de proyectos, resumen de trayectoria y contacto. Proyectos, trayectoria y perfil tendrán rutas propias con el mismo sistema visual y sin dependencias nuevas.

La salida continuará siendo prerender estático de React Router, con `BASE_PATH=/portfolio` en GitHub Actions para GitHub Pages.

GitHub Pages será la fuente del `base_path` mediante `actions/configure-pages`, evitando acoplar el workflow al nombre actual del repositorio. Pull requests ejecutarán instalación, typecheck, pruebas, lint, build y validación del artefacto sin publicar; solo `main` o una ejecución manual podrán subir y desplegar el artefacto.

El framework se actualiza a React Router 8.3.1 junto con React 19.2.7 o superior. Desarrollo y CI usan Node 24.20.0 LTS, declarado también mediante `engines`; esta versión satisface el mínimo requerido por React Router 8. Los comportamientos antes controlados por future flags pasan a ser valores predeterminados y los flags se eliminan.

El toolchain de desarrollo se actualiza de forma coordinada a sus majors vigentes: ESLint 10, Vite 8, Vitest 4 y jsdom 30, junto con sus plugins y tipos compatibles. TypeScript se mantiene en 6.0.3, la versión más reciente dentro del rango soportado por `typescript-eslint` 8.69. Al ser dependencias de desarrollo, la migración no debe alterar el contenido ni el comportamiento observable del portafolio.

## Archivos

- `app/routes/*.tsx`: metadata y composición de cada página.
- `app/routes.ts`: contrato de rutas públicas en español.
- `app/content/portfolio.ts`: contenido profesional y enlaces configurables.
- `app/features/portfolio-home/`: secciones, navegación, emblemas y estilos.
- `app/design-system/tokens.css`: color, tipografía, espacio y movimiento.
- `app/root.tsx`: documento, fuentes, skip link y boundary raíz.

## Riesgos y mitigaciones

- Navegación activa: `NavLink` expondrá `aria-current` en rutas reales.
- Mapa ornamental: SVG decorativo oculto y lista HTML equivalente.
- GitHub Pages: rutas declaradas y prerenderizadas bajo el `BASE_PATH` configurado.
- Casos incompletos: las páginas de proyecto solo presentarán evidencia ya revisada, sin inventar arquitectura, estados o resultados.
- Datos pendientes: correo y CV se omiten mientras su valor sea `null`.

## Verificación

- Typecheck, lint, tests y build mediante scripts del repositorio.
- Revisión a 320 px, tablet y escritorio.
- Navegación solo con teclado y foco visible.
- Revisión con `prefers-reduced-motion`.

El entorno actual no ofrece Node.js/npm; los checks se ejecutarán cuando el runtime esté disponible y cualquier bloqueo se reportará sin declararlos exitosos.
