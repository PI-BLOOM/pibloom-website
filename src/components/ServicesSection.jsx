import { servicesData } from '../data/servicesData'

export default function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">OUR SERVICES</span>
          <h2 id="services-heading" className="section-title">
            Everything you need to grow online.
          </h2>
          <p className="section-desc">
            A cohesive three-part system designed specifically for dining establishments to attract,
            delight, and retain guests.
          </p>

          {/* Connected Pathway Indicator */}
          <div className="pipeline-indicator" aria-label="Service progression: Build to Grow to Automate">
            <span className="pipeline-step pipeline-step--active">BUILD</span>
            <span className="pipeline-connector" aria-hidden="true">→</span>
            <span className="pipeline-step pipeline-step--active">GROW</span>
            <span className="pipeline-connector" aria-hidden="true">→</span>
            <span className="pipeline-step pipeline-step--active">AUTOMATE</span>
          </div>
        </div>

        {/* 3 Column Service Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card-header">
                <div className="service-phase-badge">
                  <span className="service-number">{service.step}</span>
                  <span className="service-phase-name">{service.phase}</span>
                </div>
                <span className="badge badge-green">{service.badge}</span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-summary">{service.summary}</p>

              <div className="service-deliverables-header">
                <span>Included Capabilities</span>
              </div>

              <ul className="service-deliverables-list" aria-label={`Deliverables for ${service.title}`}>
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="service-deliverable-item">
                    <span className="deliverable-check" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="#4F9D69"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <a href="#contact" className="service-inquire-link">
                  <span>Inquire for {service.phase}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
