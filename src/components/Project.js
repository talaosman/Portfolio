import React, { useState, useEffect } from "react";
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
  overflow: hidden;
  max-width: 1200px;
  margin: auto;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${({ translate }) => translate}px);
`;

const Card = styled.div`
  flex: 0 0 33.333%;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex: 0 0 50%;
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }

  .inner {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border-radius: 15px;
    padding: 2rem;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: #00e676;
    margin-bottom: 0.8rem;
  }

  p {
    flex: 1;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const Tag = styled.span`
  background: rgba(0, 212, 255, 0.15);
  color: #00d4ff;
  font-size: 0.85rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`;

const Button = styled.a`
  background: #00d4ff;
  color: #0f0f1a;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
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
  font-size: 1.5rem;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;

  ${({ left }) => (left ? "left: -0.3px;" : "right: -0.3px;")}

  &:hover {
    background: #00e676;
  }
`;

const ProjectsList = () => {
  const projects = [
    { name: "Course Management System", desc: "Java program with CSV storage.", tags: ["Java", "CSV"] },
    { name: "University Website", desc: "Responsive university website.", tags: ["HTML", "CSS", "JS"] },
    { name: "Medical Center Management", desc: "JavaFX medical system.", tags: ["JavaFX", "Database"], repo: "https://github.com/talaosman/Medical-Center-Management" },
    { name: "Travel Booking Website", desc: "City tour booking platform.", tags: ["HTML", "CSS", "Bootstrap"], demo: "https://travelbookingcity.netlify.app" },
    { name: "Rent House App", desc: "Full-stack rental app.", tags: ["React", "Spring Boot"], repo: "https://github.com/talaosman/Rental-House-website" },
    { name: "Delivery App", desc: "Laravel delivery system.", tags: ["Laravel", "Stripe"], repo: "https://github.com/talaosman/DeliveryApp" },
    { name: "Teacher Management System", desc: "C++ OOP system.", tags: ["C++", "OOP"] },
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth <= 768) setVisible(1);
      else if (window.innerWidth <= 1024) setVisible(2);
      else setVisible(3);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = projects.length - visible;
  const cardWidth = 1200 / visible;

  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>

      <CarouselWrapper>
        {index > 0 && <Arrow left onClick={() => setIndex(index - 1)}>‹</Arrow>}
        {index < maxIndex && <Arrow onClick={() => setIndex(index + 1)}>›</Arrow>}

        <CarouselTrack translate={-index * cardWidth}>
          {projects.map((p, i) => (
            <Card key={i}>
              <div className="inner">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>

                <Tags>
                  {p.tags.map((t, j) => (
                    <Tag key={j}>{t}</Tag>
                  ))}
                </Tags>

                {p.demo && <Button href={p.demo} target="_blank">Live Demo</Button>}
                {p.repo && <Button href={p.repo} target="_blank">GitHub Repo</Button>}
              </div>
            </Card>
          ))}
        </CarouselTrack>
      </CarouselWrapper>
    </ProjectsSection>
  );
};

export default ProjectsList;
