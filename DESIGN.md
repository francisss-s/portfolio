# DESIGN.md - Portafolio de Francisco Fuentes

> Estado: dirección de diseño aprobada para exploración visual  
> Versión: 0.2  
> Idioma del documento: español  
> Alcance: identidad, experiencia, contenido y criterios de implementación

## 1. Propósito

Este documento define la dirección artística y funcional del portafolio profesional de Francisco Fuentes. Su función es mantener una identidad coherente durante el diseño y la implementación, y evitar que el sitio termine pareciendo una plantilla genérica de desarrollador.

El portafolio debe demostrar una idea central:

> Francisco puede comprender un problema, diseñar una solución full stack, construirla y llevarla hasta producción.

La apariencia puede ser memorable, pero nunca debe competir con la evidencia técnica. El sitio debe funcionar en dos velocidades:

- En 30 segundos, un reclutador debe comprender el perfil, el foco tecnológico, la experiencia y los proyectos principales.
- En 5 a 10 minutos, una persona técnica debe encontrar arquitectura, decisiones, pruebas, resultados, límites y retrospectivas.

## 2. Posicionamiento

### Identidad profesional principal

**Francisco Fuentes - Full Stack Engineer**  
**TypeScript / Node.js + Python**

El foco visible es full stack con orientación backend. React/Next.js, Node.js/NestJS y Python/FastAPI forman el núcleo; bases de datos, cloud, Docker y CI/CD muestran la capacidad de entregar sistemas completos.

### Propuesta de valor

> Construyo aplicaciones web y sistemas backend que conectan procesos, datos y personas, desde la interfaz hasta producción.

### Evidencia que debe priorizarse

1. Experiencia profesional real.
2. Proyectos desplegados y utilizables.
3. Decisiones técnicas explicadas con sus trade-offs.
4. Resultados medibles o verificables.
5. Código, pruebas, documentación e infraestructura.

Una lista extensa de tecnologías nunca sustituye esta evidencia.

## 3. Concepto creativo

### Nombre interno: Constelación de Sistemas

La metáfora central es:

> Cada sistema es un mundo con reglas propias. La ingeniería consiste en entender esas reglas, construir una solución y conectarla con el resto.

El visitante explora un mapa abstracto formado por nodos, trayectorias, órbitas y emblemas. Cada proyecto es un destino con identidad propia; la trayectoria profesional es el camino que conecta esos destinos; las tecnologías son herramientas adquiridas durante el recorrido.

La inspiración emocional viene de Kingdom Hearts: viaje, conexión, luz y oscuridad, mundos distintos y vitrales simbólicos. La enseñanza de Persona se aplica al proceso: interfaz, tipografía, composición y movimiento deben obedecer un concepto común. No se copiará la apariencia de ninguna franquicia.

### Qué debería sentir el visitante

- Curiosidad: hay una composición que invita a explorar.
- Claridad: en pocos segundos se entiende quién es Francisco y qué construye.
- Precisión: cada detalle parece intencional, no decorativo.
- Madurez: la referencia a videojuegos es sutil y no convierte el sitio en una fanpage.
- Confianza técnica: detrás de la estética hay proyectos reales y decisiones bien explicadas.

### Atributos de marca

| Es | No es |
| --- | --- |
| Personal | Fanpage |
| Técnico | Frío o corporativo |
| Fantástico y sobrio | Infantil |
| Expresivo | Caótico |
| Cinemático en momentos puntuales | Lento o teatral |
| Original | Una imitación de Kingdom Hearts o Persona |

## 4. Principios de diseño

### 4.1 Evidencia antes que decoración

Cada sección debe responder al menos una pregunta profesional: qué construyó, por qué lo hizo, cómo funciona, qué resultado obtuvo o qué aprendió.

### 4.2 Inspiración, no reproducción

No se usarán personajes, logotipos, nombres de mundos, música, interfaces, tipografías ni recursos oficiales de Kingdom Hearts o Persona. Todos los emblemas, ornamentos e ilustraciones serán originales.

### 4.3 Un sistema compartido, composiciones distintas

Los proyectos no serán seis tarjetas idénticas. Compartirán grilla, tipografía, controles y jerarquía, pero cada proyecto tendrá un emblema, un color de acento y una composición visual propia.

