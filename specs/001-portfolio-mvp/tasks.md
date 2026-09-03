# Tareas — Home

- [x] Registrar aprobación explícita y alcance exclusivo de home.
- [x] Modelar contenido profesional y datos opcionales.
- [x] Implementar navegación, hero y constelación.
- [x] Implementar evidencia, trabajo, capacidades, trayectoria, perfil, contacto y footer.
- [x] Implementar responsive, foco y movimiento reducido.
- [x] Añadir pruebas mínimas de comportamiento.
- [x] Ejecutar typecheck, lint, tests y build.
- [x] Registrar resultado y pendientes.

## Resultado de verificación

La estructura, el JSON de `package.json`, `git diff --check`, landmarks y ausencia de placeholders visibles fueron revisados. Typecheck, lint, tests y el build de producción con `BASE_PATH=/portfolio` pasan con pnpm. La revisión responsive cubre las composiciones CSS de 320–420 px, móvil/tablet hasta 760 px, tablet/notebook hasta 1050 px y escritorio; se recomienda una última revisión en dispositivos físicos antes del release público.

Datos pendientes: `EMAIL_CONFIRMED` y `RESUME_PUBLIC_PATH`; ambos permanecen como `null` y sus acciones no se renderizan.

## Navegación multipágina

- [x] Aprobar la separación de contenido y registrar las rutas públicas.
- [x] Extraer navegación y estructura visual compartida.
- [x] Reducir la home a resumen y evidencia destacada.
- [x] Implementar índice y detalle de proyectos con contenido verificable.
- [x] Implementar páginas de trayectoria y perfil.
- [x] Actualizar pruebas y verificar typecheck, lint, tests y build.

Typecheck, lint, pruebas y build pasan. Las siete URLs públicas se prerenderizan; los detalles de arquitectura y decisiones técnicas permanecen pendientes de revisión de contenido para no publicar afirmaciones no verificadas.

- [x] Activar y verificar los future flags estables de React Router v8 sobre la versión 7.18.3.
- [x] Migrar a React Router 8.3.1 y volver a verificar rutas, pruebas y prerender.

La migración a v8 pasa typecheck, lint, cinco pruebas y build. Las siete rutas y el fallback SPA continúan generándose mediante prerender, sin future flag warnings.

## Limpieza posterior

- [x] Retirar estilos residuales de la antigua home de una sola página.
- [x] Fijar `@testing-library/jest-dom` en la versión 6.9.1 recomendada por el propio paquete.
- [x] Verificar nuevamente dependencias, tipos, lint, pruebas y build.

La limpieza reduce el CSS de producción de 23.81 kB a 22.63 kB. Typecheck, lint, cinco pruebas y build pasan, y las siete rutas continúan prerenderizadas.

- [x] Actualizar coordinadamente el toolchain de desarrollo a sus majors vigentes.
- [x] Resolver incompatibilidades de configuración y verificar nuevamente todos los checks.

Toolchain verificado: ESLint 10.9.1, Vite 8.2.2, Vitest 4.1.11, jsdom 30.0.1 y TypeScript 6.0.3. `pnpm peers check`, typecheck, lint, cinco pruebas y build pasan. El mock de `IntersectionObserver`, obsoleto desde la navegación multipágina, fue eliminado.

## Caso documental

- [x] Incorporar hechos confirmados, alcance personal y restricciones de confidencialidad.
- [x] Publicar arquitectura conceptual, decisiones, validación, resultados y retrospectiva.
- [x] Sustituir tiempos aproximados de despliegue por una formulación conservadora superior al 50 %.
- [x] Verificar tipos, lint, pruebas y build del caso de estudio.

El caso documental pasa typecheck, lint, cinco pruebas y build. La ruta prerenderizada conserva únicamente información confirmada o formulaciones conservadoras y excluye detalles confidenciales y cifras pendientes de verificar.

- [x] Reducir detalles operacionales sensibles y retirar métricas recordadas sin evidencia conservada.
- [x] Corregir y verificar el prerender con `BASE_PATH=/portfolio` bajo React Router 8.

React Router 8 requiere normalizar el basename con barra final. El build de Pages genera el árbol estático bajo `build/client/portfolio`; el workflow promueve todo ese árbol a la raíz del artefacto antes de publicarlo.

- [x] Alinear desarrollo, `package.json` y GitHub Actions con Node 24.20.0 LTS.
- [x] Derivar el base path desde la configuración real de GitHub Pages.
- [x] Ejecutar el pipeline de verificación en pull requests sin desplegar.
- [x] Validar todas las rutas prerenderizadas antes de subir el artefacto.
- [x] Migrar al sucesor `pnpm/setup@v2` para instalar pnpm y Node 24 sin compatibilidad forzada.

## Formación complementaria

- [x] Modelar formación seleccionada, estudios activos e idioma en la fuente tipada.
- [x] Incorporar la selección a `/trayectoria` sin duplicar módulos ni credenciales pendientes.
- [x] Verificar tipos, lint, pruebas y build.

La trayectoria ampliada pasa typecheck, lint, seis pruebas y build con `BASE_PATH=/portfolio`. Typecheck y build deben ejecutarse secuencialmente porque ambos regeneran `.react-router/types`.

## Preparación para TypeScript 7

- [x] Alinear `@types/node` con Node 24 LTS.
- [x] Añadir una comprobación experimental semanal y manual con TypeScript 7.
- [x] Configurar actualizaciones semanales para npm y GitHub Actions.
- [x] Corregir la versión de React Router documentada en el README.
- [x] Verificar dependencias, tipos, lint, pruebas y build.

TypeScript 6.0.3 y el compilador nativo TypeScript 7.0.2 aceptan el proyecto. El chequeo experimental permanece separado y no bloqueante hasta que `typescript-eslint` declare soporte oficial. Typecheck, lint, seis pruebas y build pasan con `@types/node` alineado a Node 24.

## Runner de despliegue

- [x] Confirmar el origen externo del warning `DEP0040` de `actions/deploy-pages@v5`.
- [x] Mover únicamente la publicación ligera a `ubuntu-slim`.
- [x] Conservar la construcción y sus controles en `ubuntu-latest`.

## Seguridad de pnpm

- [x] Exigir el rango de Node declarado durante la instalación.
- [x] Bloquear dependencias transitivas desde fuentes exóticas.
- [x] Impedir degradaciones de confianza entre publicaciones recientes.
- [x] Corregir el requisito de Node documentado y verificar la instalación.

La instalación congelada valida 322 entradas contra las políticas de suministro. `semver@6.3.1` requirió aplicar la excepción temporal general recomendada para publicaciones de más de un año, anteriores al uso habitual de procedencia firmada. Typecheck, lint, seis pruebas y build pasan sin modificar el lockfile.

- [x] Fijar `pnpm/setup@v2.1.0` para que `require-lockfile` sea un input reconocido.
- [x] Ejecutar `pnpm install` como step explícito para evitar el warning interno `DEP0190`.
- [x] Verificar Dependabot con pnpm 11 y bloquear upgrades mayores desalineados de `@types/node`.

## Análisis de seguridad

- [x] Añadir CodeQL v4 para JavaScript y TypeScript con permisos mínimos.
- [x] Ejecutar el análisis en cambios de `main`, semanalmente y bajo demanda.
- [x] Mantener CodeQL separado del build y despliegue de GitHub Pages.
