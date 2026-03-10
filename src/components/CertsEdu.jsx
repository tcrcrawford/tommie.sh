function AwsIcon() {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <text x="2" y="32" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="18" fill="white" letterSpacing="-1">AWS</text>
    </svg>
  )
}

function HashiCorpIcon() {
  return (
    <svg viewBox="0 0 48 48" width="22" height="22" fill="white">
      <polygon points="24,3 45,14 45,34 24,45 3,34 3,14" />
      <polygon points="24,12 36,18.5 36,29.5 24,36 12,29.5 12,18.5" fill="#7c3aed" />
    </svg>
  )
}

const certs = [
  {
    Icon: AwsIcon,
    iconStyle: { background: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
  },
  {
    Icon: HashiCorpIcon,
    iconStyle: { background: 'linear-gradient(135deg, #7c3aed, #a78bfa)' },
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
  },
]

const education = [
  {
    degree: 'Niveau 4 — Mediatechnologie (Webdevelopment)',
    school: 'MBO Utrecht',
    period: '2009 – 2013',
  },
  {
    degree: 'Niveau 3 — Netwerkbeheer',
    school: 'MBO Utrecht',
    period: '2008 – 2009',
  },
  {
    degree: 'Kader — Handel & Administratie',
    school: 'Oosterlicht College Vianen',
    period: '2003 – 2007',
  },
]

export default function CertsEdu() {
  return (
    <section id="certs-edu">
      <div className="container">
        <div className="two-col">
          <div>
            <p className="section-label">Certificeringen</p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              Professionele <em>certificeringen</em>
            </h2>
            {certs.map((cert) => (
              <div key={cert.name} className="cert-item">
                <div className="cert-card">
                  <div className="cert-icon-box" style={cert.iconStyle}>
                    <cert.Icon />
                  </div>
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-badge">✓ Verified</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="section-label">Opleiding</p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              Opleiding <em>&amp; achtergrond</em>
            </h2>
            {education.map((edu) => (
              <div key={edu.degree} className="edu-item">
                <div className="edu-card">
                  <div className="edu-icon-box">🎓</div>
                  <div>
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-school">{edu.school}</div>
                    <div className="edu-period">{edu.period}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
