import { teamData, teamClosingStatement } from '../data/teamData'

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">ABOUT US</span>
          <h2 id="about-heading" className="section-title">
            Two people. Two skill sets. One goal.
          </h2>
          <p className="section-desc">
            A tight, focused team pairing hands-on software engineering with hospitality-focused
            digital marketing.
          </p>
        </div>

        {/* 2 Team Profile Cards */}
        <div className="team-grid">
          {teamData.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-card-top">
                <div className="team-avatar" aria-hidden="true">
                  <span>{member.initials}</span>
                </div>
                <div className="team-identity">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
                <span className="badge badge-subtle team-badge">{member.badge}</span>
              </div>

              <div className="team-description">
                <p>&ldquo;{member.description}&rdquo;</p>
              </div>

              <div className="team-skills-block">
                <span className="skills-header">Core Competencies</span>
                <div className="skills-tags">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="about-closing-box">
          <div className="closing-mark" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="#4F9D69"
              />
            </svg>
          </div>
          <p className="closing-statement-text">
            &ldquo;{teamClosingStatement}&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
