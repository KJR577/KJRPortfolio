import React from 'react';
import '../styles/Certifications.css';

const newLocal = '';
const CERTS = [
  
  {
    id: 1,
    icon: '🐍',
    title: 'Python Programming',
    issuer: 'LetsUpgrade',
    date: '2025',
    status: 'completed',
    skills: ['Python', 'OOP', 'Data Analysis', 'Web Development'],
    url: '#',
  },
  {
    id: 2,
    icon: '🌐',
    title: 'HTML, CSS & JavaScript',
    issuer: 'Infosis',
    date: '2026',
    status: 'in-progress',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'],
    url: '#',
  },
  {
    id: 3,
    icon: '🖥️',
    title: 'Full Stack Web Development Internship',
    issuer: 'FrontierWox Tech prt Ltd',
    date: 'May 2026 - June 2026',
    status: 'completed',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Git'],
    url: '#',
  },
];

function Certifications() {
  return (
    <section className="section">
      <p className="section-eyebrow">Credentials &amp; Achievements</p>
      <h2 className="section-title">Certifications</h2>
      <div className="divider" />

      <div className="cert-grid">
        {CERTS.map(cert => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-header">
              <div className="cert-logo">{cert.icon}</div>
              <span className={`cert-status ${cert.status}`}>
                {cert.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
              </span>
            </div>

            <div>
              <p className="cert-title">{cert.title}</p>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">
                <span>🗓️</span> {cert.date}
              </p>
            </div>

            <div className="cert-skills">
              {cert.skills.map(s => (
                <span className="cert-skill-tag" key={s}>{s}</span>
              ))}
            </div>

            {cert.url && cert.url !== '#' && (
              <button
                className="cert-link-btn"
                onClick={() => window.open(cert.url, '_blank')}
              >
                View Certificate →
              </button>
            )}
          </div>
        ))}

        {/* Placeholder card */}
        <div className="cert-card placeholder">
          <div className="cert-placeholder-text">
            <div className="cert-placeholder-icon">＋</div>
            <p className="cert-placeholder-label">More coming soon…</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
