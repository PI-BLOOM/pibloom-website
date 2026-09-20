import VisualComposition from './VisualComposition'

export default function OpeningSection() {
  return (
    <section className="opening-section" id="opening" aria-labelledby="opening-heading">
      <div className="container">
        <div className="opening-grid">
          {/* Left / Editorial Content */}
          <div className="opening-content">
            <div className="opening-badge-wrapper">
              <span className="section-label">DIGITAL GROWTH STUDIO</span>
            </div>

            <h1 id="opening-heading" className="opening-headline">
              <span className="headline-line">Build.</span>
              <span className="headline-line">Grow.</span>
              <span className="headline-line headline-line--highlight">Bloom.</span>
            </h1>

            <p className="opening-lead">
              We help restaurants &amp; cafés build a strong online presence and attract more
              customers through modern websites and digital marketing.
            </p>

            <div className="opening-actions">
              <a href="#work" className="btn btn-primary">
                <span>View Our Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let&apos;s Talk
              </a>
            </div>

            {/* Studio quick metric / focus pillar */}
            <div className="opening-features-strip">
              <div className="strip-item">
                <span className="strip-dot"></span>
                <span>Crafted for Dining &amp; Cafés</span>
              </div>
              <div className="strip-item">
                <span className="strip-dot"></span>
                <span>Fast &amp; Mobile-First</span>
              </div>
              <div className="strip-item">
                <span className="strip-dot"></span>
                <span>WhatsApp &amp; n8n Ready</span>
              </div>
            </div>
          </div>

          {/* Right / Visual Studio Composition */}
          <div className="opening-visual-wrapper">
            <VisualComposition />
          </div>
        </div>
      </div>
    </section>
  )
}
