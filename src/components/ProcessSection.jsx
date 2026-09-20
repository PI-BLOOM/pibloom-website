import { processData } from '../data/processData'

export default function ProcessSection() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">PROCESS</span>
          <h2 id="process-heading" className="section-title">
            How we work
          </h2>
          <p className="section-desc">
            A transparent, five-step progression from initial concept to sustained digital growth.
          </p>
        </div>

        {/* Structured Timeline Sequence */}
        <div className="process-sequence" role="list">
          {processData.map((item, index) => (
            <div key={item.step} className="process-step-row" role="listitem">
              <div className="step-num-col">
                <span className="step-badge">{item.step}</span>
                {index < processData.length - 1 && (
                  <div className="step-line" aria-hidden="true"></div>
                )}
              </div>

              <div className="step-card">
                <div className="step-card-header">
                  <span className="step-action-tag">{item.title}</span>
                  <span className="step-deliverable-label">Key Output: {item.output}</span>
                </div>
                <h3 className="step-headline">{item.headline}</h3>
                <p className="step-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
