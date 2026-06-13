import React from 'react';
import '../styles/Projects.css';
import pro1Img from '../assets/pro1.jpeg';
import pro2Img from '../assets/pro2.jpeg';

const PROJECTS = [
  {
    id: 1,
    type: 'Web App',
    title: 'Text-to-Voice',
    desc: 'A web-based text-to-speech application that converts written text into natural-sounding voice output. Features a clean, interactive interface for instant audio generation, improving accessibility.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Speech API'],
    thumb: null, // will use pro1 image passed as prop
    liveUrl: 'https://kjr577.github.io/Text-to-voice/',
    codeUrl: 'https://github.com/KJR577/Text-to-voice.git',
    thumbKey: 'pro1',
  },
  {
    id: 2,
    type: 'Calculator Tool',
    title: 'Grade Calc',
    desc: 'A user-friendly web application designed to help BSc Computer Science students quickly calculate their Semester  CGPA, automating grade and credit calculations for instant results.',
    tags: ['HTML', 'CSS', 'JavaScript','React'],
    liveUrl: 'https://gradecalc-swart.vercel.app/',
    codeUrl: 'https://github.com/KJR577/Gradecalc.git',
    thumbKey: 'pro2',
  },
];

function Projects() {
  const thumbMap = { pro1: pro1Img, pro2: pro2Img };

  return (
    <section className="section">
      <p className="section-eyebrow">What I've built</p>
      <h2 className="section-title">Projects</h2>
      <div className="divider" />

      <div className="projects-grid">
        {PROJECTS.map(project => (
          <div className="project-card" key={project.id}>
            {thumbMap[project.thumbKey] && (
              <img
                src={thumbMap[project.thumbKey]}
                alt={project.title}
                className="project-thumb"
              />
            )}
            <div className="project-body">
              <p className="project-type">{project.type}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <button
                  className="project-btn project-btn-primary"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  🚀 Live Demo
                </button>
                <button
                  className="project-btn project-btn-ghost"
                  onClick={() => window.open(project.codeUrl, '_blank')}
                >
                  {'</>'}  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <button
          className="btn btn-outline"
          onClick={() => window.open('https://github.com/KJR577?tab=repositories', '_blank')}
        >
          View All Repositories →
        </button>
      </div>
    </section>
  );
}

export default Projects;
