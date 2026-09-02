# Encargo para Codex - Home del portafolio de Francisco Fuentes

Quiero que diseñes e implementes la página principal de mi portafolio profesional. Este encargo autoriza la implementación de la **home solamente**; no construyas todavía las páginas secundarias.

Antes de modificar código, lee completamente:

1. `AGENTS.md` para las reglas de arquitectura, calidad y trabajo.
2. `DESIGN.md` para la identidad visual y los guardrails de diseño.
3. `specs/001-portfolio-mvp/spec.md` para el alcance general.

Si la especificación continúa como `Draft`, considera este mensaje como aprobación explícita para implementar únicamente el alcance de home definido aquí. Registra esa decisión, pero no des por aprobadas las demás páginas ni decisiones abiertas del MVP.

## 1. Objetivo

La página debe comunicar en menos de 30 segundos:

- quién es Francisco;
- qué tipo de ingeniero es;
- en qué tecnologías y problemas tiene experiencia real;
- qué sistemas relevantes ha construido;
- cómo revisar su CV, GitHub y LinkedIn;
- por qué vale la pena conversar con él para un cargo Backend o Full Stack.

Para una visita más técnica, la misma página debe mostrar evidencia de arquitectura, cloud, lógica de negocio, optimización y capacidad end-to-end.

No quiero una home genérica de desarrollador. La interfaz debe sentirse propia incluso si se elimina mi nombre.

## 2. Posicionamiento profesional

Usa este posicionamiento como fuente de verdad:

```text
Francisco Fuentes
Full Stack Engineer
TypeScript / Node.js + Python
```

La historia profesional principal es:

> Ingeniero Civil en Informática con más de tres años de experiencia transformando procesos operacionales complejos en plataformas web, APIs, modelos de datos y soluciones cloud. Su mayor fortaleza está en backend y sistemas de negocio, pero puede participar de punta a punta: comprensión del problema, frontend, backend, datos, pruebas, documentación y despliegue.

No presentarlo como frontend puro, diseñador UI, especialista DevOps ni experto en inteligencia artificial. Tampoco utilizar lenguaje de Junior. El tono correcto es **Full Stack Engineer con foco backend, cloud y soluciones de negocio**, con profundidad Semi Senior defendible.

## 3. Audiencias

### Reclutador

Debe comprender rápidamente el perfil, experiencia, foco y disponibilidad de evidencia profesional.

### Tech Lead o entrevistador técnico

Debe encontrar decisiones, sistemas reales, responsabilidades, stack utilizado y resultados concretos.

El diseño debe funcionar para ambas audiencias sin crear dos páginas separadas.

## 4. Dirección creativa

El concepto interno se llama **Constelación de Sistemas**.

La metáfora es:

> Cada sistema es un mundo con reglas propias. La ingeniería consiste en comprender esas reglas, construir una solución y conectarla con el resto.

La inspiración emocional viene de las ideas de viaje, conexión, luz, oscuridad y mundos diferentes presentes en Kingdom Hearts. La interfaz puede aprender de Persona que composición, navegación y movimiento deben compartir una dirección artística. Sin embargo, el resultado no debe copiar ni parecer una recreación de ninguna franquicia.

### Sensación buscada

- Técnica.
- Personal.
- Precisa.
- Fantástica, pero sobria.
- Expresiva, pero legible.
- Original, no una plantilla de IA.

### Prohibiciones

- No usar personajes, nombres, música, logos, tipografías ni assets oficiales de Kingdom Hearts, Persona o Disney.
- No usar Keyblades, coronas o corazones como atajo visual.
- No utilizar estética hacker, terminal Matrix o cyberpunk genérico.
- No usar un bento grid como estructura principal.
- No crear una pared de cards redondeadas.
- No usar glassmorphism, blobs, mesh gradients o glow sin función.
- No usar barras o porcentajes de habilidades.
- No mostrar una nube con veinte logos tecnológicos.
- No usar el texto “Hola, soy Francisco 👋”.
- No usar “apasionado por la tecnología”, “creo experiencias digitales” ni frases similares.
- No agregar música, video de fondo, cursor personalizado o una intro bloqueante.
- No inventar proyectos, demos, clientes, usuarios, métricas ni testimonios.

