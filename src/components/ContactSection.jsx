import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    servicesNeeded: ['Website Development'],
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const serviceOptions = [
    'Website Development',
    'Digital Menus & QR',
    'Instagram & Growth',
    'Local SEO & Maps',
    'n8n & Automations',
    'Complete Studio Package',
  ]

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(service)
      const updated = exists
        ? prev.servicesNeeded.filter((s) => s !== service)
        : [...prev.servicesNeeded, service]
      // Ensure at least one is selected if possible
      return { ...prev, servicesNeeded: updated.length ? updated : [service] }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (minimum 2 characters).'
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your restaurant or café name.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.'
    }

    // Phone / WhatsApp validation: check length and numbers
    const cleanPhone = formData.phone.replace(/[^0-9+]/g, '')
    if (!formData.phone.trim() || cleanPhone.length < 8) {
      newErrors.phone = 'Please provide a valid phone or WhatsApp number (at least 8 digits).'
    }

    if (formData.servicesNeeded.length === 0) {
      newErrors.servicesNeeded = 'Please choose at least one service you are interested in.'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Honest client-side state without claiming a simulated backend was called
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      servicesNeeded: ['Website Development'],
      message: '',
    })
    setErrors({})
  }

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

          {/* Form Area */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="form-success-card" role="status" aria-live="polite">
                <div className="success-icon-wrap" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#4F9D69" strokeWidth="2" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="#4F9D69"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="success-title">Enquiry Prepared!</h3>
                <p className="success-body">
                  Thank you, <strong>{formData.name}</strong>. Your project details for{' '}
                  <strong>{formData.businessName}</strong> have been captured.
                </p>

                <div className="success-summary">
                  <div className="summary-row">
                    <span className="summary-lbl">Business:</span>
                    <span className="summary-val">{formData.businessName}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-lbl">Contact Email:</span>
                    <span className="summary-val">{formData.email}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-lbl">Phone / WhatsApp:</span>
                    <span className="summary-val">{formData.phone}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-lbl">Selected Services:</span>
                    <span className="summary-val">{formData.servicesNeeded.join(', ')}</span>
                  </div>
                </div>

                <div className="success-notice">
                  <p>
                    <strong>Honest Note:</strong> As this frontend is currently running in concept
                    demo mode without an active email endpoint, you can also reach us directly at{' '}
                    <a href="mailto:hello.pibloom@gmail.com" className="text-link">
                      hello.pibloom@gmail.com
                    </a>{' '}
                    or on Instagram{' '}
                    <a
                      href="https://instagram.com/pibloom.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      @pibloom.in
                    </a>
                    .
                  </p>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary btn-sm success-reset-btn"
                  onClick={handleReset}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Enquiry submission form"
              >
                {/* Name & Business Name Row */}
                <div className="form-row form-row--two">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Your Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Chen"
                      className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-business" className="form-label">
                      Business Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-business"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Saffron Bistro &amp; Café"
                      className={`form-input ${errors.businessName ? 'form-input--error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.businessName}
                      aria-describedby={errors.businessName ? 'business-error' : undefined}
                    />
                    {errors.businessName && (
                      <span id="business-error" className="form-error">
                        {errors.businessName}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="form-row form-row--two">
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. maya@saffronbistro.com"
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="form-error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">
                      Phone / WhatsApp <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="form-error">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* What do you need? Selection Pills */}
                <div className="form-group">
                  <span className="form-label">
                    What do you need? <span className="req">*</span>
                  </span>
                  <div className="service-pills-grid" role="group" aria-label="Select services needed">
                    {serviceOptions.map((service) => {
                      const isSelected = formData.servicesNeeded.includes(service)
                      return (
                        <button
                          key={service}
                          type="button"
                          className={`service-pill-btn ${isSelected ? 'service-pill-btn--selected' : ''}`}
                          onClick={() => handleServiceToggle(service)}
                          aria-pressed={isSelected}
                        >
                          <span className="pill-check" aria-hidden="true">
                            {isSelected ? '✓' : '+'}
                          </span>
                          <span>{service}</span>
                        </button>
                      )
                    })}
                  </div>
                  {errors.servicesNeeded && (
                    <span className="form-error">{errors.servicesNeeded}</span>
                  )}
                </div>

                {/* Optional Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Project Notes &amp; Current Online Links{' '}
                    <span className="form-optional">(Optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your culinary concept, seating capacity, or links to your current Instagram / Website..."
                    className="form-textarea"
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary btn-lg submit-btn">
                    <span>Send Enquiry</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <span className="form-privacy-note">
                    🔒 No spam. We respond personally to every enquiry.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
