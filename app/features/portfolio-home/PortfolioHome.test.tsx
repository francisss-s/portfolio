import { cleanup, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { PortfolioHome } from './PortfolioHome'

afterEach(cleanup)

describe('PortfolioHome', () => {
  it('comunica identidad, foco y trabajo profesional', () => {
    render(<PortfolioHome />)

    expect(screen.getByRole('heading', { name: 'Full Stack Engineer', level: 1 })).toBeInTheDocument()
    expect(screen.getByText('TypeScript / Node.js', { exact: false })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explorar mi trabajo/ })).toHaveAttribute('href', '#trabajo')
    expect(screen.getAllByRole('heading', { level: 3 })).toEqual(expect.arrayContaining([
      expect.objectContaining({ textContent: 'Modernización de un sistema gestor documental' }),
      expect.objectContaining({ textContent: 'MRP y simulación para planificación productiva' }),
      expect.objectContaining({ textContent: 'Optimización de rutas con restricciones reales' }),
    ]))
  })

  it('expone navegación y enlaces externos correctos sin CTA pendientes', () => {
    render(<PortfolioHome />)

    expect(screen.getAllByRole('link', { name: /Trabajo/ })[0]).toHaveAttribute('href', '#trabajo')
    expect(screen.getAllByRole('link', { name: /GitHub/ })[0]).toHaveAttribute('href', 'https://github.com/francisss-s')
    expect(screen.getAllByRole('link', { name: /LinkedIn/ })[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/francisco-alejandro-fuentes-soto/')
    expect(screen.queryByRole('link', { name: /CV|correo/i })).not.toBeInTheDocument()
  })

  it('no presenta violaciones automáticas básicas de accesibilidad', async () => {
    const { container } = render(<PortfolioHome />)
    const result = await axe(container)
    expect(container.querySelector('[class~="undefined"]')).not.toBeInTheDocument()
    expect(result.violations).toEqual([])
  })
})
