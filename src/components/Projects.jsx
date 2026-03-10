const projects = [
  {
    kind: 'cloud',
    kindLabel: 'Cloud & Infrastructure',
    title: 'Multi-omgeving Kubernetes-infrastructuur',
    desc: 'Ontworpen en geïmplementeerd: volledige AWS-infrastructuur voor een digital agency met meerdere klantomgevingen. Kubernetes-clusters opgezet met Terraform, CI/CD-pipelines geautomatiseerd en monitoring ingericht voor productie-stabiliteit.',
    stack: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitOps'],
    note: 'Gerealiseerd bij Immer — Digital Agency',
  },
  {
    kind: 'web',
    kindLabel: 'Web Development',
    title: 'Grootschalig Drupal CMS-platform',
    desc: 'Ontwikkeling van een multitenant Drupal-platform voor een enterprise klant, inclusief maatwerk modules, REST API-koppelingen met externe systemen en een geoptimaliseerde content workflow voor redacteuren.',
    stack: ['PHP', 'Drupal', 'REST API', 'MySQL', 'Twig'],
    note: 'Gerealiseerd bij Appnovation',
  },
  {
    kind: 'fullstack',
    kindLabel: 'Full Stack',
    title: 'PHP/Symfony API Backend',
    desc: 'Architectuur en implementatie van een RESTful API backend voor een enterprise webapplicatie. Verantwoordelijk voor API-design, refactoring van legacy-code en het borgen van performance en beveiliging.',
    stack: ['PHP', 'Symfony', 'REST API', 'Docker', 'MySQL'],
    note: 'Gerealiseerd bij OSW B.V.',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Projecten</p>
        <h2>Uitgelichte <em>projecten</em></h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <span className={`project-kind ${p.kind}`}>{p.kindLabel}</span>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              <p className="project-note">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
