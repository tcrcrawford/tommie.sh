const skillGroups = [
  {
    title: 'Cloud Platforms',
    tags: [
      { label: 'AWS', color: 'green' },
      { label: 'Cloud-native', color: 'green' },
      { label: 'Containers', color: 'green' },
      { label: 'Serverless', color: 'green' },
      { label: 'Managed Services', color: 'green' },
    ],
  },
  {
    title: 'Infrastructure as Code',
    tags: [
      { label: 'Terraform', color: 'green' },
      { label: 'Helm', color: 'green' },
    ],
  },
  {
    title: 'Container Orchestration',
    tags: [
      { label: 'Kubernetes', color: 'green' },
      { label: 'Docker', color: 'green' },
    ],
  },
  {
    title: 'DevOps & CI/CD',
    tags: [
      { label: 'CI/CD Pipelines', color: 'orange' },
      { label: 'GitOps', color: 'orange' },
      { label: 'GitHub Actions', color: 'orange' },
      { label: 'Monitoring & Alerting', color: 'orange' },
      { label: 'Linux', color: 'orange' },
      { label: 'Security & Hardening', color: 'orange' },
    ],
  },
  {
    title: 'Cloud Architectuur',
    tags: [
      { label: 'Microservices', color: 'cyan' },
      { label: 'Scalability', color: 'cyan' },
      { label: 'High Availability', color: 'cyan' },
      { label: 'Cost Optimisation', color: 'cyan' },
      { label: 'Disaster Recovery', color: 'cyan' },
    ],
  },
  {
    title: 'Backend (aanvullend)',
    tags: [
      { label: 'PHP', color: 'gray' },
      { label: 'Symfony', color: 'gray' },
      { label: 'REST API', color: 'gray' },
      { label: 'MySQL', color: 'gray' },
    ],
  },
  {
    title: 'Tooling & AI',
    tags: [
      { label: 'Git', color: 'ai' },
      { label: 'Claude Code', color: 'ai' },
      { label: 'GitHub Copilot', color: 'ai' },
      { label: 'Ollama', color: 'ai' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">Vaardigheden</p>
        <h2>Tech stack <em>&amp; expertise</em></h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <div className="skill-group-title">{group.title}</div>
              <div className="tags">
                {group.tags.map((tag) => (
                  <span key={tag.label} className={`tag${tag.color ? ' ' + tag.color : ''}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
