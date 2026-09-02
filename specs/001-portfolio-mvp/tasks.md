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
