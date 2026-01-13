import React, { useState } from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0f0f1a, #1a1a2e);

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: 700;
    color: #00d4ff;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  max-width: 380px;
  margin: auto;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.translate}px);
`;

const Card = styled.div`
  min-width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 15px;
  padding: 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  h3 {
    font-size: 1.5rem;
    color: #00e676;
    margin-bottom: 0.8rem;
  }

  p {
    flex: 1;
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: rgba(0, 212, 255, 0.15);
  color: #00d4ff;
  font-size: 0.85rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`;

const Button = styled.a`
  display: inline-block;
  background: #00d4ff;
  color: #0f0f1a;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  margin-top: 0.5rem;

  &:hover {
    background: #00e676;
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #00d4ff;
  border: none;
  color: #0f0f1a;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  ${({ left }) => (left ? "left: -20px;" : "right: -20px;")}

  &:hover {
    background: #00e676;
  }
`;

const ProjectsList = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    { name: "Course Management System", desc: "Java program that allows students to manage university courses with CSV storage.", tags: ["Java", "CSV"] },
    { name: "University Website", desc: "Responsive website with faculties, events, campuses, admissions, and signup.", tags: ["HTML", "CSS", "Bootstrap", "JavaScript"] },
    { name: "Medical Center Management", desc: "JavaFX system with secure login, patient file management, appointments, and staff data.", tags: ["JavaFX", "Database"], repo:"https://github.com/talaosman/Medical-Center-Management"},
    { name: "Travel Booking Website", desc: "Responsive city tour guide with feedback forms and cross-device accessibility.", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"], demo: "https://travelbookingcity.netlify.app" },
    { name: "Rent House Web/Mobile App", desc: "Full-stack rental platform with Spring Boot APIs, Stripe payments, Google/GitHub login, AI chatbot using RAG, and React Native app.", tags: ["React", "Spring Boot", "Stripe", "React Native"], repo: "https://github.com/talaosman/Rental-House-website" },
    { name: "Delivery App", desc: "Laravel-based delivery platform with payments, GPS tracking, chat, and multi-role access.", tags: ["Laravel", "JavaScript", "Stripe", "Firebase"], repo: "https://github.com/talaosman/DeliveryApp" },
    { name: "Teacher Management System", desc: "C++ OOP project for managing university teachers, schedules, and feedback.", tags: ["C++", "OOP"] },
  ];

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>

      <CarouselWrapper>
        <Arrow left onClick={prev}>‹</Arrow>

        <CarouselTrack translate={-index * 380}>
          {projects.map((p, i) => (
            <Card key={i}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>

              <Tags>
                {p.tags.map((t, j) => (
                  <Tag key={j}>{t}</Tag>
                ))}
              </Tags>

              {p.demo && <Button href={p.demo} target="_blank">Live Demo</Button>}
              {p.repo && <Button href={p.repo} target="_blank">GitHub Repo</Button>}
            </Card>
          ))}
        </CarouselTrack>

        <Arrow onClick={next}>›</Arrow>
      </CarouselWrapper>
    </ProjectsSection>
  );
};

export default ProjectsList;
