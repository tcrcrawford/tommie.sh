export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">Over mij</p>
        <h2>Cloud-native Engineer <em>gespecialiseerd in schaalbare infrastructuur en DevOps</em></h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Met 13+ jaar technische ervaring richt ik mij volledig op cloud engineering. Ik ontwerp,
              bouw en beheer schaalbare cloud-native infrastructuur: van containerplatforms en
              Terraform-modules tot geautomatiseerde CI/CD-pipelines en productie-ready cloudomgevingen.
            </p>
            <p>
              Mijn achtergrond als developer geeft mij een uniek voordeel: ik begrijp wat applicaties
              nodig hebben en vertaal dat direct naar robuuste, veilige en kostenefficiënte infrastructuur.
              Of het nu gaat om een cloud-migratie, het opzetten van een GitOps-workflow, security-hardening
              of het schaalbaar maken van een platform — ik lever snel en zonder lange aanlooptijd.
            </p>
            <p>
              Beschikbaar voor freelance cloudopdrachten én vaste functies als Cloud Engineer,
              DevOps Engineer of Platform Engineer.
            </p>
          </div>
          <div className="about-cards">
            <div className="card">
              <div className="card-title">Profiel</div>
              <div className="card-value">Cloud-native Engineer — Utrecht Area</div>
            </div>
            <div className="card">
              <div className="card-title">Beschikbaarheid</div>
              <div className="card-value">Freelance opdrachten &amp; vaste posities</div>
            </div>
            <div className="card">
              <div className="card-title">Certificeringen</div>
              <div className="card-value">AWS Certified · HashiCorp Terraform Associate</div>
            </div>
            <div className="card">
              <div className="card-title">Niche</div>
              <div className="card-value">Cloud-native · Kubernetes · Terraform · IaC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
