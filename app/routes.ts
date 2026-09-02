import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('proyectos', 'routes/projects.tsx'),
  route('proyectos/:slug', 'routes/project-detail.tsx'),
  route('trayectoria', 'routes/experience.tsx'),
  route('perfil', 'routes/profile.tsx'),
] satisfies RouteConfig
