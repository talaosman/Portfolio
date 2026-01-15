import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageGenerator from "./ImageGenerator"; // Your AI generator

// ----- Styled Components -----
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
  transition: transform 0.4s ease;
  transform: translateX(${({ index, visible }) => -(index * (100 / visible))}%);
`;

const Card = styled.div`
  flex: 0 0 33.333%;
  padding: 1rem;
  box-sizing: border-box;
  cursor: pointer;

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
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.03);
    }
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

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #1a1a2e;
  padding: 2rem;
  border-radius: 15px;
  max-width: 900px;
  width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #00d4ff;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background: #00e676;
  }
`;
const ActionButton = styled.button`
  background: #00e676;
  color: #0f0f1a;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background: #00d4ff;
  }
`;


// ----- Main Component -----
const ProjectsList = () => {
 const projects = [
  {
    name: "Course Management System",
    desc: "Java program for managing university courses with CSV-based data storage, supporting efficient student operations and modular design.",
    tags: ["Java", "CSV"]
  },
  {
    name: "AI Image Generator",
    desc: "Python AI system converting text prompts into images via deep learning, exposed through an API and integrated into React for real-time generation.",
    tags: ["React", "Python", "AI", "API"]
  },
  {
    name: "University Website",
    desc: "Responsive website presenting faculties, events, campuses, and admissions, with a user-friendly sign-up interface and mobile-friendly design.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Media Queries"]
  },
  {
    name: "Medical Center Management",
    desc: "Desktop software with secure login, role-based access, and database management of patients, staff, and appointments.",
    tags: ["Java", "JavaFX", "Database"],
    repo: "https://github.com/talaosman/Medical-Center-Management"
  },
  {
    name: "Travel Booking Website",
    desc: "Cross-device city tour guide platform with destination info, feedback forms, and clean responsive UI.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demo: "https://travelbookingcity.netlify.app"
  },
  {
    name: "Rent House Web/Mobile App",
    desc: "Full-stack rental platform with React and Spring Boot, Stripe payments, Google/GitHub login, AI chatbot (RAG), and React Native mobile app.",
    tags: ["React", "Spring Boot", "Stripe", "React Native"],
    repo: "https://github.com/talaosman/Rental-House-website"
  },
  {
    name: "Delivery App",
    desc: "Laravel platform with Stripe payments, Firebase notifications, multi-role access, real-time GPS tracking, live chat, dynamic pricing, multi-currency support, and admin dashboards for driver approvals, reports, and loyalty programs.",
    tags: ["Laravel", "Html/CSS", "Stripe", "Firebase"],
    repo: "https://github.com/talaosman/DeliveryApp"
  },
  {
    name: "Teacher Management System",
    desc: "C++ application managing university teachers and schedules using OOP, pointers, linked lists, with teacher ranking and persistent data storage.",
    tags: ["C++", "OOP", "Pointers"]
  }
];



  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleCardClick = (name) => {
    if (name === "AI Image Generator") setModalOpen(true);
  };

  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>

      <CarouselWrapper>
        {index > 0 && <Arrow left onClick={() => setIndex(index - 1)}>‹</Arrow>}
        {index < maxIndex && <Arrow onClick={() => setIndex(index + 1)}>›</Arrow>}

        <CarouselTrack index={index} visible={visible}>
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

      {/* Normal buttons */}
      {p.demo && (
        <Button href={p.demo} target="_blank">
          Live Demo
        </Button>
      )}

      {p.repo && (
        <Button href={p.repo} target="_blank">
          GitHub Repo
        </Button>
      )}

      {/* AI Generator button ONLY */}
      {p.name === "AI Image Generator" && (
        <ActionButton onClick={() => setModalOpen(true)}>
          Try AI Generator
        </ActionButton>
      )}
      </div>
     </Card>
     ))}

        </CarouselTrack>
      </CarouselWrapper>

      {modalOpen && (
        <ModalOverlay onClick={() => setModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setModalOpen(false)}>×</CloseButton>
            <ImageGenerator />
          </ModalContent>
        </ModalOverlay>
      )}
    </ProjectsSection>
  );
};

export default ProjectsList;