## 5. Estructura obligatoria de la home

La home debe tener estas regiones, en este orden:

1. Navegación.
2. Hero con identidad y mapa visual.
3. Evidencia rápida.
4. Trabajo seleccionado.
5. Capacidades por problema.
6. Trayectoria resumida.
7. Forma de trabajar / perfil personal.
8. Contacto.
9. Footer mínimo.

No agregues blog, servicios, testimonios, newsletter, formulario complejo, preguntas frecuentes ni secciones de relleno.

## 6. Navegación

Usa estas opciones:

```text
TRABAJO
CAPACIDADES
TRAYECTORIA
PERFIL
CONTACTO
```

En escritorio puede presentarse como un panel de comandos vertical o lateral original. Debe existir también una forma convencional de identificar el nombre o emblema y abrir el CV.

En móvil debe transformarse en una cabecera compacta con un menú accesible. No comprimas el panel de escritorio hasta hacerlo ilegible.

Requisitos:

- navegación mediante anchors de la misma página;
- sección activa perceptible por más de un recurso visual;
- foco de teclado visible;
- botón o enlace de CV disponible sin atravesar toda la página;
- enlaces internos semánticos, no `div` con `onClick`.

## 7. Hero

### Copy principal

Usa este contenido como base. Puedes ajustar cortes de línea, pero no cambiar su sentido ni inflar el perfil.

```text
FRANCISCO FUENTES

Full Stack Engineer
TypeScript / Node.js + Python

Convierto procesos complejos en sistemas web claros,
mantenibles y listos para producción.

Backend · Cloud · Product Engineering
```

### CTA

CTA primario:

```text
Explorar mi trabajo
```

CTA secundario:

```text
Ver trayectoria
```

Accesos adicionales:

- `CV` usando una ruta o archivo configurable;
- `GitHub`: `https://github.com/francisss-s`;
- `LinkedIn`: `https://www.linkedin.com/in/francisco-alejandro-fuentes-soto/`.

No inventes la URL del CV ni el correo. Centraliza ambos como datos pendientes claramente identificados en el código, sin exponer texto `TODO` en la interfaz.

### Composición visual

La información debe ser dominante. Acompáñala con un mapa abstracto formado por:

- nodos;
- trayectorias;
- órbitas parciales;
- pequeños emblemas propios;
- etiquetas técnicas breves.

El mapa no representa planetas conocidos. Sus nodos pueden anticipar las áreas `Sistemas`, `Datos`, `Cloud` y `Optimización`.

Debe existir como decoración e interacción progresiva, pero nunca ser la única forma de comprender o navegar la página. Usa HTML y SVG originales para geometría funcional. Mantén una alternativa textual para tecnología asistiva.

### Restricciones del primer viewport

- Nombre, rol, foco y CTA deben aparecer sin scroll en un notebook normal.
- Debe insinuarse que existe contenido debajo.
- No convertir el hero en una pantalla vacía de 100vh con texto enorme.
- El mapa no puede desplazar la propuesta profesional a un lugar secundario.

## 8. Evidencia rápida

Después del hero, incluye una banda editorial compacta con tres pruebas. No deben parecer contadores de marketing.

### Prueba 1

```text
3+ años
Construyendo software para procesos reales de negocio.
```

### Prueba 2

```text
Producción
APIs, modelos de datos, procesamiento asíncrono y despliegues cloud.
```

### Prueba 3

```text
Google Cloud Certified
Associate Cloud Engineer · 2026
```

El texto debe ser sobrio. No animar los números ni sumar cifras inventadas.

