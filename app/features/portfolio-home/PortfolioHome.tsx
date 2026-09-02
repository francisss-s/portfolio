import { useEffect, useState } from 'react'
import { capabilities, evidence, experience, professionalLinks, selectedWork } from '../../content/portfolio'
import styles from './portfolio-home.module.css'

const navigation = [
  ['trabajo', 'Trabajo'], ['capacidades', 'Capacidades'], ['trayectoria', 'Trayectoria'], ['perfil', 'Perfil'], ['contacto', 'Contacto'],
] as const

function Mark({ compact = false }: { compact?: boolean }) {
  return <svg className={compact ? styles.markSmall : styles.mark} viewBox="0 0 48 48" aria-hidden="true"><path d="M9 39V10h23M9 24h18m0 0 11-10m-11 10 11 10" /><circle cx="38" cy="14" r="3" /><circle cx="38" cy="34" r="3" /></svg>
}

function Navigation() {
  const [active, setActive] = useState('trabajo')

  useEffect(() => {
    const sections = navigation.map(([id]) => document.getElementById(id)).filter((section): section is HTMLElement => section !== null)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -60%', threshold: [0, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const links = navigation.map(([id, label], index) => <a key={id} href={`#${id}`} className={active === id ? styles.activeNav : undefined} aria-current={active === id ? 'location' : undefined}><span>0{index + 1}</span>{label}</a>)

  return <>
    <aside className={styles.desktopNav} aria-label="Navegación principal"><a href="#inicio" className={styles.identity} aria-label="Francisco Fuentes, volver al inicio"><Mark /><span>F. FUENTES<small>FULL STACK ENGINEER</small></span></a><nav>{links}</nav>{professionalLinks.resumePath && <a className={styles.resume} href={professionalLinks.resumePath}>Abrir CV <span aria-hidden="true">↗</span></a>}</aside>
    <header className={styles.mobileHeader}><a href="#inicio" aria-label="Francisco Fuentes, volver al inicio"><Mark compact /><span>F. FUENTES</span></a><details><summary>Menú</summary><nav>{links}{professionalLinks.resumePath && <a href={professionalLinks.resumePath}>CV</a>}</nav></details></header>
  </>
}

function Constellation() {
  return <figure className={styles.constellation} aria-labelledby="map-caption">
    <svg viewBox="0 0 620 600" role="img" aria-hidden="true">
      <g className={styles.orbit}><path d="M88 338C98 147 286 51 463 132c142 65 117 280 15 363" /><path d="M153 500C79 389 142 212 291 174c130-34 238 56 239 176" /></g>
      <g className={styles.route}><path d="M101 407 214 302 337 363 479 213" /><path d="m337 363 69 118" /></g>
      <g className={styles.nodes}><circle cx="101" cy="407" r="9"/><circle cx="214" cy="302" r="14"/><circle cx="337" cy="363" r="10"/><circle cx="479" cy="213" r="15"/><circle cx="406" cy="481" r="8"/></g>
      <g className={styles.labels}><text x="70" y="442">DATOS</text><text x="166" y="272">SISTEMAS</text><text x="320" y="398">CLOUD</text><text x="424" y="180">OPTIMIZACIÓN</text></g>
      <g className={styles.centerMark}><path d="M260 288v-62h49m-49 31h38m0 0 30-26m-30 26 30 26"/><circle cx="329" cy="231" r="6"/><circle cx="329" cy="283" r="6"/></g>
    </svg>
    <figcaption id="map-caption"><strong>Un sistema, cuatro responsabilidades.</strong><span>Backend conecta datos, cloud y optimización para llevar una solución completa a producción.</span><ul className={styles.mapNodes}><li>Sistemas</li><li>Datos</li><li>Cloud</li><li>Optimización</li></ul></figcaption>
  </figure>
}

function SectionHeading({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return <header className={styles.sectionHeading}><span>{index}</span><div><h2>{title}</h2><p>{subtitle}</p></div></header>
}

function WorkMotif({ type }: { type: 'documents' | 'production' | 'routes' }) {
  return <div className={`${styles.motif} ${styles[type]}`} aria-hidden="true"><i /><i /><i /><i /></div>
}

export function PortfolioHome() {
  const year = new Date().getFullYear()
  return <div id="inicio" className={styles.site}>
    <a className={styles.skipLink} href="#contenido">Saltar al contenido</a>
    <Navigation />
    <main id="contenido">
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}><p className={styles.kicker}>FRANCISCO FUENTES</p><h1 id="hero-title">Full Stack Engineer</h1><p className={styles.focus}>TypeScript / Node.js <span>+</span> Python</p><p className={styles.statement}>Convierto procesos complejos en sistemas web claros, mantenibles y listos para producción.</p><p className={styles.disciplines}>Backend <i /> Cloud <i /> Product Engineering</p><div className={styles.actions}><a className={styles.primaryAction} href="#trabajo">Explorar mi trabajo <span aria-hidden="true">↓</span></a><a className={styles.secondaryAction} href="#trayectoria">Ver trayectoria</a></div><div className={styles.social}><a href={professionalLinks.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href={professionalLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>{professionalLinks.resumePath && <a href={professionalLinks.resumePath}>CV</a>}</div></div>
        <Constellation />
        <a className={styles.continue} href="#evidencia">Continuar <span aria-hidden="true">↓</span></a>
      </section>

      <section id="evidencia" className={styles.evidence} aria-label="Evidencia profesional">{evidence.map((item, index) => <article key={item.value}><span>0{index + 1}</span><strong>{item.value}</strong><p>{item.detail}</p></article>)}</section>

      <section id="trabajo" className={styles.section}><SectionHeading index="01" title="Trabajo seleccionado" subtitle="Sistemas reales, decisiones reales." /><div className={styles.workList}>{selectedWork.map((work) => <article className={`${styles.work}${work.id === '02' ? ` ${styles.work02}` : ''}`} key={work.id}><div className={styles.workIndex}><span>{work.id}</span><WorkMotif type={work.motif} /></div><div className={styles.workBody}><p className={styles.eyebrow}>{work.eyebrow}</p><h3>{work.title}</h3><p className={styles.workSummary}>{work.summary}</p><ul>{work.contributions.map((item) => <li key={item}>{item}</li>)}</ul>{work.metric && <div className={styles.metric}><span>{work.metric.label}</span><del>{work.metric.before}</del><strong>{work.metric.after}</strong></div>}{work.href && <a href={work.href}>Abrir caso <span aria-hidden="true">→</span></a>}</div><dl className={styles.stack}>{Object.entries(work.stack).map(([layer, technologies]) => <div key={layer}><dt>{layer}</dt><dd>{technologies.join(' · ')}</dd></div>)}</dl></article>)}</div></section>

      <section id="capacidades" className={`${styles.section} ${styles.capabilities}`}><SectionHeading index="02" title="Capacidades" subtitle="Tecnología organizada por responsabilidad." /><div className={styles.capabilityGrid}>{capabilities.map((capability, index) => <article key={capability.title}><span>0{index + 1}</span><h3>{capability.title}</h3><p>{capability.description}</p><ul aria-label={`Tecnologías de ${capability.title}`}>{capability.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></article>)}</div></section>

      <section id="trayectoria" className={styles.section}><SectionHeading index="03" title="Trayectoria" subtitle="Del problema operacional al sistema en producción." /><div className={styles.timeline}>{experience.map((item) => <article key={`${item.company}-${item.role}`}><div className={styles.timelineNode} aria-hidden="true"/><div className={styles.period}>{item.period ?? item.kind?.toUpperCase()}</div><div><p>{item.company}</p><h3>{item.role}</h3><p>{item.summary}</p>{item.technologies.length > 0 && <small>{item.technologies.join(' · ')}</small>}</div></article>)}</div></section>

      <section id="perfil" className={`${styles.section} ${styles.profile}`}><SectionHeading index="04" title="Cómo trabajo" subtitle="Entender primero. Diseñar con criterio. Entregar algo útil." /><div className={styles.profileIntro}><p>Me interesan especialmente los problemas donde primero hay que comprender un proceso y después transformarlo en una solución concreta. Trabajo mejor con objetivos y restricciones claras, autonomía para ejecutar y espacio para proponer mejoras.</p><p>No entiendo la arquitectura como una colección de patrones: intento elegir la solución más simple que proteja mantenibilidad, operación y evolución del producto.</p></div><div className={styles.principles}>{[['Comprender el sistema','Antes de programar, identifico usuarios, reglas, restricciones y puntos de falla.'],['Arquitectura proporcional','No todo necesita microservicios. La complejidad debe ganarse con una necesidad real.'],['Responsabilidad completa','Una entrega incluye funcionamiento, riesgos, pruebas, documentación y próximos pasos.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="contacto" className={styles.contact}><span className={styles.contactOrbit} aria-hidden="true"/><p className={styles.kicker}>SIGUIENTE CONEXIÓN</p><h2>Construyamos algo que resuelva un problema real.</h2><p>Disponible para conversar sobre oportunidades Backend y Full Stack donde pueda aportar en sistemas, datos, cloud y evolución de producto.</p><div className={styles.actions}>{professionalLinks.email && <a className={styles.primaryAction} href={`mailto:${professionalLinks.email}`}>Escribir correo</a>}<a className={styles.primaryAction} href={professionalLinks.linkedin} target="_blank" rel="noreferrer">Conversemos en LinkedIn <span aria-hidden="true">↗</span></a><a className={styles.secondaryAction} href={professionalLinks.github} target="_blank" rel="noreferrer">Revisar GitHub</a>{professionalLinks.resumePath && <a className={styles.secondaryAction} href={professionalLinks.resumePath}>Descargar CV</a>}</div></section>
    </main>
    <footer className={styles.footer}><div><Mark compact /><span>Francisco Fuentes<small>Full Stack Engineer</small></span></div><p>© {year}</p><nav aria-label="Redes sociales"><a href={professionalLinks.github}>GitHub</a><a href={professionalLinks.linkedin}>LinkedIn</a></nav></footer>
  </div>
}
