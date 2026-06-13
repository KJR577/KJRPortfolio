import React, { useState } from 'react';
import './styles/global.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

// ── Asset imports ──────────────────────────────────────────────
// Replace these with your actual asset imports once images are in src/assets/
// import profileImg from './assets/filename.png';
// import profImg from './assets/profimg.png';
// import pro1Img from './assets/pro1.jpeg';
// import pro2Img from './assets/pro2.jpeg';

// Placeholder fallback (base64 1x1 transparent PNG)
const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

function App() {
  const [active, setActive] = useState('home');

  // Scroll-to-section approach (single-page, no router needed)
  const navigate = (id) => {
    setActive(id);
    const el = document.getElementById(`section-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Update active section on scroll
  React.useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('section-', '');
            setActive(id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(id => {
      const el = document.getElementById(`section-${id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // ── IMPORTANT: swap these once images are in assets ──
  const profileImg = PLACEHOLDER; // replace with: profileImg from assets
  const profImg    = PLACEHOLDER; // replace with: profImg from assets
  const pro1Img    = PLACEHOLDER; // replace with: pro1Img from assets
  const pro2Img    = PLACEHOLDER; // replace with: pro2Img from assets

  return (
    <div className="app-shell">
      <Navbar active={active} onNavigate={navigate} profileImg={profileImg} />

      <main className="main-content">
        <div id="section-home">
          <Home/>
        </div>
        <div id="section-about">
          <About />
        </div>
        <div id="section-skills">
          <Skills />
        </div>
        <div id="section-projects">
          <Projects/>
        </div>
        <div id="section-education">
          <Education />
        </div>
        <div id="section-certifications">
          <Certifications />
        </div>
        <div id="section-contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