## 9. Trabajo seleccionado

El heading debe ser:

```text
Trabajo seleccionado
Sistemas reales, decisiones reales.
```

No llamar a esta sección “mis proyectos geniales”. Mostrar tres casos profesionales verificados. Cada caso debe tener composición propia, pero compartir jerarquía, tipografía y sistema de interacción.

Si no existe una URL pública real, no renderizar botones `Live demo` o `GitHub`. Puede mostrarse como caso profesional con información suficiente dentro de la home. No crear enlaces deshabilitados.

### Caso 01 - Modernización documental

**Etiqueta:** `PRODUCCIÓN · BACKEND & CLOUD`

**Título:**

```text
Modernización de un sistema gestor documental
```

**Resumen:**

```text
Migración desde Firebase, Firestore y Google Drive hacia una arquitectura con NestJS, MongoDB y Google Cloud Storage, conservando estructuras documentales y mejorando la operación de archivos a gran escala.
```

**Aportes que pueden mostrarse:**

- desarrollo principal del backend de la migración;
- modelado de datos y servicios para documentos, correspondencia y adjuntos;
- procesamiento asíncrono con Cloud Run Jobs y Cloud Tasks;
- generación externa de ZIP y Excel para evitar sobrecarga del navegador y backend principal;
- pruebas unitarias;
- documentación Swagger;
- optimización de imágenes, dependencias y pipelines de CI/CD;
- reducción de despliegues desde aproximadamente 4–5 minutos a 1–1,5 minutos, con ejecuciones puntuales cercanas a 40 segundos.

**Stack agrupado:**

```text
BACKEND       TypeScript · NestJS
DATA          MongoDB
CLOUD         Cloud Run · Cloud Tasks · Cloud Storage
DELIVERY      Docker · GitLab CI/CD
```

No mostrar nombres de clientes ni información interna confidencial.

### Caso 02 - Wing Factory

**Etiqueta:** `SAAS B2B · FULL STACK`

**Título:**

```text
MRP y simulación para planificación productiva
```

**Resumen:**

```text
Solución para representar recetas, materias primas, capacidades y planes de producción, proyectar necesidades de inventario y anticipar quiebres de stock en procesos industriales.
```

**Aportes que pueden mostrarse:**

- rol técnico principal y desarrollo full stack;
- levantamiento de requerimientos y coordinación técnica con cliente y equipo;
- gestor de recetas y subrecetas;
- árboles de composición para trazabilidad de componentes;
- simulación productiva por etapas y horizontes de tiempo;
- módulo MRP, inventario y reportes;
- lógica de negocio y transacciones en Oracle PL/SQL;
- apoyo de Python y Pyomo para modelamiento y optimización;
- reducción de dependencia de planillas y procesos manuales.

**Stack agrupado:**

```text
PRODUCT       Full Stack · Requerimientos · Reportes
BACKEND       Oracle PL/SQL · Python
MODELING      Pyomo
DOMAIN        MRP · Inventario · Simulación
```

No afirmar que Francisco fue jefe formal del equipo. Puede indicarse liderazgo técnico funcional, coordinación y apoyo a desarrolladores junior.

### Caso 03 - Optimización logística

**Etiqueta:** `PYTHON · OPTIMIZACIÓN`

**Título:**

```text
Optimización de rutas con restricciones reales
```

**Resumen:**

```text
Servicio y prototipo avanzado para problemas de última milla, considerando puntos de recolección, capacidad de vehículos, restricciones de recorrido y eficiencia logística.
```

**Aportes que pueden mostrarse:**

- modelamiento de problemas VRP;
- uso de Python y OR-Tools;
- integración con OSRM y OpenStreetMap;
- contenerización de servicios geográficos con Docker;
- traducción de restricciones operacionales a un modelo resoluble.

**Stack agrupado:**

