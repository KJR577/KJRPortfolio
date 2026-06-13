import React, { useState, useEffect } from 'react';
import './styles/global.css';

import Dash from './components/Dash'; // 1. Import your Dash welcome component
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

function App() {
  const [active, setActive] = useState('home');
  // 2. State tracking whether to show the dashboard or inner portfolio
  const [showMainPortfolio, setShowMainPortfolio] = useState(false);

  // Scroll-to-section approach (single-page, no router needed)
  const navigate = (id) => {
    setActive(id);
    const el = document.getElementById(`section-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Custom function passed to Dash to handle welcome interface transitions
  const handleEnterPortfolio = () => {
    setShowMainPortfolio(true);
  };

  // Update active section on scroll (Only runs if the main portfolio view is mounted)
  useEffect(() => {
    if (!showMainPortfolio) return;

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
  }, [showMainPortfolio]);

  // Fallback image imports
  const profileImg = PLACEHOLDER; 

  // 3. Conditional Render: Show Dash welcome interface first
  if (!showMainPortfolio) {
    return <Dash onEnter={handleEnterPortfolio} />;
  }

  // 4. Fallback Render: Show standard single-page portfolio layout shell
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