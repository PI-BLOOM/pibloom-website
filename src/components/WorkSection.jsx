import { projectsData } from '../data/projectsData'

export default function WorkSection({ onSelectProject }) {
  return (
    <section className="work-section" id="work" aria-labelledby="work-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">PORTFOLIO</span>
          <h2 id="work-heading" className="section-title">
            Selected Work
          </h2>
          <p className="section-desc">
            Concept projects built to demonstrate what PI BLOOM can create.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="work-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              {/* Card Header Info */}
              <div className="project-card-header">
                <span className="project-number">PROJECT {project.number}</span>
                <span className="badge badge-green project-badge">{project.badge}</span>
              </div>

              {/* Visual Concept Composition Placeholder */}
              <div
                className={`project-visual-canvas project-visual--${project.previewType}`}
                aria-hidden="true"
              >
                {project.previewType === 'cafe' && (
                  <div className="visual-demo-inner cafe-demo">
                    <div className="demo-nav">
                      <span className="demo-logo">ORIGIN &amp; COFFEE</span>
                      <span className="demo-pill">Single Origin</span>
                    </div>
                    <div className="demo-dish-card">
                      <span className="dish-eyebrow">House Roast</span>
                      <span className="dish-title">Ethiopia Yirgacheffe</span>
                      <span className="dish-notes">Jasmine • Bergamot • Stonefruit</span>
                    </div>
                    <div className="demo-action-btn">
                      <span>Reserve Tasting Table</span>
                    </div>
                  </div>
                )}

                {project.previewType === 'restaurant' && (
                  <div className="visual-demo-inner restaurant-demo">
                    <div className="demo-nav">
                      <span className="demo-logo">AURA DINING</span>
                      <span className="demo-pill">Restaurant Concept</span>
                    </div>
                    <div className="demo-dish-card">
                      <span className="dish-eyebrow">Autumn Tasting Menu</span>
                      <span className="dish-title">7-Course Culinary Journey</span>
                      <span className="dish-notes">Local SEO Optimized • Profile Growth Strategy</span>
                    </div>
                    <div className="demo-action-btn">
                      <span>Instant WhatsApp Inquiry</span>
                    </div>
                  </div>
                )}

                {project.previewType === 'system' && (
                  <div className="visual-demo-inner system-demo">
                    <div className="demo-nav">
                      <span className="demo-logo">AUTOMATION CORE</span>
                      <span className="demo-pill">n8n Pipeline</span>
                    </div>
                    <div className="demo-workflow-grid">
                      <div className="workflow-card">
                        <span className="wf-tag">STEP 1</span>
                        <span className="wf-title">Website Booking</span>
                      </div>
                      <span className="wf-connector">→</span>
                      <div className="workflow-card wf-card--highlight">
                        <span className="wf-tag">STEP 2</span>
                        <span className="wf-title">Instant WhatsApp Alert</span>
                      </div>
                    </div>
                    <div className="demo-action-btn">
                      <span>Sheets Guestbook Sync</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="project-card-body">
                <div className="project-title-row">
                  <h3 className="project-name">{project.title}</h3>
                </div>

                <p className="project-services">{project.services}</p>

                <div className="project-tags">
                  {project.serviceTags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm view-project-btn"
                    onClick={() => onSelectProject(project)}
                    aria-label={`View details for ${project.title}`}
                  >
                    <span>View Project</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