```text
LANGUAGE      Python
OPTIMIZATION  OR-Tools · VRP
MAPS          OSRM · OpenStreetMap
INFRA         Docker
```

No inventar porcentajes de reducción de distancia ni ahorro si no existe una medición verificable.

## 10. Capacidades

El objetivo no es enumerar herramientas; es explicar qué puede construir Francisco.

Heading:

```text
Capacidades
Tecnología organizada por responsabilidad.
```

Usa cuatro grupos:

### Sistemas backend

```text
APIs, servicios modulares, lógica de negocio, procesamiento asíncrono, documentación y manejo de errores.
```

Tecnologías visibles: `Node.js`, `TypeScript`, `NestJS`, `REST`, `Swagger`.

### Producto full stack

```text
Interfaces conectadas con necesidades operacionales, formularios, estados de producto e integración frontend–backend.
```

Tecnologías visibles: `React`, `React Router`, `TypeScript`, `HTML`, `CSS`.

### Datos y optimización

```text
Modelado, consultas, transacciones, estructuras documentales y problemas con restricciones.
```

Tecnologías visibles: `MongoDB`, `Oracle PL/SQL`, `PostgreSQL`, `Python`, `OR-Tools`, `Pyomo`.

No presentar PostgreSQL como la tecnología laboral más fuerte. Puede aparecer como capacidad en desarrollo apoyada por experiencia relacional transferible.

### Cloud y entrega

```text
Contenedores, pipelines, almacenamiento, ejecución de jobs y despliegues mantenibles.
```

Tecnologías visibles: `GCP`, `Cloud Run`, `Cloud Tasks`, `Cloud Storage`, `Docker`, `GitLab CI/CD`.

No usar iconos grandes de cada tecnología. Las etiquetas deben apoyar el texto, no reemplazarlo.

## 11. Trayectoria resumida

Heading:

```text
Trayectoria
Del problema operacional al sistema en producción.
```

### CyD Tecnología

```text
Backend Developer
Diciembre 2025 — Mayo 2026

Modernización de plataformas documentales, arquitectura backend, procesos asíncronos en GCP, pruebas, documentación y mejora de despliegues.
```

### West Ingeniería

```text
Ingeniero de Software
Noviembre 2022 — Noviembre 2025

Desarrollo de soluciones SaaS B2B para planificación productiva, MRP, logística, simulación y optimización, con participación full stack y coordinación técnica.
```

### Formación

```text
Ingeniero Civil en Informática
Universidad Austral de Chile
```

### Certificación

```text
Google Cloud Certified — Associate Cloud Engineer
2026
```

No copiar el CV completo. La sección debe permitir entender progresión, dominios y responsabilidades.

## 12. Perfil y forma de trabajar

Heading:

```text
Cómo trabajo
Entender primero. Diseñar con criterio. Entregar algo útil.
```

Usa este párrafo como base:

> Me interesan especialmente los problemas donde primero hay que comprender un proceso y después transformarlo en una solución concreta. Trabajo mejor con objetivos y restricciones claras, autonomía para ejecutar y espacio para proponer mejoras. No entiendo la arquitectura como una colección de patrones: intento elegir la solución más simple que proteja mantenibilidad, operación y evolución del producto.

Complementa con tres principios breves:

### Comprender el sistema

```text
Antes de programar, identifico usuarios, reglas, restricciones y puntos de falla.
```

### Arquitectura proporcional

```text
No todo necesita microservicios. La complejidad debe ganarse con una necesidad real.
```

### Responsabilidad completa

```text
Una entrega incluye funcionamiento, riesgos, pruebas, documentación y próximos pasos.
```

No presentar a Francisco como gurú, arquitecto principal o Tech Lead formal.

## 13. Contacto

Heading:

```text
Construyamos algo que resuelva un problema real.
```

Texto:

```text
Disponible para conversar sobre oportunidades Backend y Full Stack donde pueda aportar en sistemas, datos, cloud y evolución de producto.
```

