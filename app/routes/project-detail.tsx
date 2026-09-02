import type { Route } from './+types/project-detail'
import { selectedWork } from '../content/portfolio'
import { ProjectDetailPage } from '../features/portfolio-home/PortfolioHome'

export const meta: Route.MetaFunction = ({ params }) => {
  const project = selectedWork.find((item) => item.slug === params.slug)
  return [
    { title: project ? `${project.title} | Francisco Fuentes` : 'Proyecto no encontrado' },
    { name: 'description', content: project?.summary ?? 'Detalle de proyecto profesional.' },
  ]
}

export default function ProjectDetail({ params }: Route.ComponentProps) {
  const project = selectedWork.find((item) => item.slug === params.slug)
  if (!project) throw new Response('Proyecto no encontrado', { status: 404 })
  return <ProjectDetailPage project={project} />
}
