import type { Route } from './+types/profile'
import { ProfilePage } from '../features/portfolio-home/PortfolioHome'

export const meta: Route.MetaFunction = () => [
  { title: 'Perfil | Francisco Fuentes' },
  { name: 'description', content: 'Forma de trabajo y capacidades técnicas de Francisco Fuentes.' },
]

export default function Profile() {
  return <ProfilePage />
}
