import React, { useState, useRef, useEffect } from "react"; 
import styled from "styled-components"; 
import {
  FaReact, FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaProjectDiagram,
  FaClock, FaUsers, FaLightbulb, FaChalkboardTeacher, FaMicrosoft, FaFigma,
  FaCogs, FaCode, FaWindows, FaChevronLeft, FaChevronRight,
} from "react-icons/fa"; 
import {
  SiCplusplus, SiJavascript, SiMysql, SiLaravel, SiSpringboot,
  SiAdobephotoshop, SiAdobeillustrator, SiMongodb, SiOracle,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi"; 

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

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
  position: relative;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  padding: 2rem 0;
`;

const CarouselTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 calc(50% - 150px);
`;

const SkillCard = styled.div`
  flex-shrink: 0;
  width: 300px;
  height: 350px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  background: ${props => props.isActive 
    ? 'rgba(0, 119, 255, 0.25)' 
    : 'rgba(255, 255, 255, 0.05)'};
  
  transform: ${props => props.isActive 
    ? 'scale(1.15)' 
    : 'scale(0.9)'};
  
  opacity: ${props => props.isActive ? '1' : '0.5'};
  box-shadow: ${props => props.isActive 
    ? '0 15px 40px rgba(0, 180, 255, 0.3)' 
    : '0 8px 20px rgba(0, 0, 0, 0.2)'};

  svg {
    font-size: 4rem;
    color: ${props => props.isActive ? '#64ffda' : '#00b4ff'};
    transition: all 0.3s ease;
  }

  p {
    font-weight: 600;
    font-size: 1.1rem;
    color: #ccd6f6;
    letter-spacing: 0.5px;
    text-align: center;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 300px;
    
    svg {
      font-size: 3rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  z-index: 100;
  background: rgba(0, 180, 255, 0.2);
  border: 2px solid rgba(0, 180, 255, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #00b4ff;
  
  &:hover {
    background: rgba(0, 180, 255, 0.4);
    border-color: rgba(100, 255, 218, 0.8);
    color: #64ffda;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    ${props => props.direction === 'left' ? 'left: 5px;' : 'right: 5px;'}
    
    svg {
      font-size: 1.2rem;
    }
  }
`;

const SkillCarousel = ({ skills, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  const goToNext = () => {
    if (activeIndex < skills.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const goToPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    if (trackRef.current) {
      const offset = -(activeIndex * (300 + 24)); // card width + gap
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [activeIndex]);

  return (
    <>
      <h3>{title}</h3>
      <CarouselContainer>
        <NavButton 
          direction="left" 
          onClick={goToPrev}
          disabled={activeIndex === 0}
        >
          <FaChevronLeft />
        </NavButton>

        <CarouselWrapper>
          <CarouselTrack ref={trackRef}>
            {skills.map((skill, index) => (
              <SkillCard 
                key={index}
                isActive={index === activeIndex}
              >
                {skill.icon}
                <p>{skill.name}</p>
              </SkillCard>
            ))}
          </CarouselTrack>
        </CarouselWrapper>

        <NavButton 
          direction="right" 
          onClick={goToNext}
          disabled={activeIndex === skills.length - 1}
        >
          <FaChevronRight />
        </NavButton>
      </CarouselContainer>
    </>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaFX", icon: <FaJava /> },
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
    { name: "Azure DevOps", icon: <FaMicrosoft /> },
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