Acciones:

- correo, solo cuando exista una dirección confirmada;
- LinkedIn;
- GitHub;
- descargar CV, solo cuando exista una ruta confirmada.

No crear un formulario durante esta tarea.

## 14. Footer

Debe ser mínimo e incluir:

- `Francisco Fuentes`;
- `Full Stack Engineer`;
- año actual calculado o texto sin fecha;
- GitHub y LinkedIn;
- un emblema original simple.

No agregar navegación duplicada extensa ni frases de plantilla.

## 15. Sistema visual inicial

Usa los tokens de `DESIGN.md`. Como referencia:

```css
--canvas: #050b14;
--surface: #0b1726;
--surface-raised: #102238;
--ink: #f2f6fb;
--muted: #a7b8ca;
--line: #2a4158;
--star: #7dccff;
--metal: #b9c7d5;
--gold: #d2b46c;
```

### Tipografía

- `Sora` para display, nombres de secciones y comandos.
- `Source Sans 3` para lectura.
- `IBM Plex Mono` para metadatos, tecnologías y numeración.
- Si todavía no existen fuentes autoalojadas, usa fallbacks seguros y deja la integración preparada sin bloquear el render.

### Geometría

- Paneles con esquinas recortadas y bordes parciales.
- Líneas, nodos y órbitas con significado.
- Una sola composición ornamental dominante por viewport.
- Bordes finos y contraste claro.
- Radios pequeños; evitar pills y superficies redondeadas repetitivas.
- Cada caso seleccionado debe tener un motivo propio: documentos, árbol productivo y rutas.

## 16. Movimiento

- Hover y foco: 120–160 ms.
- Selección: 160–220 ms.
- Apertura o expansión: 220–320 ms.
- Viaje del mapa: máximo 480–700 ms y solo si no retrasa contenido.
- Movimiento ambiental: muy lento y casi imperceptible.
- No usar `transition: all`.
- Con `prefers-reduced-motion`, eliminar viajes, parallax y movimiento continuo.
- Nada esencial debe esperar una animación para aparecer.

## 17. Responsive

### Escritorio

- Hero dividido entre propuesta profesional y constelación.
- Navegación lateral o panel de comandos.
- Casos seleccionados con composiciones asimétricas.

### Tablet

- Menor profundidad visual y menos rutas simultáneas.
- Mantener jerarquía y motivos de cada caso.

### Móvil

- Flujo vertical.
- Navegación compacta.
- El mapa se convierte en un resumen visual o lista de nodos, no en una miniatura ilegible.
- Ningún scroll horizontal accidental desde 320 px.
- Targets táctiles mínimos de 44 × 44 px.
- Sin parallax ni animaciones costosas.

## 18. Accesibilidad

- Objetivo WCAG 2.2 AA.
- Añadir skip link al contenido.
- Usar landmarks y headings en orden lógico.
- Toda interacción debe funcionar con teclado.
- Foco siempre visible.
- No comunicar estado únicamente mediante color o animación.
- SVG decorativos ocultos para tecnología asistiva.
- Mapa con alternativa textual equivalente.
- Texto principal de al menos 16 px.
- Probar ampliación de texto al 200 %.

## 19. Implementación con React Router

Usa **React Router en Framework Mode** y TypeScript estricto.

Para esta tarea:

- configura la home como index route en `app/routes.ts`;
- crea el Route Module de home en `app/routes/home.tsx` o conserva la convención equivalente ya existente;
- usa los tipos generados de React Router;
- mantén el Route Module delgado y compón secciones desde una feature de portafolio si el tamaño lo justifica;
- almacena contenido profesional en una fuente tipada, no duplicado dentro de varios componentes;
- usa variables CSS y CSS Modules o el sistema de estilos ya aprobado;
- no agregues Redux, Zustand, React Query ni otra capa de estado;
- no uses `useEffect` para derivar estado o cargar contenido estático;
- usa links y anchors semánticos;
- prerenderiza la home si la configuración actual lo permite;
- no agregues backend, base de datos, autenticación ni CMS;
- no instales una librería de animación si CSS cubre las interacciones necesarias;
- no incorpores dependencias de producción sin justificarlo.

