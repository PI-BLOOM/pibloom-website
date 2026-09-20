import { useState } from 'react'

export default function VisualComposition() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="studio-visual-card" aria-label="Interactive preview of PI BLOOM systems">
      {/* Visual Window Header */}
      <div className="studio-visual-topbar">
        <div className="topbar-dots" aria-hidden="true">
          <span className="dot dot--red"></span>
          <span className="dot dot--yellow"></span>
          <span className="dot dot--green"></span>
        </div>
        <div className="topbar-status">
          <span className="pulse-indicator"></span>
          <span className="status-text">Hospitality Growth Engine • Live</span>
        </div>
        <div className="topbar-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'overview'}
            className={`visual-tab ${activeTab === 'overview' ? 'visual-tab--active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            System
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'website'}
            className={`visual-tab ${activeTab === 'website' ? 'visual-tab--active' : ''}`}
            onClick={() => setActiveTab('website')}
          >
            Website
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'automation'}
            className={`visual-tab ${activeTab === 'automation' ? 'visual-tab--active' : ''}`}
            onClick={() => setActiveTab('automation')}
          >
            Automation
          </button>
        </div>
      </div>

      {/* Visual Window Body */}
      <div className="studio-visual-body">
        {/* Layer 1: The Modern Café Interface */}
        <div className="preview-phone-mockup">
          <div className="phone-screen">
            {/* Café Header */}
            <div className="cafe-header">
              <div className="cafe-brand-badge">
                <span className="cafe-dot"></span>
                <span className="cafe-name">ATELIER MATCHA &amp; CO.</span>
              </div>
              <span className="cafe-status-tag">Table 04 • Open</span>
            </div>

            {/* Menu Item Preview */}
            <div className="cafe-item-card">
              <div className="item-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 8H19C20.1046 8 21 8.89543 21 10V11C21 12.1046 20.1046 13 19 13H18"
                    stroke="#4F9D69"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 8H18V14C18 16.7614 15.7614 19 13 19H10C7.23858 19 5 16.7614 5 14V8Z"
                    stroke="#171717"
                    strokeWidth="1.75"
                  />
                  <path d="M7 3V5M11 3V5M15 3V5" stroke="#4F9D69" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </div>
              <div className="item-info">
                <div className="item-title-row">
                  <span className="item-name">Ceremonial Iced Matcha</span>
                  <span className="item-price">₹280</span>
                </div>
                <span className="item-desc">Single-origin Uji green tea, oat milk, cold foam</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="cafe-actions-row">
              <div className="action-pill action-pill--primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.5352 3.38534 14.9806 4.0628 16.2447L3 21L7.87679 19.9882C9.10237 20.6385 10.5097 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Reserve on WhatsApp</span>
              </div>
              <div className="action-pill action-pill--ghost">
                <span>View Full Menu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2: Growth & Marketing Pill */}
        <div className="growth-metric-card">
          <div className="growth-card-top">
            <span className="growth-badge">LOCAL SEO &amp; MAPS</span>
            <span className="growth-rank">Local Discovery</span>
          </div>
          <div className="growth-stat-row">
            <div className="stat-item">
              <span className="stat-label">Core System</span>
              <span className="stat-tag">Direct Table Inquiries</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-label">Growth Model</span>
              <span className="stat-tag">Profile Growth Strategy</span>
            </div>
          </div>
        </div>

        {/* Layer 3: Automated Workflow Pipe (Website -> WhatsApp -> Sheets) */}
        <div className="automation-flow-card">
          <div className="automation-flow-header">
            <div className="flow-title-group">
              <span className="flow-icon" aria-hidden="true">⚡</span>
              <span className="flow-title">n8n Growth Automation</span>
            </div>
            <span className="flow-badge">Real-time</span>
          </div>
          <div className="flow-nodes">
            <div className="flow-node">
              <span className="node-indicator"></span>
              <span className="node-text">Website Lead</span>
            </div>
            <span className="flow-arrow" aria-hidden="true">→</span>
            <div className="flow-node flow-node--active">
              <span className="node-indicator"></span>
              <span className="node-text">WhatsApp Alert</span>
            </div>
            <span className="flow-arrow" aria-hidden="true">→</span>
            <div className="flow-node">
              <span className="node-indicator"></span>
              <span className="node-text">Google Sheets</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Window Footer Banner */}
      <div className="studio-visual-bottom-bar">
        <span className="bottom-bar-label">PI BLOOM ARCHITECTURE:</span>
        <span className="bottom-bar-flow">Website → Digital Marketing → Growth Automation</span>
      </div>
    </div>
  )
}
