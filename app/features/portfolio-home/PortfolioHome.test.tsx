import { cleanup, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router'
import { PortfolioHome, ProjectDetailPage, ProjectsPage } from './PortfolioHome'
import { selectedWork } from '../../content/portfolio'

afterEach(cleanup)

describe('PortfolioHome', () => {
  const renderHome = () => render(<MemoryRouter><PortfolioHome /></MemoryRouter>)

  it('comunica identidad, foco y trabajo profesional', () => {
    renderHome()

    expect(screen.getByRole('heading', { name: 'Full Stack Engineer', level: 1 })).toBeInTheDocument()
    expect(screen.getByText('TypeScript / Node.js', { exact: false })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explorar proyectos/ })).toHaveAttribute('href', '/proyectos')
    expect(screen.getAllByRole('heading', { level: 3 })).toEqual(expect.arrayContaining([
      expect.objectContaining({ textContent: 'Modernización de un sistema gestor documental' }),
      expect.objectContaining({ textContent: 'MRP y simulación para planificación productiva' }),
    ]))
    expect(screen.queryByRole('heading', { name: 'Optimización de rutas con restricciones reales' })).not.toBeInTheDocument()
  })

  it('expone navegación y enlaces externos correctos sin CTA pendientes', () => {
    renderHome()

    expect(screen.getAllByRole('link', { name: /Proyectos/ })[0]).toHaveAttribute('href', '/proyectos')
    expect(screen.getAllByRole('link', { name: /GitHub/ })[0]).toHaveAttribute('href', 'https://github.com/francisss-s')
    expect(screen.getAllByRole('link', { name: /LinkedIn/ })[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/francisco-alejandro-fuentes-soto/')
    expect(screen.queryByRole('link', { name: /CV|correo/i })).not.toBeInTheDocument()
  })

  it('no presenta violaciones automáticas básicas de accesibilidad', async () => {
    const { container } = renderHome()
    const result = await axe(container)
    expect(container.querySelector('[class~="undefined"]')).not.toBeInTheDocument()
    expect(result.violations).toEqual([])
  })

  it('muestra el catálogo completo en la ruta de proyectos', () => {
    render(<MemoryRouter><ProjectsPage /></MemoryRouter>)

    for (const project of selectedWork) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Ver detalle/ })).toHaveLength(selectedWork.length)
  })

  it('presenta el detalle desde la misma fuente de contenido', () => {
    const project = selectedWork[0]
    render(<MemoryRouter><ProjectDetailPage project={project} /></MemoryRouter>)

    expect(screen.getByRole('heading', { name: project.title, level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Aportes y alcance' })).toBeInTheDocument()
    expect(screen.getByText(project.contributions[0])).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Decisiones técnicas' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Qué cambiaría' })).toBeInTheDocument()
    expect(screen.getByText('Backend Developer responsable de la migración de esta capa')).toBeInTheDocument()
  })
})
