import type { Route } from './+types/experience'
import { ExperiencePage } from '../features/portfolio-home/PortfolioHome'

export const meta: Route.MetaFunction = () => [
  { title: 'Trayectoria | Francisco Fuentes' },
  { name: 'description', content: 'Experiencia profesional, formación y certificaciones de Francisco Fuentes.' },
]

export default function Experience() {
  return <ExperiencePage />
}