Si el repositorio aún no está inicializado, utiliza la plantilla oficial de React Router Framework Mode. No reemplaces un proyecto existente ni cambies su package manager.

## 20. Modelo de contenido recomendado

Define al menos estas entidades o equivalentes:

```ts
type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  technologies: string[];
};

type SelectedWork = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  contributions: string[];
  stack: Record<string, string[]>;
  metric?: {
    label: string;
    before: string;
    after: string;
  };
  href?: string;
};

type Capability = {
  title: string;
  description: string;
  technologies: string[];
};
```

La presencia de `href` debe controlar si se muestra o no una acción. No renderices botones sin destino.

## 21. Estados y comportamiento

Aunque la home sea principalmente estática, considera:

- enlaces externos inválidos o no configurados;
- contenido sin URL pública;
- navegación activa;
- foco y hover;
- movimiento reducido;
- error boundary raíz;
- 404 del framework, aunque su diseño completo pueda quedar fuera de esta tarea.

No muestres esqueletos ni spinners para contenido local disponible durante el build.

## 22. Pruebas mínimas

- Render de nombre, rol y propuesta profesional.
- CTA primario lleva a `#trabajo`.
- Navegación por anchors funciona.
- GitHub y LinkedIn usan las URLs correctas.
- No se renderizan CTA de correo o CV cuando sus datos no están configurados.
- Los tres casos profesionales aparecen con su estado y stack.
- Navegación y controles son alcanzables con teclado.
- No existen violaciones básicas de accesibilidad automatizable.
- Layout no produce overflow horizontal en móvil.
- `prefers-reduced-motion` desactiva movimiento no esencial.
- Typecheck, lint, tests y build pasan.

## 23. Definition of Done

La tarea termina cuando:

- la home está completamente implementada y no conserva contenido del starter;
- comunica nombre, rol, foco, evidencia y CTA en el primer viewport;
- contiene exactamente las secciones solicitadas y ninguna sección de relleno;
- utiliza contenido profesional verificable;
- no muestra proyectos planificados como terminados;
- respeta la identidad Constelación de Sistemas sin copiar una franquicia;
- funciona en móvil, tablet y escritorio;
- funciona con teclado y movimiento reducido;
- no contiene enlaces muertos, placeholders visibles ni datos personales inventados;
- las pruebas relevantes y el build pasan;
- se actualizan la especificación, las decisiones y la documentación afectada;
- el resumen final explica qué se construyó, cómo se verificó y qué datos siguen pendientes.

## 24. Datos que deben quedar pendientes si no están confirmados

No interrumpas la implementación por estos datos. Centralízalos de forma segura y omite sus CTA mientras no estén disponibles:

```text
EMAIL_CONFIRMED
RESUME_PUBLIC_PATH
```

No uses el correo extraído del PDF sin confirmación, porque podría contener un error tipográfico.

## 25. Criterio final de revisión

Antes de cerrar, responde internamente estas preguntas:

1. ¿Una persona entiende qué hace Francisco sin conocer sus tecnologías?
2. ¿Cada afirmación importante tiene respaldo en una experiencia real?
3. ¿La página muestra Full Stack sin ocultar la fortaleza backend/cloud?
4. ¿El diseño seguiría siendo reconocible si quitáramos el nombre?
5. ¿Hay algún elemento que solo exista para parecerse a un videojuego?
6. ¿La decoración dificulta lectura, responsive o rendimiento?
7. ¿Se creó una abstracción arquitectónica sin una necesidad real?

Si la respuesta a las preguntas 5, 6 o 7 es sí, simplifica antes de entregar.