### 4.4 Movimiento con significado

Seleccionar, abrir, recorrer y cambiar de contexto son acciones diferentes y deben sentirse diferentes. La animación debe explicar estado y jerarquía; no debe existir solo para impresionar.

### 4.5 Accesibilidad como parte de la identidad

La versión accesible no es una versión empobrecida. Teclado, foco, contraste, lectura lineal y movimiento reducido deben recibir el mismo cuidado visual que el estado normal.

### 4.6 Honestidad de producto

Un proyecto planificado no se presenta como terminado. Solo podrá aparecer como proyecto destacado cuando tenga contenido verificable, repositorio ordenado y una demo estable o una explicación explícita de por qué no puede publicarse.

## 5. Objetivos y métricas de éxito

### Objetivo para reclutamiento

Sin hacer scroll o durante el primer bloque visible deben aparecer:

- nombre;
- rol;
- especialización;
- acceso a proyectos;
- acceso al CV;
- acceso a GitHub o LinkedIn.

### Objetivo técnico

Cada caso de estudio destacado debe incluir:

- problema;
- rol y alcance;
- arquitectura;
- decisiones y alternativas descartadas;
- desafío técnico principal;
- estrategia de pruebas;
- infraestructura y despliegue;
- resultado;
- limitaciones y siguiente iteración.

### Criterios de calidad del producto

- Navegación completa con teclado.
- Contraste mínimo WCAG AA.
- No depender exclusivamente del color para indicar estado.
- Sin desplazamiento horizontal en 320 px de ancho.
- Lighthouse móvil objetivo: 90 o más en rendimiento, accesibilidad, buenas prácticas y SEO.
- Objetivos de experiencia: LCP <= 2.5 s, INP <= 200 ms y CLS <= 0.1 en condiciones representativas.
- La navegación principal debe seguir funcionando sin animaciones.

## 6. Arquitectura de información

```text
/
|- Presentación
|- Proyectos destacados
|- Trayectoria
|- Perfil breve
`- Contacto

/projects
|- Filtros por capa o problema
`- Proyectos y experimentos

/projects/[slug]
`- Caso de estudio

/experience
`- Trayectoria completa

/resume
`- CV visible y descargable
```

No se añadirán blog, testimonios, newsletter, servicios ni un muro independiente de habilidades durante el MVP.

## 7. Experiencia de la página principal

### 7.1 Presentación

#### Contenido propuesto

```text
FRANCISCO FUENTES
Full Stack Engineer
TypeScript / Node.js + Python

Construyo aplicaciones web y sistemas backend que conectan
procesos, datos y personas, desde la interfaz hasta producción.

