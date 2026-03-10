function LocationPin() {
  return (
    <svg viewBox="0 0 16 16">
      <path d="M8 0C5.24 0 3 2.24 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 7.5C6.62 7.5 5.5 6.38 5.5 5S6.62 2.5 8 2.5 10.5 3.62 10.5 5 9.38 7.5 8 7.5z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <div id="hero-wrap">
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>

      <div id="hero">
        {/* LEFT: text */}
        <div className="hero-left">
          <img src="/photo.png" alt="Tommie Crawford" className="hero-avatar-mobile" />
          <h1>
            Tommie<br />
            <span className="name-accent">Crawford</span>
          </h1>
          <p className="hero-subtitle">
            Cloud-native Engineer gespecialiseerd in schaalbare cloudinfrastructuur,
            container orchestration en Infrastructure as Code — beschikbaar voor opdrachten en vaste posities.
          </p>
          <p className="hero-location">
            <LocationPin />
            Utrecht Area, Nederland
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Neem contact op</a>
            <a
              href="https://www.linkedin.com/in/tommiecrawford/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">13+</div>
              <div className="stat-label">Jaar ervaring</div>
            </div>
            <div className="stat">
              <div className="stat-num">2×</div>
              <div className="stat-label">Gecertificeerd</div>
            </div>
            <div className="stat">
              <div className="stat-num">IaC</div>
              <div className="stat-label">Terraform · Docker</div>
            </div>
          </div>
        </div>

        {/* RIGHT: visual */}
        <div className="hero-visual">
          <div className="avatar-card">
            <img src="/photo.png" alt="Tommie Crawford" className="avatar-photo" />
            <div className="avatar-text">
              <div className="avatar-name">Tommie Crawford</div>
              <div className="avatar-role">Cloud-native Engineer</div>
              <div className="avatar-location-tag">
                <LocationPin />
                Utrecht, Nederland
              </div>
            </div>
          </div>
          <div className="cert-card-mini">
            <div className="cert-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
                <text x="4" y="27" fontFamily="Arial" fontWeight="900" fontSize="16" fill="white">AWS</text>
              </svg>
            </div>
            <div>
              <div className="cert-text-name">AWS Cloud Practitioner</div>
              <div className="cert-text-issuer">Amazon Web Services · Verified</div>
            </div>
          </div>
          <div className="cert-card-mini">
            <div className="cert-icon" style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 40 40" width="20" height="20" fill="white">
                <polygon points="20,4 36,12 36,28 20,36 4,28 4,12" />
                <polygon points="20,10 30,15 30,25 20,30 10,25 10,15" fill="#7c3aed" />
              </svg>
            </div>
            <div>
              <div className="cert-text-name">Terraform Associate</div>
              <div className="cert-text-issuer">HashiCorp · Verified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
