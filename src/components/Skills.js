import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaJava, FaDatabase, FaProjectDiagram, FaClock, FaUsers, FaLightbulb,
  FaChalkboardTeacher, FaMicrosoft, FaCogs, FaWindows, FaRobot, FaCode,
  FaLayerGroup, FaServer, FaCloud, FaTools, FaUserFriends, FaLanguage,
  FaInfinity, FaSyncAlt, FaMagic, FaGlobe
} from "react-icons/fa";
import {
  SiCplusplus, SiSharp, SiJavascript, SiPython, SiPhp, SiHtml5, SiAngular,
  SiReact, SiDotnet, SiSpringboot, SiLaravel, SiBootstrap, SiMysql, SiOracle,
  SiMongodb, SiDocker, SiVercel, SiNetlify, SiClaude, SiFigma,
  SiAdobeillustrator, SiAdobephotoshop
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import SectionHeading from "./shared/SectionHeading";

const SkillsSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: var(--section-max);
  margin: 0 auto;

  .group-title {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-bottom: 1.4rem;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.4rem;
    margin-bottom: 3.5rem;
  }

  .grid:last-child {
    margin-bottom: 0;
  }

  .card {
    grid-column: span var(--span, 2);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 1.6rem;
    transition: border-color 0.25s ease;
  }

  .card:hover {
    border-color: var(--border-strong);
  }

  .card-head {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }

  .icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: var(--radius-sm);
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 1.05rem;
    flex-shrink: 0;
  }

  .card h3 {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text);
  }

  .count {
    margin-left: auto;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-faint);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    background: var(--surface-hover);
    border: 1px solid var(--border);
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-muted);
    transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    cursor: default;
  }

  .chip svg {
    font-size: 0.95rem;
    flex-shrink: 0;
    transition: color 0.2s ease;
  }

  .chip:hover {
    color: var(--text);
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .chip:hover svg { color: var(--accent); }

  @media (max-width: 900px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
    .card { grid-column: span 1; }
    .card.full-tablet { grid-column: span 2; }
  }

  @media (max-width: 640px) {
    .grid { grid-template-columns: 1fr; gap: 1rem; }
    .card, .card.full-tablet { grid-column: span 1; }
    .card { padding: 1.3rem; }
  }
`;

// Categories mirror the "Skills & Languages" section of the CV.
// `span` is the card width on the 6-column desktop grid.
const technicalGroups = [
  {
    title: "Languages",
    icon: <FaCode />,
    span: 3,
    skills: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C#", icon: <SiSharp /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Assembly", icon: <FaCogs /> },
      { name: "HTML / CSS", icon: <SiHtml5 /> },
    ],
  },
  {
    title: "Frameworks",
    icon: <FaLayerGroup />,
    span: 3,
    skills: [
      { name: "Angular", icon: <SiAngular /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "React Native", icon: <SiReact /> },
      { name: ".NET / ASP.NET Core", icon: <SiDotnet /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "JavaFX", icon: <FaJava /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaServer />,
    span: 2,
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Oracle", icon: <SiOracle /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL / NoSQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <FaCloud />,
    span: 2,
    skills: [
      { name: "Microsoft Azure", icon: <FaMicrosoft /> },
      { name: "Azure DevOps", icon: <FaInfinity /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "CI/CD", icon: <FaSyncAlt /> },
    ],
  },
  {
    title: "AI & Tools",
    icon: <FaTools />,
    span: 2,
    fullTablet: true,
    skills: [
      { name: "AI Coding Agents (Claude Code)", icon: <SiClaude /> },
      { name: "AI-Assisted Development", icon: <FaRobot /> },
      { name: "RAG", icon: <FaMagic /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Illustrator", icon: <SiAdobeillustrator /> },
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Windows", icon: <FaWindows /> },
    ],
  },
];

const personalGroups = [
  {
    title: "Soft Skills",
    icon: <FaUserFriends />,
    span: 4,
    skills: [
      { name: "Project Management", icon: <FaProjectDiagram /> },
      { name: "Time Management", icon: <FaClock /> },
      { name: "Analytical Thinking", icon: <GiBrain /> },
      { name: "Problem Solving", icon: <FaLightbulb /> },
      { name: "Teamwork", icon: <FaUsers /> },
      { name: "Leadership", icon: <FaChalkboardTeacher /> },
    ],
  },
  {
    title: "Languages Spoken",
    icon: <FaLanguage />,
    span: 2,
    skills: [
      { name: "Arabic", icon: <FaGlobe /> },
      { name: "English", icon: <FaGlobe /> },
      { name: "French", icon: <FaGlobe /> },
    ],
  },
];

const SkillGrid = ({ groups }) => (
  <div className="grid">
    {groups.map((g, i) => (
      <motion.div
        key={g.title}
        className={`card${g.fullTablet ? " full-tablet" : ""}`}
        style={{ "--span": g.span }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: i * 0.06 }}
      >
        <div className="card-head">
          <span className="icon-wrap">{g.icon}</span>
          <h3>{g.title}</h3>
          <span className="count">{String(g.skills.length).padStart(2, "0")}</span>
        </div>
        <div className="chips">
          {g.skills.map((s) => (
            <span key={s.name} className="chip">
              {s.icon}
              {s.name}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

const Skills = () => (
  <SkillsSection id="skills">
    <SectionHeading index="04">Skills</SectionHeading>

    <h3 className="group-title">Technical Skills</h3>
    <SkillGrid groups={technicalGroups} />

    <h3 className="group-title">Soft Skills & Languages</h3>
    <SkillGrid groups={personalGroups} />
  </SkillsSection>
);

export default Skills;
