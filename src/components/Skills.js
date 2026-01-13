import React from "react"; 
import styled from "styled-components"; 
import {
  FaReact, FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaProjectDiagram,
  FaClock, FaUsers, FaLightbulb, FaChalkboardTeacher, FaMicrosoft, FaFigma,
  FaCogs, FaCode, FaWindows
} from "react-icons/fa"; 
import {
  SiCplusplus, SiJavascript, SiMysql, SiLaravel, SiSpringboot,
  SiAdobephotoshop, SiAdobeillustrator, SiMongodb, SiOracle,
  SiAzuredevops
} from "react-icons/si";
import { GiBrain } from "react-icons/gi"; 

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0d0d17, #1a1a2e);
  color: #e6f1ff;
  font-family: "Poppins", sans-serif;
  text-align: center;

  h2 {
    font-size: clamp(2rem, 5vw, 2.8rem);
    margin-bottom: 2.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: linear-gradient(90deg, #00b4ff, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    font-size: 1.5rem;
    color: #64ffda;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
    justify-items: center;
    max-width: 1100px;
    margin: 0 auto 3rem;
  }

  .skill {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* vertical center */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 150px;
    width: 100%;
    cursor: default;
  }

  .skill:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 0 20px rgba(0, 180, 255, 0.5);
    background: rgba(0, 31, 63, 0.9);
  }

  svg {
    font-size: clamp(2rem, 5vw, 2.5rem);
    color: #00b4ff;
    margin-bottom: 0.7rem;
    transition: all 0.3s ease;
  }

  .skill:hover svg {
    color: #64ffda;
    transform: scale(1.2);
  }

  .skill p {
    font-weight: 600;
    font-size: 0.95rem;
    color: #ccd6f6;
    letter-spacing: 0.5px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .skills-grid { gap: 1rem; }
    .skill { padding: 1rem 0.8rem; }
    svg { font-size: 2rem; }
  }

  @media (max-width: 480px) {
    .skills-grid { gap: 0.8rem; }
    .skill { padding: 0.8rem 0.6rem; }
    svg { font-size: 1.8rem; }
    .skill p { font-size: 0.85rem; }
  }
`;

const Skills = () => {
  const technicalSkills = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaFX", icon: <FaJava /> },  // Added JavaFX
    { name: "C#", icon: <FaCode /> },
    { name: "Assembly", icon: <FaCogs /> }, // Added Assembly
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML / CSS", icon: <><FaHtml5 /><FaCss3Alt /></> },
    { name: "React.js / React Native", icon: <FaReact /> },
    { name: "PHP / Laravel", icon: <SiLaravel /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "SQL / NoSQL", icon: <FaDatabase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Oracle DB", icon: <SiOracle /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Azure DevOps", icon: <SiAzuredevops /> },
    { name: "Windows", icon: <FaWindows /> },
    { name: "Figma", icon: <FaFigma /> }, // Already included
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Illustrator", icon: <SiAdobeillustrator /> },
  ];

  const softSkills = [
    { name: "Project Management", icon: <FaProjectDiagram /> },
    { name: "Time Management", icon: <FaClock /> },
    { name: "Analytical Thinking", icon: <GiBrain /> },
    { name: "Team Collaboration", icon: <FaUsers /> },
    { name: "Problem Solving", icon: <FaLightbulb /> },
    { name: "Leadership", icon: <FaChalkboardTeacher /> },
  ];

  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>

      <h3>Technical Skills</h3>
      <div className="skills-grid">
        {technicalSkills.map((s, i) => (
          <div className="skill" key={i}>
            {s.icon}
            <p>{s.name}</p>
          </div>
        ))}
      </div>

      <h3>Soft Skills</h3>
      <div className="skills-grid">
        {softSkills.map((s, i) => (
          <div className="skill" key={i}>
            {s.icon}
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </SkillsSection>
  );
};

export default Skills;
