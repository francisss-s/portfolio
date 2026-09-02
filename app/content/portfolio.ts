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
  eyebrow: string
  title: string
  summary: string
  contributions: string[]
  stack: Record<string, string[]>
  metric?: { label: string; before: string; after: string }
  href?: string
  motif: 'documents' | 'production' | 'routes'
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
    metric: { label: 'Tiempo de despliegue', before: '≈ 4–5 min', after: '≈ 1–1,5 min' },
    motif: 'documents',
  },
  {
    id: '02',
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
