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
