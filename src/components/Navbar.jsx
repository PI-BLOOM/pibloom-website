import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}
      role="banner"
    >
      <div className="container nav-container">
        {/* Brand Mark */}
        <a href="#" className="brand-logo" aria-label="PI BLOOM Studio Home">
          <span className="brand-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3C12 3 16 9 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14C8 9 12 3 12 3Z"
                fill="#4F9D69"
              />
              <circle cx="12" cy="19" r="2" fill="#A8D672" />
            </svg>
          </span>
          <span className="brand-text">PI BLOOM</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm nav-cta-desktop">
            Let&apos;s Talk
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={`hamburger-bar ${mobileMenuOpen ? 'hamburger-bar--open' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-inner">
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="mobile-link"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-cta-wrapper">
              <a
                href="#contact"
                className="btn btn-accent mobile-cta-btn"
                onClick={handleLinkClick}
              >
                Let&apos;s Talk
              </a>
              <p className="mobile-drawer-tagline">Build. Grow. Bloom.</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