[ Explorar proyectos ]  [ Ver trayectoria ]
GitHub  LinkedIn  CV
```

#### Composición

- El bloque de identidad ocupa la zona izquierda o central dominante.
- Un mapa celeste abstracto ocupa la segunda zona y contiene los proyectos destacados como nodos.
- Un nodo activo muestra nombre, problema y stack principal sin exigir interacción.
- El primer CTA lleva a evidencia, no a una sección biográfica.
- La altura inicial puede aproximarse a una pantalla, pero nunca debe ocultar el comienzo de los proyectos.

#### Restricciones

- Sin saludo tipo “Hola, soy Francisco”.
- Sin fotografía circular obligatoria.
- Sin introducción bloqueante.
- Sin video de fondo.
- Sin estadísticas infladas.

### 7.2 Navegación principal

En escritorio, la navegación puede comportarse como un panel de comandos original:

```text
PROYECTOS
TRAYECTORIA
PERFIL
CONTACTO
```

El elemento activo utiliza posición, forma, texto y color. El hover desplaza ligeramente la etiqueta y revela un indicador propio. En móvil, el panel se convierte en una cabecera compacta con menú accesible; no se intenta conservar una composición de consola a costa del espacio.

Los nombres siguen siendo profesionales y universales. No se reemplazarán por referencias como “mundos”, “misiones” o nombres reconocibles de videojuegos.

### 7.3 Proyectos destacados

La home mostrará como máximo cuatro proyectos destacados. Cada bloque debe incluir:

- número y emblema;
- nombre;
- frase de problema o resultado;
- visual real del producto;
- tecnologías agrupadas por capa;
- una decisión o dificultad destacada;
- enlaces a demo, código y caso de estudio.

Las tecnologías se muestran así:

```text
FRONTEND      Nuxt · TypeScript · Pinia
BACKEND       Python · FastAPI
DATA          PostgreSQL · Redis
INFRA         Docker · GCP · GitHub Actions
```

No se muestran como una nube de logos.

### 7.4 Trayectoria

La experiencia laboral debe conservar un tratamiento más sobrio que los proyectos. Puede usar una ruta vertical o diagonal, pero el contenido será legible como una línea de tiempo normal.

El resumen inicial priorizará:

- CyD Tecnología - Backend Developer;
- West Ingeniería - Ingeniero de software;
- certificación Google Cloud Associate Cloud Engineer;
- formación como Ingeniero Civil en Informática.

Las fechas, responsabilidades y resultados publicados deben revisarse contra el CV vigente antes de cada release.

### 7.5 Perfil

El texto debe explicar brevemente el criterio de trabajo y la motivación detrás de la dirección visual. No debe repetir el CV.

Ejemplo de tono:

> Me interesa construir sistemas completos y comprender cómo cada decisión afecta a quien los usa y a quien debe mantenerlos. Este portafolio reúne esa mirada técnica con una influencia personal: los videojuegos que me enseñaron que una interfaz también puede contar una historia.

### 7.6 Contacto

Debe ser corto y directo:

- correo profesional;
- LinkedIn;
- GitHub;
- ubicación general y disponibilidad, solo si están vigentes.

No se publicará el número telefónico dentro del repositorio. Antes de implementar, confirmar la escritura del correo: el PDF actual contiene `fraciscop15@gmail.com` y podría ser un error tipográfico.

## 8. Plantilla de caso de estudio

Cada proyecto destacado tendrá la siguiente estructura mínima:

### 01 - Resumen

- Problema en una frase.
- Solución en una frase.
- Rol, duración y estado.
- Demo, código y documentación.

### 02 - Contexto y restricciones

- Usuario o escenario.
- Restricciones técnicas o de negocio.
- Alcance personal y trabajo de terceros, si corresponde.

### 03 - Solución

- Flujo principal.
- Capturas reales.
- Funcionalidades relevantes.

### 04 - Arquitectura

- Diagrama pequeño y legible.
- Responsabilidad de cada componente.
- Límites del sistema.

### 05 - Decisiones técnicas

Cada decisión seguirá esta forma:

```text
Contexto -> Opciones -> Decisión -> Trade-off -> Consecuencia
```

### 06 - El problema difícil

Narrativa concreta:

```text
Problema -> Diagnóstico -> Intentos -> Solución -> Validación
```

### 07 - Calidad

- pruebas unitarias;
- integración;
- end-to-end;
- observabilidad;
- manejo de errores;
- seguridad relevante.

### 08 - Resultado

Usar métricas reales. Si no existen, describir una validación reproducible y evitar porcentajes inventados.

### 09 - Qué cambiaría

Explicar límites actuales, deuda consciente y siguiente iteración. Esta sección es obligatoria porque muestra criterio, no debilidad.

## 9. Sistema visual

### 9.1 Paleta base

| Token | Valor inicial | Uso |
| --- | --- | --- |
| `--canvas` | `#050B14` | Fondo principal |
| `--surface` | `#0B1726` | Paneles y capas |
| `--surface-raised` | `#102238` | Elementos elevados |
| `--ink` | `#F2F6FB` | Texto principal |
| `--muted` | `#A7B8CA` | Texto secundario |
| `--line` | `#2A4158` | Bordes y rutas |
| `--star` | `#7DCCFF` | Acción y selección |
| `--metal` | `#B9C7D5` | Ornamento técnico |
| `--gold` | `#D2B46C` | Énfasis excepcional |
| `--danger` | `#FF7B86` | Error |

El dorado no es el color principal ni un sustituto del brillo. Se reserva para hitos, insignias o un dato excepcional. El azul luminoso identifica interacción.

### 9.2 Colores por proyecto

| Proyecto candidato | Acento | Motivo visual | Estado inicial |
| --- | --- | --- | --- |
| RouteFlow | Azul celeste | rutas y constelaciones | Planificado |
| DocMind | Violeta mineral | documentos, capas y refracción | Planificado |
| JobTrack | Ámbar | caminos, estados y conexiones | Planificado |
| MoneyMap | Verde jade | órbitas, flujos y agrupaciones | Planificado |

