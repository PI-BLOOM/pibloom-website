export default function Footer() {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/pibloom.in',
      handle: '@pibloom.in',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/PI-BLOOM',
      handle: 'github.com/PI-BLOOM',
    },
    {
      name: 'Email',
      href: 'mailto:hello.pibloom@gmail.com',
      handle: 'hello.pibloom@gmail.com',
    },
  ]

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <span className="brand-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3C12 3 16 9 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14C8 9 12 3 12 3Z"
                    fill="#4F9D69"
                  />
                  <circle cx="12" cy="19" r="2" fill="#A8D672" />
                </svg>
              </span>
              <span className="footer-brand-name">PI BLOOM</span>
            </div>

            <p className="footer-brand-category">Digital Growth Studio</p>
            <p className="footer-brand-tagline">Build. Grow. Bloom.</p>
            <p className="footer-brand-desc">
              Helping restaurants and cafés build a stronger online presence through modern websites,
              digital marketing, and growth automation.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div className="footer-social-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-social-list">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.name === 'Email' ? '_self' : '_blank'}
                    rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
                    className="footer-social-link"
                  >
                    <span className="social-platform">{item.name}</span>
                    <span className="social-handle">{item.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2026 PI BLOOM. All rights reserved.
          </p>
          <div className="footer-badges">
            <span className="footer-dot-badge">
              <span className="live-dot" aria-hidden="true"></span>
              <span>Open for New Projects</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
