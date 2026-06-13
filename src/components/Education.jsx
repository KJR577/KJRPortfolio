import React from 'react';
import '../styles/Education.css';

const TIMELINE = [
  {
    period: '2024 — Present',
    degree: 'BSc Computer Science',
    institution: "St. Joseph's College (Autonomous), Tiruchirappalli",
    note: 'Currently in second year, building expertise in MERN stack development and core computer science fundamentals.',
  },
  {
    period: '2021 — 2024',
    degree: 'Higher Secondary (10th & 12th)',
    institution: 'Dalmia Higher Secondary School, Dalmiapuram',
    note: 'Tamil Nadu State Board — Completed with Computer Science as a core subject, developing early interest in programming.',
  },
];

const SUBJECTS = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Problem Solving Techniques',
  'Discrete Mathematics',
  'Digital Computer Fundamentals',
  'Microprocessor',
  'Web Technology',
];

function Education() {
  return (
    <section className="section">
      <p className="section-eyebrow">Academic background</p>
      <h2 className="section-title">Education</h2>
      <div className="divider" />

      <div className="education-layout">
        {/* Timeline */}
        <div>
          <div className="edu-timeline">
            {TIMELINE.map((item, i) => (
              <div className="edu-item" key={i}>
                <p className="edu-period">{item.period}</p>
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-institution">{item.institution}</p>
                <p className="edu-note">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detail card */}
        <div className="edu-detail-card">
          <div className="edu-detail-icon">🎓</div>
          <h3 className="edu-detail-title">Bachelor of Science — Computer Science</h3>
          <p className="edu-detail-school">St. Joseph's College (Autonomous), Tiruchirappalli</p>

          <div className="edu-meta-list">
            <div className="edu-meta-item">
              <span>🗓️</span>
              <span>Duration: 2024 – 2027</span>
            </div>
            <div className="edu-meta-item">
              <span>📍</span>
              <span>Tiruchirappalli, Tamil Nadu</span>
            </div>
            <div className="edu-meta-item">
              <span>📚</span>
              <span>Year 3 of 3 — In Progress</span>
            </div>
            <div className="edu-meta-item">
              <span>🏛️</span>
              <span>Autonomous — Bharathidasan University</span>
            </div>
          </div>

          <p className="edu-subjects-label">Current Subjects</p>
          <div className="edu-subjects">
            {SUBJECTS.map(s => (
              <span className="edu-subject-chip" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
