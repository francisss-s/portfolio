# Portfolio

Portafolio de Francisco Fuentes, construido con React Router 7 (Framework Mode), React, TypeScript, Vite y CSS Modules.

Requiere Node.js 20.19 o superior.

```bash
pnpm install
pnpm run dev
```

La aplicación usa prerender estático: cada ruta conocida genera HTML durante `pnpm run build`, sin requerir un servidor en producción.

El workflow de GitHub Pages compila con `BASE_PATH=/portfolio` para publicar correctamente en `https://francisss-s.github.io/portfolio/`. El desarrollo local continúa disponible desde `/`.

También están disponibles `pnpm run build`, `pnpm run lint`, `pnpm run test` y `pnpm run typecheck`.
