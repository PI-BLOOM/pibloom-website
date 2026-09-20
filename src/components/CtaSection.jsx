export default function CtaSection() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <span className="section-label">GET STARTED</span>
            <h2 id="cta-heading" className="cta-headline">
              Let&apos;s build something that blooms.
            </h2>
            <p className="cta-subtext">
              Ready to give your restaurant or café a stronger digital presence?
            </p>
            <div className="cta-action-wrap">
              <a href="#contact" className="btn btn-accent btn-lg">
                <span>Start a Conversation</span>
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
            </div>
          </div>
          {/* Subtle geometric background line */}
          <div className="cta-decor" aria-hidden="true">
            <svg width="280" height="280" viewBox="0 0 200 200" fill="none">
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="rgba(79, 157, 105, 0.15)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M100 40C100 40 120 75 120 100C120 111 111 120 100 120C89 120 80 111 80 100C80 75 100 40 100 40Z"
                fill="rgba(79, 157, 105, 0.25)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
