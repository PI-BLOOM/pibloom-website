import { useState } from 'react'

const ENQUIRY_FORM_URL = 'https://forms.gle/WKTrQcgbJ4evAg2U6'

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello.pibloom@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">CONTACT US</span>
          <h2 id="contact-heading" className="section-title">
            Let&apos;s talk.
          </h2>
          <p className="section-desc">
            Tell us a little about your business and what you&apos;d like to build.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-sidebar">
            <div className="contact-card">
              <h3 className="sidebar-title">Direct Studio Channels</h3>
              <p className="sidebar-desc">
                We work directly with restaurant and café owners to build modern digital
                experiences that support growth.
              </p>

              <div className="channel-list">
                {/* Email Item */}
                <div className="channel-item">
                  <div className="channel-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
                      <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Email Inquiries</span>
                    <a href="mailto:hello.pibloom@gmail.com" className="channel-value">
                      hello.pibloom@gmail.com
                    </a>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address to clipboard"
                    title="Copy email"
                  >
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* Instagram Item */}
                <div className="channel-item">
                  <div className="channel-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Instagram</span>
                    <a
                      href="https://instagram.com/pibloom.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-value"
                    >
                      @pibloom.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Studio Ethos Note */}
              <div className="studio-promise-box">
                <span className="promise-tag">OUR APPROACH</span>
                <p className="promise-text">
                  Direct contact with Prince Raj &amp; Isha. No layers of account managers, no generic
                  outsourcing. Just clean engineering and bespoke growth.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Panel */}
          <div className="contact-form-panel">
            <div className="contact-cta-panel">
              <div className="contact-cta-eyebrow">
                <span className="section-label">START A PROJECT</span>
              </div>

              <h3 className="contact-cta-headline">
                Ready to grow your restaurant or café?
              </h3>

              <p className="contact-cta-body">
                Tell us about your business, what you&apos;d like to improve, and which services
                interest you. Our short enquiry form takes under two minutes to complete.
              </p>

              <ul className="contact-cta-checklist" aria-label="What we cover in the enquiry">
                <li>
                  <span className="cta-check" aria-hidden="true">✓</span>
                  Your current online presence
                </li>
                <li>
                  <span className="cta-check" aria-hidden="true">✓</span>
                  Services you&apos;re interested in
                </li>
                <li>
                  <span className="cta-check" aria-hidden="true">✓</span>
                  Project goals &amp; timeline
                </li>
              </ul>

              <a
                id="contact-start-project-btn"
                href={ENQUIRY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg contact-cta-btn"
              >
                <span>Start a Project</span>
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

              <p className="contact-cta-note">
                🔒 Opens in a new tab &mdash; no account required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
