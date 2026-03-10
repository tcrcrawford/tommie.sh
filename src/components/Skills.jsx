const skillGroups = [
  {
    title: 'Backend & Webontwikkeling',
    tags: [
      { label: 'PHP' },
      { label: 'Symfony' },
      { label: 'Drupal' },
      { label: 'REST API' },
      { label: 'MySQL' },
      { label: 'API Integraties' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    tags: [
      { label: 'AWS', color: 'green' },
      { label: 'Kubernetes', color: 'green' },
      { label: 'Docker', color: 'green' },
      { label: 'Terraform', color: 'green' },
      { label: 'Infrastructure as Code', color: 'green' },
    ],
  },
  {
    title: 'DevOps & CI/CD',
    tags: [
      { label: 'CI/CD Pipelines', color: 'orange' },
      { label: 'GitOps', color: 'orange' },
      { label: 'Monitoring', color: 'orange' },
      { label: 'Security', color: 'orange' },
      { label: 'Linux', color: 'orange' },
    ],
  },
  {
    title: 'Frontend & Web',
    tags: [
      { label: 'HTML/CSS', color: 'cyan' },
      { label: 'JavaScript', color: 'cyan' },
      { label: 'TypeScript', color: 'cyan' },
      { label: 'Twig', color: 'cyan' },
      { label: 'Responsive Design', color: 'cyan' },
    ],
  },
  {
    title: 'Principes',
    tags: [
      { label: 'SOLID', color: 'gray' },
      { label: 'Clean Code', color: 'gray' },
      { label: 'Microservices', color: 'gray' },
      { label: 'Scalability', color: 'gray' },
    ],
  },
  {
    title: 'Tooling & AI',
    tags: [
      { label: 'Git', color: 'gray' },
      { label: 'VS Code', color: 'gray' },
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
