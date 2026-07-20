import React from "react";
import { motion } from "framer-motion";
import "../styles/Education.css";

const TIMELINE = [
  {
    period: "2024 — Present",
    degree: "BSc Computer Science",
    institution: "St. Joseph's College (Autonomous), Tiruchirappalli",
    note: "Currently in second year, building expertise in MERN stack development and core computer science fundamentals.",
  },
  {
    period: "2021 — 2024",
    degree: "Higher Secondary (10th & 12th)",
    institution: "Dalmia Higher Secondary School, Dalmiapuram",
    note: "Tamil Nadu State Board — Completed with Computer Science as a core subject, developing early interest in programming.",
  },
];

const SUBJECTS = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Problem Solving Techniques",
  "Discrete Mathematics",
  "Digital Computer Fundamentals",
  "Microprocessor",
  "Web Technology",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Education() {
  return (
    <section className="section" id="education">
      <motion.p
        className="section-eyebrow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Academic background
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <motion.div
        className="divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="education-layout"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Timeline */}
        <motion.div variants={itemVariants}>
          <div className="edu-timeline">
            {TIMELINE.map((item, i) => (
              <motion.div
                className="edu-item"
                key={i}
                variants={itemVariants}
                whileHover={{
                  x: 8,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <p className="edu-period">{item.period}</p>

                <h3 className="edu-degree">{item.degree}</h3>

                <p className="edu-institution">{item.institution}</p>

                <p className="edu-note">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detail Card */}
        <motion.div
          className="edu-detail-card"
          variants={itemVariants}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="edu-detail-icon"
            animate={{
              y: [0, -6, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            🎓
          </motion.div>

          <h3 className="edu-detail-title">
            Bachelor of Science — Computer Science
          </h3>

          <p className="edu-detail-school">
            St. Joseph's College (Autonomous), Tiruchirappalli
          </p>

          <div className="edu-meta-list">
            <motion.div
              className="edu-meta-item"
              whileHover={{ x: 8 }}
            >
              <span>🗓️</span>
              <span>Duration: 2024 – 2027</span>
            </motion.div>

            <motion.div
              className="edu-meta-item"
              whileHover={{ x: 8 }}
            >
              <span>📍</span>
              <span>Tiruchirappalli, Tamil Nadu</span>
            </motion.div>

            <motion.div
              className="edu-meta-item"
              whileHover={{ x: 8 }}
            >
              <span>📚</span>
              <span>Year 3 of 3 — In Progress</span>
            </motion.div>

            <motion.div
              className="edu-meta-item"
              whileHover={{ x: 8 }}
            >
              <span>🏛️</span>
              <span>Autonomous — Bharathidasan University</span>
            </motion.div>
          </div>

          <p className="edu-subjects-label">Current Subjects</p>

          <div className="edu-subjects">
            {SUBJECTS.map((subject, index) => (
              <motion.span
                className="edu-subject-chip"
                key={subject}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
              >
                {subject}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;