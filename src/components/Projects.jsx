import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";
import pro1Img from "../assets/pro1.jpeg";
import pro2Img from "../assets/pro2.jpeg";
const PROJECTS = [
  {
    id: 1,
    type: "Web App",
    title: "Text-to-Voice",
    desc: "A web-based text-to-speech application that converts written text into natural-sounding voice output.",
    tags: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    liveUrl: "https://kjr577.github.io/Text-to-voice/",
    codeUrl: "https://github.com/KJR577/Text-to-voice.git",
    thumbKey: "pro1",
  },
  {
    id: 2,
    type: "Calculator Tool",
    title: "Grade Calc",
    desc: "A user-friendly web application designed to help BSc Computer Science students calculate Semester CGPA instantly.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "https://gradecalc-swart.vercel.app/",
    codeUrl: "https://github.com/KJR577/Gradecalc.git",
    thumbKey: "pro2",
  },
];

function Projects() {
  const thumbMap = { pro1: pro1Img, pro2: pro2Img };
  const sectionRef = useRef(null);

useEffect(() => {
  const cards = sectionRef.current.querySelectorAll('.project-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);

  return (
    <section className="section" ref={sectionRef}>
      <p className="section-eyebrow">What I've built</p>

      <h2 className="section-title">Projects</h2>

      <div className="divider"></div>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div
  className="project-card"
  key={project.id}
  style={{ transitionDelay: `${project.id * 150}ms` }}
>
            <img
              src={thumbMap[project.thumbKey]}
              alt={project.title}
              className="project-thumb"
            />

            <div className="project-body">
              <p className="project-type">{project.type}</p>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-desc">{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <button
                  className="project-btn project-btn-primary"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  🚀 Live Demo
                </button>

                <button
                  className="project-btn project-btn-ghost"
                  onClick={() => window.open(project.codeUrl, "_blank")}
                >
                  {"</>"} Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <button
          className="btn btn-outline"
          onClick={() =>
            window.open(
              "https://github.com/KJR577?tab=repositories",
              "_blank"
            )
          }
        >
          View All Repositories →
        </button>
      </div>
    </section>
  );
}

export default Projects;