export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">Over mij</p>
        <h2>Senior engineer <em>met een volledige stack — van webapplicatie tot cloud</em></h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Met 13+ jaar ervaring beheers ik twee disciplines volledig: ik bouw robuuste
              webapplicaties in PHP en Symfony — van complexe RESTful API's en maatwerk Drupal-platforms
              tot geoptimaliseerde backends met clean architecture — én ik ontwerp en beheer schaalbare
              cloudinfrastructuur op AWS met Kubernetes, Terraform en Docker.
            </p>
            <p>
              Die combinatie maakt het verschil: ik denk mee op applicatieniveau én op
              infrastructuurniveau. Of het nu gaat om het moderniseren van een legacy-systeem,
              het opzetten van CI/CD-pipelines, het verbeteren van security of het schaalbaar
              maken van een platform — ik pak het van begin tot eind op.
            </p>
            <p>
              Mijn kracht is het snel doorgronden van zowel code als infrastructuur, en het
              direct leveren van oplossingen met meetbare impact op kwaliteit, stabiliteit en
              schaalbaarheid — zonder lange aanlooptijd.
            </p>
          </div>
          <div className="about-cards">
            <div className="card">
              <div className="card-title">Profiel</div>
              <div className="card-value">Cloud &amp; Web Engineer — Utrecht Area</div>
            </div>
            <div className="card">
              <div className="card-title">Ervaring</div>
              <div className="card-value">13+ jaar in webontwikkeling &amp; cloud</div>
            </div>
            <div className="card">
              <div className="card-title">Certificeringen</div>
              <div className="card-value">AWS Certified · HashiCorp Terraform Associate</div>
            </div>
            <div className="card">
              <div className="card-title">Talen</div>
              <div className="card-value">Nederlands (moedertaal) · Engels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
