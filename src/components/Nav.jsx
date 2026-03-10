import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  function toggleMenu() {
    setMenuOpen(prev => !prev)
  }

  return (
    <nav id="main-nav" className={menuOpen ? 'menu-open' : ''}>
      <a href="#hero-wrap" className="logo-wrap" onClick={closeMenu}>
        <div className="logo-badge">&gt;_</div>
        <div className="logo-text">
          tommie<span className="logo-domain">.sh</span>
        </div>
      </a>

      <div className="nav-menu">
        <ul>
          <li><a href="#about" onClick={closeMenu}>Over mij</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#experience" onClick={closeMenu}>Ervaring</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projecten</a></li>
          <li><a href="#certs-edu" onClick={closeMenu}>Opleiding</a></li>
        </ul>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>Contact</a>
      </div>

      <button
        className={`nav-toggle${menuOpen ? ' open' : ''}`}
        aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}
