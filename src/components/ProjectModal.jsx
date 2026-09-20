import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-project-num">PROJECT {project.number}</span>
            <span className="badge badge-green">{project.badge}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h3 id="modal-project-title" className="modal-title">
            {project.title}
          </h3>
          <p className="modal-tagline">{project.tagline}</p>
          <p className="modal-services-pill">{project.services}</p>

          <p className="modal-summary">{project.summary}</p>

          {/* Concept Showcase Graphic */}
          <div className="modal-showcase-box">
            <div className="showcase-status-bar">
              <span className="showcase-dot"></span>
              <span className="showcase-meta">Concept Architecture Simulation</span>
            </div>
            <div className="showcase-inner">
              <div className="showcase-card">
                <span className="showcase-label">Core System</span>
                <span className="showcase-val">{project.services}</span>
              </div>
              <div className="showcase-card">
                <span className="showcase-label">Focus Area</span>
                <span className="showcase-val">{project.tagline}</span>
              </div>
              <div className="showcase-card">
                <span className="showcase-label">Status</span>
                <span className="showcase-val text-green">Ready for Deployment</span>
              </div>
            </div>
          </div>

          {/* Key Concept Features */}
          <div className="modal-section">
            <h4 className="modal-section-title">Key Architectural Features</h4>
            <ul className="modal-feature-list">
              {project.conceptHighlights.map((highlight, idx) => (
                <li key={idx} className="modal-feature-item">
                  <span className="feature-bullet" aria-hidden="true">
                    ✦
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technologies &amp; Integrations</h4>
            <div className="modal-tags">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="badge badge-subtle">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Future Real Client Link Placeholder */}
          <div className="modal-future-note">
            <span className="future-icon">ℹ️</span>
            <span>
              This is a studio concept build demonstrating our engineering and marketing capabilities.
              Custom hospitality builds are deployed on client-dedicated domains with live integrations.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            onClick={onClose}
          >
            Inquire About Similar Build
          </a>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onClose}
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  )
}
