# Portfolio de Francisco Fuentes

[![Deploy](https://github.com/francisss-s/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/francisss-s/portfolio/actions/workflows/deploy.yml)
[![CodeQL](https://github.com/francisss-s/portfolio/actions/workflows/codeql.yml/badge.svg)](https://github.com/francisss-s/portfolio/actions/workflows/codeql.yml)

Portafolio profesional de Francisco Fuentes, Full Stack Engineer. Presenta proyectos, decisiones técnicas, trayectoria y formación mediante una experiencia multipágina accesible y prerenderizada.

**Sitio:** [francisss-s.github.io/portfolio](https://francisss-s.github.io/portfolio/)

## Contenido

| Ruta | Descripción |
| --- | --- |
| `/` | Presentación y selección de evidencia profesional |
| `/proyectos` | Índice de proyectos y casos de estudio |
| `/proyectos/:slug` | Detalle, decisiones y resultados de cada proyecto |
| `/trayectoria` | Experiencia, estudios y formación complementaria |
| `/perfil` | Perfil profesional y forma de trabajo |

## Stack

- React 19 y React Router 8 en Framework Mode.
- TypeScript estricto y Vite 8.
- CSS Modules y custom properties para el sistema visual.
- Vitest, Testing Library y jest-axe para pruebas.
- ESLint para análisis estático durante el pipeline principal.
- GitHub Pages para publicación estática.

## Desarrollo local

Requiere Node.js 24.20.x y pnpm 11.25.0.

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

El servidor de desarrollo queda disponible en la URL informada por React Router.

## Comandos

| Comando | Propósito |
| --- | --- |
| `pnpm run dev` | Iniciar el entorno de desarrollo |
| `pnpm run typecheck` | Generar tipos de rutas y comprobar TypeScript |
| `pnpm run lint` | Ejecutar ESLint sobre el repositorio |
| `pnpm run test` | Ejecutar las pruebas con Vitest |
| `pnpm run build` | Generar el artefacto estático de producción |

## Arquitectura

```text
app/
|- content/              Contenido profesional tipado
|- design-system/        Tokens y estilos globales
|- features/             Componentes y comportamiento del portafolio
|- routes/               Route Modules y metadatos por página
|- root.tsx              Documento y límite raíz de errores
`- routes.ts             Contrato de rutas públicas
```

Las rutas públicas conocidas se prerenderizan durante el build. En GitHub Actions, `BASE_PATH` se obtiene desde la configuración de Pages para publicar correctamente bajo `/portfolio/`; el desarrollo local continúa usando `/`.

## Calidad y seguridad

Cada cambio hacia `main` ejecuta typecheck, pruebas, ESLint, build y validación del artefacto antes del despliegue. CodeQL analiza JavaScript y TypeScript en un workflow independiente, mientras Dependabot revisa semanalmente las dependencias npm y las GitHub Actions.

Las decisiones de producto y diseño están documentadas en [DESIGN.md](./DESIGN.md), y las reglas de contribución asistida y calidad se encuentran en [AGENTS.md](./AGENTS.md).