Los nombres y estados son provisionales. Ninguno se publicará como trabajo terminado sin evidencia.

### 9.3 Tipografía

| Rol | Familia propuesta | Uso |
| --- | --- | --- |
| Display y UI | Sora | títulos, comandos y números |
| Lectura | Source Sans 3 | párrafos y casos de estudio |
| Datos | IBM Plex Mono | metadatos, stack, métricas y labels |

`Sora` funciona además como un guiño personal discreto; la elección debe sostenerse por legibilidad y geometría aunque el visitante no conozca la referencia.

Reglas:

- No usar una tipografía que imite el logotipo de Kingdom Hearts.
- Máximo tres familias.
- Texto corrido entre 16 y 19 px.
- Longitud de línea entre 55 y 75 caracteres.
- Mayúsculas solo para etiquetas cortas, nunca para párrafos.
- Preferir fuentes variables autoalojadas y limitar pesos cargados.

### 9.4 Formas y composición

- Grilla base de 12 columnas en escritorio y 4 en móvil.
- Ritmo espacial basado en múltiplos de 4, con unidades frecuentes de 8, 16, 24, 40, 64 y 96 px.
- Paneles con esquinas recortadas, líneas incompletas y marcos finos; evitar el rectángulo redondeado repetido.
- Círculos y arcos solo cuando representen un nodo, una órbita o un emblema.
- Las diagonales indican trayecto o cambio de contexto, no decoración aleatoria.
- Máximo un foco ornamental dominante por viewport.
- El contenido mantiene alineaciones estables aunque el fondo sea asimétrico.

### 9.5 Emblema personal

Se diseñará un símbolo original que combine:

- una `F` abstraída;
- una trayectoria o bifurcación;
- un nodo o estrella;
- la idea de conexión entre sistemas.

Debe funcionar en una tinta y seguir siendo reconocible a 16 px. Se utilizará como favicon, firma, indicador de carga breve y marca en diagramas. No debe parecer una llave, corona o corazón de una franquicia existente.

### 9.6 Iconografía

Crear una familia pequeña de SVG propios con trazo y geometría compartidos. Primera colección:

- frontend: ventana o plano dividido;
- backend: módulos conectados;
- datos: capas o cristales apilados;
- cloud: nodo con órbita;
- IA/procesamiento: forma radial;
- testing: recorrido verificado;
- despliegue: transición entre estados.

Se permiten iconos de terceros para redes sociales o acciones universales, pero no para construir la identidad principal.

### 9.7 Elemento tipo vitral

La página de perfil puede incluir una composición circular original que reúna formación, tecnologías principales, experiencia y proyectos. No será un retrato ni una copia de una Station of Awakening. Debe poder reconstruirse como SVG semántico o como imagen acompañada por contenido textual equivalente.

## 10. Movimiento e interacción

### Vocabulario

| Acción | Comportamiento | Duración orientativa |
| --- | --- | --- |
| Hover o foco | desplazamiento corto y cambio de indicador | 120-160 ms |
| Selección | respuesta inmediata y confirmación luminosa | 160-220 ms |
| Abrir panel | recorte, expansión y aparición de contenido | 220-320 ms |
| Viajar a proyecto | traslación del mapa y cambio de escala moderado | 480-700 ms |
| Ambiente | deriva casi imperceptible de rutas o partículas | 8-20 s |

### Reglas

- Nada esencial espera una animación para aparecer.
- No usar `transition: all`.
- Máximo una transición cinematográfica por cambio de página.
- El fondo no debe mantener más de una animación continua importante.
- `prefers-reduced-motion` elimina viajes, parallax y deriva; conserva cambios instantáneos de estado.
- No usar cursor personalizado durante el MVP.
- No reproducir audio automáticamente ni incluir música ambiental por defecto.

## 11. Responsive y estados alternativos

### Escritorio

- Mapa interactivo y navegación lateral disponibles.
- Composiciones asimétricas controladas.
- Visuales de proyecto de mayor tamaño.

### Tablet

- Menor profundidad y menos rutas simultáneas.
- Navegación compacta.
- Los proyectos mantienen su emblema, pero reducen ornamentos.

