import type { Config } from '@react-router/dev/config'

export default {
  basename: process.env.BASE_PATH ?? '/',
  ssr: false,
  prerender: [
    '/',
    '/proyectos',
    '/proyectos/sistema-gestor-documental',
    '/proyectos/planificacion-productiva-mrp',
    '/proyectos/optimizacion-rutas',
    '/trayectoria',
    '/perfil',
  ],
} satisfies Config
