export default function WhyUsSection() {
  const features = [
    {
      number: '01',
      title: 'Modern Design',
      description: 'Professional websites designed around the business and brand.',
      detail:
        'Custom visual identity, deliberate editorial typography, and high-impact culinary showcases instead of generic cookie-cutter templates.',
    },
    {
      number: '02',
      title: 'Mobile First',
      description: 'Responsive experiences designed for customers using phones.',
      detail:
        'Customers increasingly discover and evaluate restaurants on their phones. We ensure ultra-fast load times, fluid tap targets, and thumb-friendly menus.',
    },
    {
      number: '03',
      title: 'Marketing Mindset',
      description: 'We consider how customers discover and interact with a business.',
      detail:
        'Built with local search discovery, Google Maps visibility, and social proof in mind from day one, not as an afterthought.',
    },
    {
      number: '04',
      title: 'Growth Ready',
      description: 'Websites and systems designed to support future marketing and automation.',
      detail:
        'Architected with clean code, direct WhatsApp reservation triggers, CRM integrations, and n8n webhook pipelines ready when you scale.',
    },
  ]

  return (
    <section className="why-section" id="why-us" aria-labelledby="why-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">WHY PI BLOOM</span>
          <h2 id="why-heading" className="section-title">
            Your digital presence should do more than just exist.
          </h2>
          <p className="section-desc">
            Most hospitality websites sit static. We build active digital systems engineered to turn
            casual discovery into packed tables.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="why-grid">
          {features.map((feature) => (
            <div key={feature.number} className="why-card">
              <div className="why-card-top">
                <span className="why-number">{feature.number}</span>
                <div className="why-corner-accent" aria-hidden="true"></div>
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-lead">{feature.description}</p>
              <p className="why-card-detail">{feature.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