### Móvil

- Flujo vertical y lectura inmediata.
- El mapa se transforma en una lista visual de destinos; no se encoge sin rediseñarse.
- CTA con área táctil mínima de 44 x 44 px.
- Sin parallax ni animaciones costosas.
- Las tablas técnicas permiten scroll local o cambian a listas etiquetadas.

### Sin JavaScript

El contenido, los enlaces y los casos de estudio deben seguir accesibles. Las rutas decorativas y transiciones pueden desaparecer.

## 12. Voz y contenido

### Tono

- Directo.
- Técnico, pero comprensible.
- Seguro sin exagerar.
- Personal sin convertirse en autobiografía.
- Concreto: problema, acción, decisión y resultado.

### Evitar

- “Apasionado por la tecnología”.
- “Transformo ideas en experiencias digitales”.
- “Código limpio y escalable” sin evidencia.
- Adjetivos como innovador, disruptivo o experto sin demostración.
- Contadores de años o proyectos que puedan quedar obsoletos.
- Porcentajes de dominio de habilidades.

### Idiomas

El MVP será en español porque el objetivo inmediato es el mercado chileno. La arquitectura debe permitir una versión completa en inglés posteriormente. No se mostrará un selector de idioma hasta que ambas versiones estén revisadas y completas.

## 13. Guardrails: decisiones prohibidas

- No usar assets oficiales de Kingdom Hearts, Persona o Disney.
- No copiar sus logos, marcos, menús o tipografías.
- No usar una Keyblade, corona o corazón como atajo conceptual.
- No usar shadcn, Tailwind UI o kits similares como apariencia final sin rediseño sustancial.
- No construir la home como un bento grid.
- No llenar la interfaz de tarjetas redondeadas, glassmorphism o gradientes morados.
- No añadir blobs, mallas, partículas o glow sin función.
- No crear una sección con 25 logos tecnológicos.
- No usar barras de nivel para habilidades.
- No incluir clones de productos conocidos como proyectos destacados.
- No mostrar proyectos sin demo, código o explicación verificable de su estado.
- No inventar métricas, usuarios, clientes ni resultados.
- No sacrificar lectura o rendimiento por conservar una idea visual.

## 14. Dirección técnica recomendada

### Base

- React Router en Framework Mode.
- TypeScript estricto.
- Renderizado estático de las rutas públicas cuando sea posible e hidratación solo para las interacciones que lo necesiten.
- Route Modules delgados: composición, carga de datos, metadatos y límites de error; la lógica reutilizable vive fuera de las rutas.
- `loader` para lecturas, `action` para mutaciones y `useFetcher` para interacciones que no deben navegar.
- CSS variables para tokens y CSS Modules para componentes.
- MDX o contenido tipado para casos de estudio.
- SVG propios para emblemas, rutas e iconografía.
- Librería de movimiento solo en componentes cliente aislados.

Tailwind puede evaluarse como herramienta de implementación, pero no debe dictar el aspecto ni convertir el sistema en una colección de clases sin tokens claros.

### Estructura sugerida

```text
app/
|- root.tsx
|- routes.ts
|- routes/
|  |- home.tsx
|  |- projects.tsx
|  |- project-detail.tsx
|  |- experience.tsx
|  `- resume.tsx
|- features/
|  |- portfolio/
|  `- project-case-study/
|- ui/
|  |- navigation/
|  |- project-showcase/
|  |- constellation/
|  `- case-study/
|- content/
|  |- projects/
|  `- experience/
|- design-system/
|  |- tokens.css
|  |- typography.css
|  `- motion.ts
`- assets/
   |- emblems/
   |- icons/
   `- diagrams/
