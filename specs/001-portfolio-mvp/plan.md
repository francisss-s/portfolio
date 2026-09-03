# Plan técnico — Portafolio multipágina

**Estado:** Approved  
**Alcance:** `/`, `/proyectos`, `/proyectos/:slug`, `/trayectoria` y `/perfil`.

## Decisión

Mantener Route Modules delgados que componen la feature `portfolio-home`. La navegación compartida utilizará `Link` y `NavLink`; el contenido profesional seguirá en una única fuente TypeScript tipada. La home conservará presentación, evidencia, una selección de proyectos, resumen de trayectoria y contacto. Proyectos, trayectoria y perfil tendrán rutas propias con el mismo sistema visual y sin dependencias nuevas.

La salida continuará siendo prerender estático de React Router, con `BASE_PATH=/portfolio` en GitHub Actions para GitHub Pages.

GitHub Pages será la fuente del `base_path` mediante `actions/configure-pages`, evitando acoplar el workflow al nombre actual del repositorio. Pull requests ejecutarán instalación, typecheck, pruebas, lint, build y validación del artefacto sin publicar; solo `main` o una ejecución manual podrán subir y desplegar el artefacto.

El job de construcción conservará `ubuntu-latest` por sus recursos de CPU, mientras que el job de publicación utilizará `ubuntu-slim`: la publicación sólo consume el artefacto y llama a la API de Pages, por lo que no necesita una máquina virtual completa.

El framework se actualiza a React Router 8.3.1 junto con React 19.2.7 o superior. Desarrollo y CI usan Node 24.20.0 LTS, declarado también mediante `engines`; esta versión satisface el mínimo requerido por React Router 8. Los comportamientos antes controlados por future flags pasan a ser valores predeterminados y los flags se eliminan.

El toolchain de desarrollo se actualiza de forma coordinada a sus majors vigentes: ESLint 10, Vite 8, Vitest 4 y jsdom 30, junto con sus plugins y tipos compatibles. TypeScript se mantiene en 6.0.3, la versión más reciente dentro del rango soportado por `typescript-eslint` 8.69. Al ser dependencias de desarrollo, la migración no debe alterar el contenido ni el comportamiento observable del portafolio.

Hasta que `typescript-eslint` declare compatibilidad con TypeScript 7, el compilador estable seguirá bloqueando el pipeline principal. Un workflow experimental semanal y manual ejecutará TypeScript 7 de forma no bloqueante para detectar anticipadamente incompatibilidades sin aumentar la duración del despliegue habitual. Los tipos de Node deben seguir el major 24 usado en desarrollo y CI. Dependabot propondrá actualizaciones semanales de npm y GitHub Actions, sin fusión automática.

Dependabot puede actualizar el lockfile con pnpm 11 y conservará `@types/node` dentro del major del runtime. Sus parches y versiones menores se mantienen automatizados; un cambio de major de Node requiere una migración coordinada de runtime, tipos, CI y documentación.

CodeQL analizará JavaScript y TypeScript en un workflow independiente, con permisos mínimos y sin compilar ni instalar dependencias. Se ejecutará en cambios hacia `main`, semanalmente y bajo demanda; sus resultados complementan el lint y Dependabot sin bloquear ni alargar el despliegue de Pages.

La instalación con pnpm exigirá el runtime declarado, bloqueará fuentes transitivas distintas del registro y rechazará degradaciones en la evidencia de confianza de publicaciones del último año. Las versiones más antiguas quedan fuera de esta última regla porque su falta de procedencia firmada es habitual. Se conserva `allowBuilds` limitado a esbuild; pnpm 11 ya retrasa por defecto durante 24 horas la resolución de paquetes recién publicados. Los workflows fijan `pnpm/setup@v2.1.0`, primera versión que declara el input `require-lockfile`, y ejecutan la instalación explícitamente para evitar el lanzamiento interno mediante `shell: true`.

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
- TypeScript 7: comprobación aislada y no bloqueante mientras el parser de ESLint no lo soporte oficialmente.
- Cadena de suministro: una dependencia legítima que cambie de origen o reduzca su evidencia de publicación deberá revisarse explícitamente antes de instalarse.
- Análisis estático: CodeQL usa su suite predeterminada y `build-mode: none`, suficiente para este frontend JavaScript/TypeScript y sin duplicar el pipeline de construcción.
- Casos incompletos: las páginas de proyecto solo presentarán evidencia ya revisada, sin inventar arquitectura, estados o resultados.
- Datos pendientes: correo y CV se omiten mientras su valor sea `null`.

## Verificación

- Typecheck, lint, tests y build mediante scripts del repositorio.
- Revisión a 320 px, tablet y escritorio.
- Navegación solo con teclado y foco visible.
- Revisión con `prefers-reduced-motion`.
