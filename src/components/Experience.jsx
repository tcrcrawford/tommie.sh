const jobs = [
  {
    title: 'Cloud & Software Engineer',
    company: 'OSW B.V.',
    companyExtra: null,
    period: 'jan 2026 – heden',
    tags: ['cloud', 'web'],
    bullets: [
      'Meedenken over cloudinfrastructuur en architecturele keuzes binnen het platform',
      'Bijdragen aan schaalbaarheid, security en betrouwbaarheid van de omgeving',
      'Backend development in PHP/Symfony als aanvulling op cloud- en infrastructuurwerk',
    ],
  },
  {
    title: 'Cloud & DevOps Engineer',
    company: 'Immer — Digital Agency',
    companyExtra: null,
    period: 'apr 2021 – okt 2025 · 4 jr 7 mnd',
    tags: ['cloud', 'web'],
    bullets: [
      'Ontwerpen en beheren van AWS-cloudinfrastructuur: VPC, ECS, RDS, S3, IAM en CloudWatch',
      'Cloudinfrastructuur ontworpen en beheerd voor grootschalige enterprise-websites met hoge beschikbaarheid op AWS',
      'CI/CD-pipelines geautomatiseerd, GitOps ingevoerd en security-best-practices doorgevoerd',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Appnovation',
    companyExtra: '(v/h Wunderkraut)',
    period: 'mrt 2016 – apr 2021 · 5 jr 2 mnd',
    tags: ['web'],
    bullets: [
      'Ontwikkeling van grootschalige webplatforms voor klanten in uiteenlopende sectoren',
      'Eerste hands-on ervaring met deploymentprocessen, serverbeheer en technische omgevingen',
      'Opgebouwde brede technische basis die later de stap naar cloud engineering mogelijk maakte',
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
      'Beginjaren in softwareontwikkeling: bedrijfswebsites en interne applicaties',
      'Fundament gelegd voor technische kwaliteit en systeembegrip',
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
                    <h3 className="job-title">{job.title}</h3>
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
