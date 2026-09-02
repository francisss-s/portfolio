import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router'
import { capabilities, currentLearning, evidence, experience, featuredLearning, languages, professionalLinks, selectedWork, type LearningItem, type SelectedWork } from '../../content/portfolio'
import styles from './portfolio-home.module.css'

const navigation = [['/', 'Inicio'], ['/proyectos', 'Proyectos'], ['/trayectoria', 'Trayectoria'], ['/perfil', 'Perfil']] as const

function Mark({ compact = false }: { compact?: boolean }) {
  return <svg className={compact ? styles.markSmall : styles.mark} viewBox="0 0 48 48" aria-hidden="true"><path d="M9 39V10h23M9 24h18m0 0 11-10m-11 10 11 10" /><circle cx="38" cy="14" r="3" /><circle cx="38" cy="34" r="3" /></svg>
}

function Navigation() {
  const links = navigation.map(([to, label], index) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? styles.activeNav : undefined}><span>0{index + 1}</span>{label}</NavLink>)
  return <><aside className={styles.desktopNav} aria-label="Navegación principal"><Link to="/" className={styles.identity} aria-label="Francisco Fuentes, ir al inicio"><Mark /><span>F. FUENTES<small>FULL STACK ENGINEER</small></span></Link><nav>{links}</nav>{professionalLinks.resumePath && <a className={styles.resume} href={professionalLinks.resumePath}>Abrir CV <span aria-hidden="true">↗</span></a>}</aside><header className={styles.mobileHeader}><Link to="/" aria-label="Francisco Fuentes, ir al inicio"><Mark compact /><span>F. FUENTES</span></Link><details><summary>Menú</summary><nav>{links}{professionalLinks.resumePath && <a href={professionalLinks.resumePath}>CV</a>}</nav></details></header></>
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className={styles.site}><a className={styles.skipLink} href="#contenido">Saltar al contenido</a><Navigation /><main id="contenido">{children}</main><footer className={styles.footer}><div><Mark compact /><span>Francisco Fuentes<small>Full Stack Engineer</small></span></div><p>© {new Date().getFullYear()}</p><nav aria-label="Redes sociales"><a href={professionalLinks.github}>GitHub</a><a href={professionalLinks.linkedin}>LinkedIn</a></nav></footer></div>
}

function Constellation() {
  return <figure className={styles.constellation} aria-labelledby="map-caption"><svg viewBox="0 0 620 600" aria-hidden="true"><g className={styles.orbit}><path d="M88 338C98 147 286 51 463 132c142 65 117 280 15 363" /><path d="M153 500C79 389 142 212 291 174c130-34 238 56 239 176" /></g><g className={styles.route}><path d="M101 407 214 302 337 363 479 213" /><path d="m337 363 69 118" /></g><g className={styles.nodes}><circle cx="101" cy="407" r="9"/><circle cx="214" cy="302" r="14"/><circle cx="337" cy="363" r="10"/><circle cx="479" cy="213" r="15"/><circle cx="406" cy="481" r="8"/></g><g className={styles.labels}><text x="70" y="442">DATOS</text><text x="166" y="272">SISTEMAS</text><text x="320" y="398">CLOUD</text><text x="424" y="180">OPTIMIZACIÓN</text></g><g className={styles.centerMark}><path d="M260 288v-62h49m-49 31h38m0 0 30-26m-30 26 30 26"/><circle cx="329" cy="231" r="6"/><circle cx="329" cy="283" r="6"/></g></svg><figcaption id="map-caption"><strong>Cuatro responsabilidades conectadas.</strong><span>Backend conecta datos, cloud y optimización para llevar soluciones completas a producción.</span><ul className={styles.mapNodes}><li>Sistemas</li><li>Datos</li><li>Cloud</li><li>Optimización</li></ul></figcaption></figure>
}

