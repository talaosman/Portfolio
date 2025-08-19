import React from "react";
import styled from "styled-components";

import {
  FaReact, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaDatabase, FaProjectDiagram,
  FaClock, FaUsers, FaLightbulb, FaChalkboardTeacher, FaMicrosoft, FaFigma,
  FaAdobe, FaCogs, FaCode, FaWindows
} from "react-icons/fa";

import {
  SiCplusplus, SiJavascript, SiMysql, SiLaravel, SiSpringboot,
  SiAdobephotoshop, SiAdobeillustrator, SiMongodb, SiOracle
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const SkillsSection = styled.section`
  padding: 4rem 2rem;
background: linear-gradient(135deg, #0d0d17, #1a1a2e);

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #00d4ff;
    font-size: 2rem;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .skill {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    width: 150px;
    color: #fff;
  }

  .skill:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
  }

  .skill p {
    margin-top: 0.5rem;
    font-weight: bold;
    text-align: center;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
  }

  svg {
    font-size: 2rem;
    color: #00e676;
  }

  @media (max-width: 768px) {
    .skills {
      gap: 1rem;
    }
    .skill {
      width: 120px;
      padding: 0.8rem 1rem;
    }
    .skill p {
      font-size: 0.85rem;
    }
    svg {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    .skills {
      gap: 0.8rem;
    }
    .skill {
      width: 100px;
      padding: 0.6rem 0.8rem;
    }
    .skill p {
      font-size: 0.8rem;
    }
    svg {
      font-size: 1.5rem;
    }
  }
`;


const Skills = () => {
  const skills = [
    // Technical Skills
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C#", icon: <FaCode /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML / CSS", icon: <><FaHtml5 /> <FaCss3Alt /></> },
    { name: "React.js / React Native", icon: <FaReact /> },
    { name: "PHP / Laravel", icon: <SiLaravel /> },
    { name: "Java Spring Boot", icon: <SiSpringboot /> },
    { name: "SQL / NoSQL", icon: <FaDatabase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Oracle DB", icon: <SiOracle /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Azure", icon: <FaMicrosoft /> },
    { name: "Windows", icon: <FaWindows /> },
    { name: "JavaFX", icon: <FaJava /> },
    { name: "Assembly", icon: <FaCogs /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },

    // Soft Skills
    { name: "Project Management", icon: <FaProjectDiagram /> },
    { name: "Time Management", icon: <FaClock /> },
    { name: "Analytical Skills", icon: <GiBrain /> },
    { name: "Team Worker", icon: <FaUsers /> },
    { name: "Problem Solver", icon: <FaLightbulb /> },
    { name: "Leadership Skills", icon: <FaChalkboardTeacher /> },
  ];

  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((s, i) => (
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
