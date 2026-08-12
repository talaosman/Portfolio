import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  FaReact, FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaProjectDiagram,
  FaClock, FaUsers, FaLightbulb, FaChalkboardTeacher, FaMicrosoft, FaFigma,
  FaCogs, FaCode, FaWindows
} from "react-icons/fa";
import {
  SiCplusplus, SiJavascript, SiMysql, SiLaravel, SiSpringboot,
  SiAdobephotoshop, SiAdobeillustrator, SiMongodb, SiOracle,
  SiDotnet, SiPython, SiDocker, SiVercel, SiNetlify
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import SectionHeading from "./shared/SectionHeading";
import { PrevArrow, NextArrow } from "./shared/CarouselArrows";
import { carouselDots } from "./shared/carouselStyles";

const SkillsSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: var(--section-max);
  margin: 0 auto;

  h3 {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-bottom: 1.4rem;
    text-align: center;
  }

  .carousel-wrap {
    position: relative;
    padding: 0 2.4rem;
    margin-bottom: 3.5rem;
  }

  .carousel-wrap:last-child {
    margin-bottom: 0;
  }

  .slide-pad {
    padding: 0 0.5rem;
  }

  .skill {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 1.4rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    min-height: 128px;
    transition: transform 0.25s ease, border-color 0.25s ease;
    cursor: default;
  }

  .skill:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
  }

  svg {
    font-size: 1.7rem;
    color: var(--text-muted);
    transition: color 0.25s ease;
  }

  .skill:hover svg { color: var(--accent); }

  .skill p {
    font-weight: 500;
    font-size: 0.85rem;
    color: var(--text-muted);
    text-align: center;
  }

  ${carouselDots}

  @media (max-width: 640px) {
    .carousel-wrap { padding: 0 1.8rem; }
  }
`;

const technicalSkills = [
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaFX", icon: <FaJava /> },
  { name: "C#", icon: <FaCode /> },
  { name: "Assembly", icon: <FaCogs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML / CSS", icon: <><FaHtml5 /><FaCss3Alt /></> },
  { name: "React.js / React Native", icon: <FaReact /> },
  { name: ".NET / C#", icon: <SiDotnet /> },
  { name: "PHP / Laravel", icon: <SiLaravel /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Python", icon: <SiPython /> },
  { name: "SQL / NoSQL", icon: <FaDatabase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Oracle DB", icon: <SiOracle /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Azure DevOps", icon: <FaMicrosoft /> },
  { name: "Vercel / Netlify", icon: <><SiVercel /><SiNetlify /></> },
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

const makeSettings = (slidesToShow) => ({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 450,
  slidesToShow,
  slidesToScroll: slidesToShow,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: Math.min(4, slidesToShow), slidesToScroll: Math.min(4, slidesToShow) } },
    { breakpoint: 700, settings: { slidesToShow: 2, slidesToScroll: 2 } },
  ],
});

const SkillCarousel = ({ items, slidesToShow }) => (
  <motion.div
    className="carousel-wrap"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45 }}
  >
    <Slider {...makeSettings(slidesToShow)}>
      {items.map((s) => (
        <div key={s.name} className="slide-pad">
          <div className="skill">
            {s.icon}
            <p>{s.name}</p>
          </div>
        </div>
      ))}
    </Slider>
  </motion.div>
);

const Skills = () => (
  <SkillsSection id="skills">
    <SectionHeading index="04">Skills</SectionHeading>

    <h3>Technical Skills</h3>
    <SkillCarousel items={technicalSkills} slidesToShow={6} />

    <h3>Soft Skills</h3>
    <SkillCarousel items={softSkills} slidesToShow={4} />
  </SkillsSection>
);

export default Skills;
