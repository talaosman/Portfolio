import React from "react";
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

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  .card {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border-radius: 15px;
    padding: 2rem;
    width: 100%;
    max-width: 350px;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
  }

  .card h3 {
    font-size: 1.5rem;
    color: #00e676;
    margin-bottom: 0.8rem;
  }

  .card p {
    flex: 1;
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tag {
    background: rgba(0, 212, 255, 0.15);
    color: #00d4ff;
    font-size: 0.85rem;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-weight: 500;
  }

  .demo-btn, .repo-btn {
    display: inline-block;
    background: #00d4ff;
    color: #0f0f1a;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease, transform 0.2s ease;
    margin-top: 0.5rem;
  }

  .demo-btn:hover, .repo-btn:hover {
    background: #00e676;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .projects-container {
      flex-direction: column;
      align-items: center;
    }

    .card {
      max-width: 90%;
    }
  }
`;

const ProjectsList = () => {
  const projects = [
    { name: "Course Management System", desc: "Java program that allows students to manage university courses with CSV storage.", tags: ["Java", "CSV"] },
    { name: "University Website", desc: "Responsive website with faculties, events, campuses, admissions, and signup.", tags: ["HTML", "CSS", "Bootstrap", "JavaScript"] },
    { name: "Medical Center Management", desc: "JavaFX system with secure login, patient file management, appointments, and staff data.", tags: ["JavaFX", "Database"], repo:"https://github.com/talaosman/Medical-Center-Management"},
    { name: "Travel Booking Website", desc: "Responsive city tour guide with feedback forms and cross-device accessibility.", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"], demo: "https://travelbookingcity.netlify.app" },
    { name: "Rent House Web/Mobile App", desc: "Full-stack rental platform with Spring Boot APIs, Stripe payments, Google/GitHub login, and React Native mobile app.", tags: ["React", "Spring Boot", "Stripe", "React Native"],repo: "https://github.com/talaosman/Rental-House-website" },
    { name: "Delivery App", desc: "Laravel-based delivery platform with payments, GPS tracking, chat, and multi-role access.", tags: ["Laravel", "JavaScript", "Stripe", "Firebase"], repo: "https://github.com/talaosman/DeliveryApp" },
    { name: "Teacher Management System", desc: "C++ OOP project for managing university teachers, schedules, and feedback.", tags: ["C++", "OOP", "Pointers"] },
  ];

  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((tag, j) => (
                <span className="tag" key={j}>{tag}</span>
              ))}
            </div>
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">
                Live Demo
              </a>
            )}
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="repo-btn">
                GitHub Repo
              </a>
            )}
          </div>
        ))}
      </div>
    </ProjectsSection>
  );
};

export default ProjectsList;
