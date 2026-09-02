import type { Route } from './+types/projects'
import { ProjectsPage } from '../features/portfolio-home/PortfolioHome'

export const meta: Route.MetaFunction = () => [
  { title: 'Proyectos | Francisco Fuentes' },
  { name: 'description', content: 'Proyectos backend, full stack, cloud y optimización de Francisco Fuentes.' },
]

export default function Projects() {
  return <ProjectsPage />
}
