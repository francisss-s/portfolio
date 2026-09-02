export type ExperienceItem = {
  company: string
  role: string
  period?: string
  summary: string
  technologies: string[]
  kind?: 'work' | 'education' | 'certification'
}

export type SelectedWork = {
  id: string
  slug: string
  eyebrow: string
  title: string
  summary: string
  contributions: string[]
  stack: Record<string, string[]>
  metric?: { label: string; before: string; after: string }
  href?: string
  motif: 'documents' | 'production' | 'routes'
  caseStudy?: {
    status: string
    period: string
    role: string
    context: string[]
    architecture: string[]
    decisions: Array<{ title: string; context: string; decision: string; tradeoff: string; consequence: string }>
    challenge: string[]
    quality: string[]
    results: string[]
    retrospective: string[]
  }
}

export type Capability = {
  title: string
  description: string
  technologies: string[]
}

export const professionalLinks = {
  github: 'https://github.com/francisss-s',
  linkedin: 'https://www.linkedin.com/in/francisco-alejandro-fuentes-soto/',
  email: null as string | null,
  resumePath: null as string | null,
}

export const evidence = [
  { value: '3+ años', detail: 'Construyendo software para procesos reales de negocio.' },
  { value: 'Producción', detail: 'APIs, modelos de datos, procesamiento asíncrono y despliegues cloud.' },
  { value: 'Google Cloud Certified', detail: 'Associate Cloud Engineer · 2026' },
]

