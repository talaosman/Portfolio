import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeading from "./shared/SectionHeading";
import { PrevArrow, NextArrow } from "./shared/CarouselArrows";
import { carouselDots } from "./shared/carouselStyles";

const ProjectsSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: var(--section-max);
  margin: 0 auto;

  .carousel-wrap {
    position: relative;
    padding: 0 2.4rem;
  }

  .slide-pad {
    padding: 0 0.6rem;
    height: 100%;
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 1.8rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, border-color 0.25s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    border-color: var(--border-strong);
  }

  .card h3 {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.7rem;
  }

  .card p.desc {
    flex: 1;
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
    line-height: 1.6;
    color: var(--text-muted);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.3rem;
  }

  .tag {
    font-family: var(--font-mono);
    background: var(--accent-2-soft);
    color: var(--accent-2);
    font-size: 0.75rem;
    padding: 0.25rem 0.7rem;
    border-radius: 20px;
    font-weight: 500;
  }

  .links {
    display: flex;
    gap: 1.4rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }

  .links a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .links a:hover { color: var(--accent); }

  .no-links {
    padding-top: 1rem;
    border-top: 1px solid var(--border);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-faint);
  }

  ${carouselDots}

  @media (max-width: 700px) {
    .carousel-wrap { padding: 0; }
    .slide-pad { padding: 0 0.25rem; }
  }
`;

const projects = [
  { name: "Course Management System", desc: "Java program that allows students to manage university courses with CSV storage.", tags: ["Java", "CSV"] },
  { name: "University Website", desc: "Responsive website with faculties, events, campuses, admissions, and signup.", tags: ["HTML", "CSS", "Bootstrap", "JavaScript"] },
  { name: "Medical Center Management", desc: "JavaFX system with secure login, patient file management, appointments, and staff data.", tags: ["JavaFX", "Database"], repo: "https://github.com/talaosman/Medical-Center-Management" },
  { name: "Travel Booking Website", desc: "Responsive city tour guide with feedback forms and cross-device accessibility.", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"], demo: "https://travelbookingcity.netlify.app" },
  { name: "Rent House Web/Mobile App", desc: "Full-stack rental platform with Spring Boot APIs, Stripe payments, Google/GitHub login, and React Native mobile app.", tags: ["React", "Spring Boot", "Stripe", "React Native"], repo: "https://github.com/talaosman/Rental-House-website" },
  { name: "Delivery App", desc: "Laravel-based delivery platform with payments, GPS tracking, chat, and multi-role access.", tags: ["Laravel", "JavaScript", "Stripe", "Firebase"], repo: "https://github.com/talaosman/DeliveryApp" },
  { name: "Teacher Management System", desc: "C++ OOP project for managing university teachers, schedules, and feedback.", tags: ["C++", "OOP", "Pointers"] },
  { name: "Cloud Deployment (NJS-AZ-FRD)", desc: "Hosted a Node.js application on Microsoft Azure with full resource setup — Web App, Functions, SQL, Key Vault, Storage — and CI/CD automation.", tags: ["Node.js", "Azure", "CI/CD"] },
  { name: "Heart Disease Prediction System", desc: "Machine learning system for heart disease prediction, covering preprocessing, model selection, and performance evaluation. Explored CNN models for medical image-based prediction.", tags: ["Python", "Machine Learning", "CNN"] },
];

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 450,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 700, settings: { slidesToShow: 1, arrows: false } },
  ],
};

const ProjectsList = () => (
  <ProjectsSection id="projects">
    <SectionHeading index="03">Projects</SectionHeading>
    <motion.div
      className="carousel-wrap"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <Slider {...settings}>
        {projects.map((p) => (
          <div key={p.name} className="slide-pad">
            <div className="card">
              <h3>{p.name}</h3>
              <p className="desc">{p.desc}</p>
              <div className="tags">
                {p.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              {(p.demo || p.repo) ? (
                <div className="links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Repo
                    </a>
                  )}
                </div>
              ) : (
                <p className="no-links">Source code available on request</p>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  </ProjectsSection>
);

export default ProjectsList;
