import React, { useEffect, useRef } from "react";
import "../styles/Skills.css";

const BARS = [
  { name: "HTML5", pct: 90, color: "#E44D26" },
  { name: "CSS3", pct: 90, color: "#264DE4" },
  { name: "JavaScript", pct: 80, color: "#F7DF1E" },
  { name: "React.js", pct: 75, color: "#61DAFB" },
  { name: "MongoDB", pct: 90, color: "#4DB33D" },
  { name: "MySQL", pct: 75, color: "#00758F" },
  { name: "PHP", pct: 60, color: "#777BB3" },
  { name: "Node.js", pct: 40, color: "#68A063" },
  { name: "GitHub", pct: 90, color: "#ffffff" },
];

const CATEGORIES = [
  {
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "PHP"],
  },
  {
    label: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    label: "Tools & Version Control",
    skills: ["GitHub", "Git", "VS Code"],
  },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(
      ".skill-bar-item, .skills-category, .skill-tag"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");

            if (entry.target.classList.contains("skill-bar-item")) {
              const fill = entry.target.querySelector(".skill-bar-fill");
              fill.style.width = fill.dataset.width + "%";
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" ref={sectionRef}>
      <p className="section-eyebrow">What I work with</p>

      <h2 className="section-title">Skills</h2>

      <div className="divider" />

      <div className="skills-layout">

        {/* Progress Bars */}

        <div>

          <p className="skills-bars-title">Proficiency</p>

          {BARS.map((bar) => (
            <div className="skill-bar-item" key={bar.name}>
              <div className="skill-bar-header">
                <span className="skill-bar-name">{bar.name}</span>

                <span className="skill-bar-pct">{bar.pct}%</span>
              </div>

              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  data-width={bar.pct}
                  style={{
                    background: `linear-gradient(90deg, ${bar.color}99, ${bar.color})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill Tags */}

        <div className="skills-tags-col">
          {CATEGORIES.map((cat) => (
            <div className="skills-category" key={cat.label}>
              <p className="skills-cat-label">{cat.label}</p>

              <div className="skills-tags">
                {cat.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;