export const selectedWork: SelectedWork[] = [
  {
    id: '01',
    slug: 'sistema-gestor-documental',
    eyebrow: 'PRODUCCIÓN · BACKEND & CLOUD',
    title: 'Modernización de un sistema gestor documental',
    summary: 'Migración desde Firebase, Firestore y Google Drive hacia una arquitectura con NestJS, MongoDB y Google Cloud Storage, conservando estructuras documentales y mejorando la operación de archivos a gran escala.',
    contributions: [
      'Backend principal de la migración y modelado para documentos, correspondencia y adjuntos.',
      'Procesamiento asíncrono con Cloud Run Jobs y Cloud Tasks.',
      'Generación externa de ZIP y Excel para proteger el navegador y el backend principal.',
      'Pruebas unitarias, Swagger y optimización de imágenes, dependencias y CI/CD.',
    ],
    stack: {
      BACKEND: ['TypeScript', 'NestJS'],
      DATA: ['MongoDB'],
      CLOUD: ['Cloud Run', 'Cloud Tasks', 'Cloud Storage'],
      DELIVERY: ['Docker', 'GitLab CI/CD'],
    },
    metric: { label: 'Tiempo habitual de despliegue', before: 'Referencia anterior', after: 'Reducción significativa' },
    motif: 'documents',
    caseStudy: {
      status: 'Completado y desplegado en producción',
      period: 'Febrero–abril de 2026 · aproximadamente 3 meses',
      role: 'Backend Developer responsable de la migración de esta capa',
      context: [
        'La plataforma interna administraba documentación asociada a distintos proyectos. El sistema anterior combinaba Firebase, Firestore, Google Drive y una aplicación basada principalmente en HTML y JavaScript.',
        'Grandes conjuntos de registros se enviaban completos al cliente. Las búsquedas, tablas y navegación se degradaban al crecer la información, mientras que algunas operaciones documentales pesadas podían superar los recursos asignados al API.',
        'La migración debía conservar conceptualmente la estructura documental y avanzar gradualmente mientras la plataforma anterior continuaba operativa.',
      ],
      architecture: [
        'Next.js se comunicaba con una API modular en NestJS desplegada sobre Kubernetes. MongoDB representaba la estructura lógica y Google Cloud Storage almacenaba los objetos.',
        'Las operaciones habituales permanecían en la API. Las descargas masivas se derivaban mediante Cloud Tasks a Cloud Run Jobs, que construían el paquete, lo almacenaban en GCS y actualizaban su estado en MongoDB.',
        'El frontend consultaba el progreso mediante polling controlado. Las solicitudes repetidas podían reconocerse mediante idempotencia y las lifecycle rules de GCS actuaban como limpieza secundaria.',
      ],
      decisions: [
        { title: 'Paginar desde el backend', context: 'El cliente recibía conjuntos completos y procesaba localmente navegación y búsqueda.', decision: 'Crear una base reutilizable de paginación y extender cada endpoint con filtros, índices y agregaciones específicas.', tradeoff: 'Las consultas complejas conservaron lógica especializada en lugar de forzar una abstracción universal.', consequence: 'La navegación dejó de depender de transferir todos los registros al navegador.' },
        { title: 'Separar las descargas pesadas', context: 'Las pruebas identificaron que ciertas operaciones documentales podían superar los recursos asignados al API.', decision: 'Mover la construcción de paquetes a Cloud Tasks y Cloud Run Jobs, fuera del ciclo de vida de la API.', tradeoff: 'La operación pasó a requerir cola, estados, seguimiento, idempotencia y manejo explícito de errores.', consequence: 'Las pruebas con distintos volúmenes completaron las descargas sin comprometer la disponibilidad del API principal.' },
        { title: 'Polling antes que WebSockets', context: 'El usuario necesitaba conocer el progreso de operaciones que podían tardar.', decision: 'Consultar estados mediante polling con intervalos controlados.', tradeoff: 'Las actualizaciones no eran instantáneas y agregaban solicitudes periódicas.', consequence: 'Se entregó visibilidad y manejo de fallos con menor complejidad dentro del tiempo disponible.' },
        { title: 'Migración gradual', context: 'La plataforma anterior debía continuar operativa durante la transición.', decision: 'Migrar primero en pruebas y luego por unidades documentales independientes, en horarios de menor impacto cuando era posible.', tradeoff: 'Fue necesario construir herramientas adicionales y mantener temporalmente ambos sistemas.', consequence: 'La información pudo trasladarse progresivamente hasta llevar la nueva solución a producción.' },
      ],
      challenge: [
        'Las métricas de GCP permitieron relacionar los picos de CPU y memoria con determinadas operaciones documentales de larga duración.',
        'El procesamiento se trasladó a Jobs independientes. MongoDB registraba el progreso y los errores, GCS almacenaba temporalmente los resultados y el frontend evitaba esperas indefinidas.',
        'La solución se validó con diferentes volúmenes de información sin volver a comprometer la disponibilidad del API principal.',
      ],
      quality: [
        'Pruebas E2E por módulo y pruebas de integración con Jest y MongoDB.',
        'Swagger/OpenAPI y documentación específica para módulos del backend.',
        'Integración de Sentry, métricas de infraestructura en GCP y registro de eventos.',
        'Integración con autenticación corporativa, JWT y una plataforma externa de permisos; esos servicios no fueron desarrollados personalmente.',
      ],
      results: [
        'Backend en NestJS, migración de Firestore a MongoDB y traslado documental de Google Drive a GCS llevados a producción.',
        'Descargas pesadas desacopladas de la API principal, con progreso, errores e idempotencia explícitos.',
        'Migración gradual completada mientras el sistema anterior continuaba operativo.',
        'Reducción significativa del tiempo habitual de despliegue mediante monorepo, actualización de dependencias e imagen base, y caché en CI/CD.',
      ],
      retrospective: [
        'Acordaría antes con frontend contratos de API transversales para evitar respuestas con datos innecesarios.',
        'Volvería a evaluar polling, Server-Sent Events o WebSockets según concurrencia y frecuencia real de actualización, sin reemplazar una solución solo por novedad.',
        'Añadiría limpieza inmediata de artefactos parciales de jobs fallidos, manteniendo las lifecycle rules como protección secundaria.',
        'Mantendría especificaciones y acuerdos técnicos más explícitos durante las etapas finales del proyecto.',
      ],
    },
  },
  {
    id: '02',
    slug: 'planificacion-productiva-mrp',
    eyebrow: 'SAAS B2B · FULL STACK',
    title: 'MRP y simulación para planificación productiva',
    summary: 'Solución para representar recetas, materias primas, capacidades y planes de producción, proyectar necesidades de inventario y anticipar quiebres de stock en procesos industriales.',
    contributions: [
      'Rol técnico principal y desarrollo full stack junto al levantamiento de requerimientos.',
      'Gestor de recetas, subrecetas y árboles de composición para trazabilidad.',
      'Simulación productiva, MRP, inventario y reportes.',
      'Lógica de negocio en Oracle PL/SQL y apoyo de Python con Pyomo.',
    ],
    stack: {
      PRODUCT: ['Full Stack', 'Requerimientos', 'Reportes'],
      BACKEND: ['Oracle PL/SQL', 'Python'],
      MODELING: ['Pyomo'],
      DOMAIN: ['MRP', 'Inventario', 'Simulación'],
    },
    motif: 'production',
  },
  {
    id: '03',
    slug: 'optimizacion-rutas',
    eyebrow: 'PYTHON · OPTIMIZACIÓN',
    title: 'Optimización de rutas con restricciones reales',
    summary: 'Servicio y prototipo avanzado para problemas de última milla, considerando puntos de recolección, capacidad de vehículos, restricciones de recorrido y eficiencia logística.',
    contributions: [
      'Modelamiento de problemas VRP con Python y OR-Tools.',
      'Integración con OSRM y OpenStreetMap.',
      'Contenerización de servicios geográficos con Docker.',
      'Traducción de restricciones operacionales a un modelo resoluble.',
    ],
    stack: {
      LANGUAGE: ['Python'],
      OPTIMIZATION: ['OR-Tools', 'VRP'],
      MAPS: ['OSRM', 'OpenStreetMap'],
      INFRA: ['Docker'],
    },
    motif: 'routes',
  },
]

