const jobs = [
  {
    title: 'Senior Developer',
    company: 'OSW B.V.',
    companyExtra: null,
    period: 'jan 2026 – heden',
    tags: ['web'],
    bullets: [
      'Ontwikkelen van schaalbare PHP/Symfony webapplicaties en RESTful API\'s',
      'Verantwoordelijk voor architecturele beslissingen en refactoring van bestaande systemen',
      'Bewaken van codekwaliteit via clean code, SOLID-principes en security-reviews',
    ],
  },
  {
    title: 'Backend Developer & DevOps Engineer',
    company: 'Immer — Digital Agency',
    companyExtra: null,
    period: 'apr 2021 – okt 2025 · 4 jr 7 mnd',
    tags: ['web', 'cloud'],
    bullets: [
      'Hybride rol: Drupal backend development én het opzetten van cloudinfrastructuur op AWS',
      'CI/CD-pipelines geautomatiseerd en Kubernetes-clusters opgezet met Terraform en Docker',
      'DevOps-volwassenheid structureel verhoogd door monitoring, GitOps en security-best-practices te introduceren',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Appnovation',
    companyExtra: '(v/h Wunderkraut)',
    period: 'mrt 2016 – apr 2021 · 5 jr 2 mnd',
    tags: ['web'],
    bullets: [
      'Ontwikkeling van grootschalige Drupal-platforms voor klanten in uiteenlopende sectoren',
      'Volledige front-end en back-end implementatie: maatwerk modules, thema\'s en API-koppelingen',
      'Snel schakelen tussen meerdere klantcontexten en technische omgevingen',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Basebuilder',
    companyExtra: null,
    period: 'jun 2015 – feb 2016 · 9 mnd',
    tags: ['web'],
    bullets: [
      'Backend development voor lead-verwerkingsplatform met externe API-integraties',
      'Optimalisatie van gegevensroutering en verwerkingspijplijn',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'ProdaCom Internet & Ontwikkeling',
    companyExtra: null,
    period: 'feb 2013 – mei 2015 · 2 jr 4 mnd',
    tags: ['web'],
    bullets: [
      'Full stack webontwikkeling: bedrijfswebsites en interne applicaties in HTML, CSS, JavaScript en PHP',
      'Fundament gelegd voor technische kwaliteit en oog voor gebruikerservaring',
    ],
  },
]

const tagLabels = {
  cloud: 'Cloud & Infrastructure',
  web: 'Web Development',
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Werkervaring</p>
        <h2>Carrière <em>overzicht</em></h2>
        <div className="timeline">
          {jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-card">
                <div className="job-header">
                  <div>
                    <div className="job-title">{job.title}</div>
                    <div className="job-company">
                      {job.company}
                      {job.companyExtra && (
                        <span style={{ color: 'var(--muted)', fontWeight: 400 }}> {job.companyExtra}</span>
                      )}
                    </div>
                  </div>
                  <div className="job-meta">{job.period}</div>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="job-tags">
                  {job.tags.map(t => (
                    <span key={t} className={`job-tag ${t}`}>{tagLabels[t]}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
