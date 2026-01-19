import React, { useRef } from "react"; 
import styled from "styled-components"; 
import AzureDevOps from "../assets/azure.png";
import javaFx from "../assets/JavaFX.png";

import {
  FaReact, FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaProjectDiagram,
  FaClock, FaUsers, FaLightbulb, FaChalkboardTeacher, FaFigma,
  FaCogs, FaCode, FaWindows, FaChevronLeft, FaChevronRight,
} from "react-icons/fa"; 
import {
  SiCplusplus, SiJavascript, SiMysql, SiLaravel, SiSpringboot,
  SiAdobephotoshop, SiAdobeillustrator, SiMongodb, SiOracle,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";

// ---------------- Styled Components ----------------
const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0d0d17, #1a1a2e);
  color: #e6f1ff;
  font-family: "Poppins", sans-serif;
  text-align: center;

  h2 {
    font-size: clamp(2rem, 5vw, 2.8rem);
    margin-bottom: 2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: linear-gradient(90deg, #00b4ff, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    font-size: 1.3rem;
    color: #64ffda;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding: 1rem 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    cursor: default; /* desktop shows normal cursor */
  }
`;

const SkillCard = styled.div`
  flex: 0 0 250px; 
  height: 300px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(0, 119, 255, 0.1);
  scroll-snap-align: center;
  transition: all 0.3s ease;

  svg {
    font-size: 3rem;
    color: #00b4ff;
  }

  p {
    font-weight: 600;
    font-size: 1rem;
    color: #ccd6f6;
    letter-spacing: 0.5px;
    text-align: center;
    margin: 0;
  }

  @media (min-width: 768px) {
    flex: 0 0 300px;
    height: 350px;

    svg {
      font-size: 4rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: rgba(0,180,255,0.2);
  color: #00b4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0,180,255,0.4);
    color: #64ffda;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  @media (max-width: 768px) {
    display: none; /* hide buttons on mobile */
  }
`;

// ---------------- Carousel Component ----------------
const SkillCarousel = ({ skills, title }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = container.clientWidth / 2; // scroll half container
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <h3>{title}</h3>
      <CarouselWrapper>
        <NavButton className="left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </NavButton>
        <NavButton className="right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </NavButton>
        <CarouselContainer ref={carouselRef}>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              {skill.icon}
              <p>{skill.name}</p>
            </SkillCard>
          ))}
        </CarouselContainer>
      </CarouselWrapper>
    </>
  );
};

// ---------------- Skills Component ----------------
const Skills = () => {
  const technicalSkills = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "JavaFX",   
      icon: (
        <img
          src={javaFx}
          alt="javaFx"
          style={{ width: "64px", height: "64px" }}
        />
      )
    },
    { name: "Java", icon: <FaJava /> },
    { name: "C#", icon: <FaCode /> },
    { name: "Assembly", icon: <FaCogs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML / CSS", icon: <><FaHtml5 /><FaCss3Alt /></> },
    { name: "React.js / React Native", icon: <FaReact /> },
    { name: "PHP / Laravel", icon: <SiLaravel /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "SQL / NoSQL", icon: <FaDatabase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Oracle DB", icon: <SiOracle /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { 
      name: "Azure DevOps", 
      icon: (
        <img
          src={AzureDevOps}
          alt="Azure DevOps"
          style={{ width: "64px", height: "64px" }}
        />
      )
    },
    { name: "Windows", icon: <FaWindows /> },
    { name: "Figma", icon: <FaFigma /> },
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
      <SkillCarousel skills={technicalSkills} title="Technical Skills" />
      <SkillCarousel skills={softSkills} title="Soft Skills" />
    </SkillsSection>
  );
};

export default Skills;