export const capabilities: Capability[] = [
  { title: 'Sistemas backend', description: 'APIs, servicios modulares, lógica de negocio, procesamiento asíncrono, documentación y manejo de errores.', technologies: ['Node.js', 'TypeScript', 'NestJS', 'REST', 'Swagger'] },
  { title: 'Producto full stack', description: 'Interfaces conectadas con necesidades operacionales, formularios, estados de producto e integración frontend–backend.', technologies: ['React', 'React Router', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Datos y optimización', description: 'Modelado, consultas, transacciones, estructuras documentales y problemas con restricciones.', technologies: ['MongoDB', 'Oracle PL/SQL', 'PostgreSQL', 'Python', 'OR-Tools', 'Pyomo'] },
  { title: 'Cloud y entrega', description: 'Contenedores, pipelines, almacenamiento, ejecución de jobs y despliegues mantenibles.', technologies: ['GCP', 'Cloud Run', 'Cloud Tasks', 'Cloud Storage', 'Docker', 'GitLab CI/CD'] },
]

export const experience: ExperienceItem[] = [
  { company: 'CyD Tecnología', role: 'Backend Developer', period: 'Diciembre 2025 — Mayo 2026', summary: 'Modernización de plataformas documentales, arquitectura backend, procesos asíncronos en GCP, pruebas, documentación y mejora de despliegues.', technologies: ['NestJS', 'MongoDB', 'GCP'], kind: 'work' },
  { company: 'West Ingeniería', role: 'Ingeniero de Software', period: 'Noviembre 2022 — Noviembre 2025', summary: 'Soluciones SaaS B2B para planificación productiva, MRP, logística, simulación y optimización, con participación full stack y coordinación técnica.', technologies: ['Oracle PL/SQL', 'Python', 'Full Stack'], kind: 'work' },
  { company: 'Universidad Austral de Chile', role: 'Ingeniero Civil en Informática', summary: 'Formación profesional.', technologies: [], kind: 'education' },
  { company: 'Google Cloud Certified', role: 'Associate Cloud Engineer', period: '2026', summary: 'Certificación profesional.', technologies: ['Google Cloud'], kind: 'certification' },
]
