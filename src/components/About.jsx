import React from 'react';
import '../styles/About.css';
import profileImg from '../assets/filename.png';

const INFO = [
  { icon: '📍', label: 'Location',  value: 'Vadukarpat, Tamil Nadu — 621651' },
  { icon: '✉️', label: 'Email',     value: 'kenvin577@gmail.com' },
  { icon: '📞', label: 'Phone',     value: '+91 83447 97051' },
  { icon: '🎓', label: 'Education', value: 'BSc CS — St. Joseph\'s College, Trichy (2024–2027)' },
];

const QUALITIES = [
  { icon: '⚡', label: 'Quick Learner' },
  { icon: '🎯', label: 'Self-Motivated' },
  { icon: '🧩', label: 'Problem Solver' },
  { icon: '🤝', label: 'Team Player' },
  { icon: '🔍', label: 'Detail-Oriented' },
];

function About() {
  return (
    <section className="section">
      <p className="section-eyebrow">Get to know me</p>
      <h2 className="section-title">About Me</h2>
      <div className="divider" />

      <div className="about-grid">
        {/* Left — photo + info */}
        <div className="about-identity">
          <div className="about-photo-wrap">
            <img
              src={profileImg}
              alt="Kenvin Jose Roys"
              className="about-photo"
            />
          </div>

          <div className="about-info-list">
            {INFO.map(row => (
              <div className="about-info-row" key={row.label}>
                <span className="about-info-icon">{row.icon}</span>
                <div>
                  <span className="about-info-label">{row.label}</span>
                  <span className="about-info-value">{row.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — summary + qualities */}
        <div className="about-content">
          <div className="about-summary">
            <p>
              I'm a <strong>motivated Third-year BSc Computer Science student</strong> at
              St. Joseph's College (Autonomous), Tiruchirappalli, with a solid and growing
              foundation in MERN stack development.
            </p>
            <p>
              I'm currently deepening my skills in <strong>React.js, Node.js, Express.js,
              and MongoDB</strong> — passionate about turning theoretical knowledge into
              real-world applications that solve genuine problems.
            </p>
            <p>
              I'm actively seeking an <strong>internship opportunity</strong> where I can
              contribute meaningfully, gain practical experience, and further develop my
              technical expertise in full-stack web development.
            </p>
          </div>

          <p className="about-qualities-title">Core Traits</p>
          <div className="about-qualities">
            {QUALITIES.map(q => (
              <span className="quality-chip" key={q.label}>
                {q.icon} {q.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
