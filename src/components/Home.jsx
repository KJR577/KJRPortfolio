import React from 'react';
import '../styles/Home.css';
import profileImg from '../assets/profimg.png';
import kenvinResume from '../assets/Kenvin_Jose_Roys_J_Resume.pdf';

function Home() {
  return (
    <section className="home-section">
      {/* Text */}
      <div className="home-text">
        {/* Top Resume Download Row */}
        <div className="home-top-action">
          <a 
            href={kenvinResume} 
            download="Kenvin_Jose_Roys_J_Resume.pdf"
            className="btn btn-outline btn-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.35rem' }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        <p className="home-greeting">👋 Hello,</p>

       <h1 className="home-name">
  <span className="im-text">I'm</span>
  <span className="typing-text">Kenvin Jose Roys</span>
</h1>

        <p className="home-title">MERN Stack Developer · BSc Computer Science</p>

        <p className="home-bio">
          A passionate second-year student at St. Joseph's College, Trichy — building
          real-world web applications with React, Node.js, Express and MongoDB.
          Seeking internship opportunities to grow as a full-stack engineer.
        </p>

        <div className="home-cta">
          <button
            className="btn btn-primary"
            onClick={() => onNavigate('contact')}
          >
            Contact Me →
          </button>
          <button
            className="btn btn-outline"
            onClick={() => window.open('https://github.com/KJR577', '_blank')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </button>
        </div>

        <div className="home-stats">
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Projects Live</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">9+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3rd</div>
            <div className="stat-label">Year Student</div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="home-image-wrap">
        <div className="home-img-ring">
          <img
            src={profileImg}
            alt="Kenvin Jose Roys"
            className="home-profile-img"
          />
          <div className="home-badge">
            <span className="dot"></span>
            Open to Internships
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;