```

### Pruebas mínimas

- Unitarias para transformación y orden del contenido.
- Componentes para estados interactivos y variantes.
- End-to-end para navegación, descarga de CV y enlaces principales.
- Auditoría automatizada de accesibilidad en rutas críticas.
- Prueba manual con teclado y movimiento reducido.
- Verificación visual en móvil, tablet y escritorio.

### SEO y metadatos

- Título y descripción específicos por proyecto.
- Open Graph original por caso de estudio.
- Datos estructurados solo cuando correspondan a contenido real.
- Sitemap, canonical y robots explícitos.
- Capturas sociales legibles sin depender de animación.

### Privacidad y analítica

Si se añade analítica, debe ser liviana y respetuosa de la privacidad. Medir visitas a proyectos y clics en demo, código y contacto; evitar recolectar datos que no se usarán.

## 15. Inventario de contenido requerido

Antes de diseñar la versión final se necesita:

- CV vigente y enlace descargable.
- URL de GitHub y LinkedIn verificadas.
- Correo confirmado.
- Bio breve revisada.
- Cuatro proyectos candidatos con estado real.
- Capturas propias en escritorio y móvil.
- Diagrama de arquitectura por proyecto.
- Repositorios públicos o explicación de confidencialidad.
- Métricas o validaciones reproducibles.
- Emblema original para cada proyecto.
- Imagen Open Graph por página principal y proyecto.

## 16. Fases de diseño e implementación

### Fase 1 - Exploración de identidad

Crear tres composiciones de baja fidelidad que compartan el concepto, pero difieran en jerarquía y navegación. Probarlas sin color primero.

**Salida:** dirección elegida y razones de descarte de las otras dos.

### Fase 2 - Sistema visual

Diseñar tokens, tipografía, emblema, iconografía inicial, navegación, botón, foco y un bloque de proyecto.

**Salida:** página de sistema visual y prototipo estático.

### Fase 3 - Home de alta fidelidad

Diseñar escritorio y móvil con contenido real o claramente marcado como provisional.

**Salida:** prototipo navegable de la home.

### Fase 4 - Caso de estudio piloto

Implementar primero el proyecto con mejor evidencia. No crear cuatro páginas vacías para llenar el mapa.

**Salida:** una historia completa, probada y publicable.

### Fase 5 - Implementación y validación

Construir el MVP, medir accesibilidad y rendimiento, y probarlo con una persona reclutadora y una persona técnica.

**Salida:** sitio desplegado con al menos dos proyectos sólidos.

### Fase 6 - Expansión

Completar hasta cuatro proyectos destacados, versión en inglés y refinamiento de movimiento.

## 17. Criterios de aceptación del MVP

El MVP estará listo cuando:

- [ ] La primera pantalla comunica nombre, rol, foco y CTA.
- [ ] La interfaz es reconocible sin copiar una franquicia.
- [ ] Existen al menos dos proyectos completos y honestos.
- [ ] Cada proyecto tiene problema, solución, arquitectura, decisión y retrospectiva.
- [ ] La experiencia profesional coincide con el CV vigente.
- [ ] Todos los enlaces principales funcionan.
- [ ] La navegación es utilizable con teclado y lector de pantalla.
- [ ] `prefers-reduced-motion` está implementado.
- [ ] La versión móvil fue rediseñada y no solo comprimida.
- [ ] No se utilizaron recursos protegidos de videojuegos.
- [ ] Rendimiento y accesibilidad cumplen los objetivos definidos.
- [ ] Una persona ajena entiende el perfil en menos de 30 segundos.

## 18. Pregunta de control

Antes de aprobar cualquier decisión visual, preguntar:

> ¿Este elemento ayuda a entender a Francisco, su trabajo o la navegación, o solo intenta parecerse a un videojuego?

Si la respuesta es la segunda, se elimina.

El resultado correcto no debe decir “esto parece Kingdom Hearts”. Debe provocar una sensación más sutil:

> Esto no se parece literalmente a Kingdom Hearts, pero tiene viaje, conexión, misterio y una identidad que claramente pertenece a Francisco.

## 19. Decisiones abiertas

- Nombre público del concepto; `Constelación de Sistemas` es interno.
- Forma final del emblema personal.
- Composición de la home entre tres propuestas iniciales.
- Proyecto real que funcionará como primer caso de estudio.
- Uso o no de una fotografía personal dentro de la página de perfil.
- Grado exacto de interacción del mapa en móvil.

Estas decisiones no deben resolverse generando una interfaz completa de una sola vez. Primero se exploran alternativas, luego se documenta la elección.

---

### Fuente profesional inicial

Este documento fue alineado con el CV `FranciscoF - Ingenierio Civil Informatico.pdf`, revisado el 2 de septiembre de 2026. El CV sirve como base factual, pero el contenido publicado deberá verificarse nuevamente antes del lanzamiento.
