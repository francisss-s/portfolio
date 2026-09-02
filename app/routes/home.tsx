import type { Route } from './+types/home'
import { PortfolioHome } from '../features/portfolio-home/PortfolioHome'

export const meta: Route.MetaFunction = () => [
  { title: 'Francisco Fuentes | Full Stack Engineer' },
  { name: 'description', content: 'Full Stack Engineer con foco en backend, cloud y sistemas de negocio. TypeScript, Node.js y Python.' },
]

export default function Home() {
  return <PortfolioHome />
}
