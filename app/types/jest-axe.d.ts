declare module 'jest-axe' {
  type AxeResult = { violations: unknown[] }
  export function axe(html: Element | string): Promise<AxeResult>
}
