import React, { useState } from 'react';
import '../styles/Navbar.css';
import profileImg from '../assets/filename.png';

const NAV_ITEMS = [
  { id: 'home',           label: 'Home',          icon: '🏠' },
  { id: 'about',          label: 'About Me',       icon: '👤' },
  { id: 'skills',         label: 'Skills',         icon: '⚡' },
  { id: 'projects',       label: 'Projects',       icon: '🚀' },
  { id: 'education',      label: 'Education',      icon: '🎓' },
  { id: 'certifications', label: 'Certifications', icon: '🏆' },
  { id: 'contact',        label: 'Contact',        icon: '✉️' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setMobileOpen(o => !o)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      <aside
        className="sidebar"
        style={mobileOpen ? { transform: 'translateX(0)' } : {}}
      >
        {/* Profile */}
        <div className="nav-profile">
          <img
            src={profileImg}
            alt="Kenvin Jose Roys"
            className="nav-avatar"
          />
          <div className="nav-name">J. Kenvin Jose Roys</div>
          <div className="nav-role">MERN Stack Developer</div>
        </div>

        {/* Links */}
        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.id} className="nav-link-item">
              <button
                className={`nav-link-btn${active === item.id ? ' active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social */}
        <div className="nav-footer">
          <a
            href="https://github.com/KJR577"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            title="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/kenvin-jose-roys577"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            title="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          <a
            href="mailto:kenvin577@gmail.com"
            className="nav-social-btn"
            title="Email"
          >
            ✉
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