export function SectionHeading({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return <header className={styles.sectionHeading}><span>{index}</span><div><h2>{title}</h2><p>{subtitle}</p></div></header>
}

function WorkMotif({ type }: { type: SelectedWork['motif'] }) {
  return <div className={`${styles.motif} ${styles[type]}`} aria-hidden="true"><i /><i /><i /><i /></div>
}

export function ProjectList({ projects = selectedWork }: { projects?: SelectedWork[] }) {
  return <div className={styles.workList}>{projects.map((work) => <article className={`${styles.work}${work.id === '02' ? ` ${styles.work02}` : ''}`} key={work.id}><div className={styles.workIndex}><span>{work.id}</span><WorkMotif type={work.motif} /></div><div className={styles.workBody}><p className={styles.eyebrow}>{work.eyebrow}</p><h3>{work.title}</h3><p className={styles.workSummary}>{work.summary}</p><ul>{work.contributions.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>{work.metric && <div className={styles.metric}><span>{work.metric.label}</span><del>{work.metric.before}</del><strong>{work.metric.after}</strong></div>}<Link className={styles.textLink} to={`/proyectos/${work.slug}`}>Ver detalle <span aria-hidden="true">→</span></Link></div><dl className={styles.stack}>{Object.entries(work.stack).map(([layer, technologies]) => <div key={layer}><dt>{layer}</dt><dd>{technologies.join(' · ')}</dd></div>)}</dl></article>)}</div>
}

export function ContactSection() {
  return <section className={styles.contact}><span className={styles.contactOrbit} aria-hidden="true"/><p className={styles.kicker}>SIGUIENTE CONEXIÓN</p><h2>Construyamos algo que resuelva un problema real.</h2><p>Disponible para conversar sobre oportunidades Backend y Full Stack donde pueda aportar en sistemas, datos, cloud y evolución de producto.</p><div className={styles.actions}>{professionalLinks.email && <a className={styles.primaryAction} href={`mailto:${professionalLinks.email}`}>Escribir correo</a>}<a className={styles.primaryAction} href={professionalLinks.linkedin} target="_blank" rel="noreferrer">Conversemos en LinkedIn <span aria-hidden="true">↗</span></a><a className={styles.secondaryAction} href={professionalLinks.github} target="_blank" rel="noreferrer">Revisar GitHub</a></div></section>
}

export function PageIntro({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return <header className={styles.pageIntro}><p className={styles.kicker}>{kicker}</p><h1>{title}</h1><p>{description}</p></header>
}

export function ExperienceTimeline() {
  return <div className={styles.timeline}>{experience.map((item) => <article key={`${item.company}-${item.role}`}><div className={styles.timelineNode} aria-hidden="true"/><div className={styles.period}>{item.period ?? item.kind?.toUpperCase()}</div><div><p>{item.company}</p><h3>{item.role}</h3><p>{item.summary}</p>{item.technologies.length > 0 && <small>{item.technologies.join(' · ')}</small>}</div></article>)}</div>
}

export function ProfileContent() {
  const principles = [['Comprender el sistema','Antes de programar, identifico usuarios, reglas, restricciones y puntos de falla.'],['Arquitectura proporcional','No todo necesita microservicios. La complejidad debe ganarse con una necesidad real.'],['Responsabilidad completa','Una entrega incluye funcionamiento, riesgos, pruebas, documentación y próximos pasos.']]
  return <><div className={styles.profileIntro}><p>Me interesan especialmente los problemas donde primero hay que comprender un proceso y después transformarlo en una solución concreta. Trabajo mejor con objetivos y restricciones claras, autonomía para ejecutar y espacio para proponer mejoras.</p><p>No entiendo la arquitectura como una colección de patrones: intento elegir la solución más simple que proteja mantenibilidad, operación y evolución del producto.</p></div><div className={styles.principles}>{principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></>
}

export function PortfolioHome() {
  return <SiteShell><section className={styles.hero} aria-labelledby="hero-title"><div className={styles.heroCopy}><p className={styles.kicker}>FRANCISCO FUENTES</p><h1 id="hero-title">Full Stack Engineer</h1><p className={styles.focus}>TypeScript / Node.js <span>+</span> Python</p><p className={styles.statement}>Convierto procesos complejos en sistemas web claros, mantenibles y listos para producción.</p><p className={styles.disciplines}>Backend <i /> Cloud <i /> Producto</p><div className={styles.actions}><Link className={styles.primaryAction} to="/proyectos">Explorar proyectos <span aria-hidden="true">→</span></Link><Link className={styles.secondaryAction} to="/trayectoria">Ver trayectoria</Link></div><div className={styles.social}><a href={professionalLinks.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href={professionalLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></div><Constellation /></section><section className={styles.evidence} aria-label="Evidencia profesional">{evidence.map((item, index) => <article key={item.value}><span>0{index + 1}</span><strong>{item.value}</strong><p>{item.detail}</p></article>)}</section><section className={styles.section}><SectionHeading index="01" title="Trabajo seleccionado" subtitle="Una entrada breve; el detalle vive en su propia página." /><ProjectList projects={selectedWork.slice(0, 2)} /><div className={styles.sectionAction}><Link className={styles.secondaryAction} to="/proyectos">Ver todos los proyectos <span aria-hidden="true">→</span></Link></div></section><section className={`${styles.section} ${styles.homeSummary}`}><SectionHeading index="02" title="Trayectoria" subtitle="Experiencia construyendo software para operaciones reales." /><ExperienceTimeline /><Link className={styles.textLink} to="/trayectoria">Revisar trayectoria completa <span aria-hidden="true">→</span></Link></section><ContactSection /></SiteShell>
}

export function ProjectsPage() {
  return <SiteShell><PageIntro kicker="PROYECTOS" title="Trabajo y problemas resueltos" description="Una selección de sistemas en los que el contexto, las restricciones y las decisiones técnicas importan tanto como el stack." /><section className={styles.section}><ProjectList /></section><ContactSection /></SiteShell>
}

export function ProjectDetailPage({ project }: { project: SelectedWork }) {
  const study = project.caseStudy
  return <SiteShell><article className={styles.projectDetail}><Link className={styles.backLink} to="/proyectos">← Todos los proyectos</Link><PageIntro kicker={project.eyebrow} title={project.title} description={project.summary} /><div className={styles.projectMeta}>{study && <><div><span>ESTADO</span><strong>{study.status}</strong></div><div><span>PERIODO</span><strong>{study.period}</strong></div><div><span>ROL</span><strong>{study.role}</strong></div></>}</div><div className={styles.detailGrid}><section><h2>Aportes y alcance</h2><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></section><aside><h2>Tecnologías por responsabilidad</h2><dl className={styles.stack}>{Object.entries(project.stack).map(([layer, technologies]) => <div key={layer}><dt>{layer}</dt><dd>{technologies.join(' · ')}</dd></div>)}</dl>{project.metric && <div className={styles.metric}><span>{project.metric.label}</span><del>{project.metric.before}</del><strong>{project.metric.after}</strong></div>}</aside></div>{study && <div className={styles.caseStudy}><ContentSection index="01" title="Contexto y problema" paragraphs={study.context} /><ContentSection index="02" title="Arquitectura" paragraphs={study.architecture} /><section><header><span>03</span><h2>Decisiones técnicas</h2></header><div className={styles.decisions}>{study.decisions.map((decision) => <article key={decision.title}><h3>{decision.title}</h3><dl><dt>Contexto</dt><dd>{decision.context}</dd><dt>Decisión</dt><dd>{decision.decision}</dd><dt>Trade-off</dt><dd>{decision.tradeoff}</dd><dt>Consecuencia</dt><dd>{decision.consequence}</dd></dl></article>)}</div></section><ContentSection index="04" title="Desafío principal" paragraphs={study.challenge} /><ContentSection index="05" title="Calidad y validación" items={study.quality} /><ContentSection index="06" title="Resultados" items={study.results} /><ContentSection index="07" title="Qué cambiaría" items={study.retrospective} /></div>}</article><ContactSection /></SiteShell>
}

function ContentSection({ index, title, paragraphs, items }: { index: string; title: string; paragraphs?: string[]; items?: string[] }) {
  return <section><header><span>{index}</span><h2>{title}</h2></header>{paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{items && <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>}</section>
}

export function ExperiencePage() {
  return <SiteShell><PageIntro kicker="TRAYECTORIA" title="Del problema operacional al sistema en producción" description="Experiencia profesional, formación y aprendizaje continuo organizados por relevancia." /><section className={styles.section}><SectionHeading index="01" title="Experiencia y formación" subtitle="Trabajo profesional, universidad y certificación cloud." /><ExperienceTimeline /></section><LearningSection index="02" title="Formación complementaria" subtitle="Una selección breve, vinculada con el trabajo que desarrollo." items={featuredLearning.filter((item) => item.kind !== 'certification')} /><LearningSection index="03" title="Actualmente estudiando" subtitle="Formación activa, diferenciada de credenciales completadas." items={currentLearning} /><LearningSection index="04" title="Idiomas" subtitle="Evaluaciones externas disponibles." items={languages} compact /><ContactSection /></SiteShell>
}

function LearningSection({ index, title, subtitle, items, compact = false }: { index: string; title: string; subtitle: string; items: LearningItem[]; compact?: boolean }) {
  return <section className={`${styles.section} ${styles.learningSection}`}><SectionHeading index={index} title={title} subtitle={subtitle} /><div className={compact ? styles.learningCompact : styles.learningGrid}>{items.map((item) => <article key={item.title}><div className={styles.learningMeta}><span>{item.kind === 'badge' ? 'SKILL BADGE' : item.kind.toUpperCase()}</span>{item.status === 'in-progress' && <strong>EN PROGRESO</strong>}</div><h3>{item.title}</h3><p className={styles.learningProvider}>{item.provider} · {item.period}</p><p>{item.description}</p>{item.credentialUrl && <a href={item.credentialUrl}>Ver credencial <span aria-hidden="true">↗</span></a>}</article>)}</div></section>
}

export function ProfilePage() {
  return <SiteShell><PageIntro kicker="PERFIL" title="Cómo trabajo" description="Entender primero. Diseñar con criterio. Entregar algo útil." /><section className={`${styles.section} ${styles.profile}`}><ProfileContent /><section className={styles.capabilitySummary}><h2>Capacidades técnicas</h2><div>{capabilities.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p><small>{item.technologies.join(' · ')}</small></article>)}</div></section></section><ContactSection /></SiteShell>
}
