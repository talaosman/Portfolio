import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeading from "./shared/SectionHeading";
import { PrevArrow, NextArrow } from "./shared/CarouselArrows";
import { carouselDots } from "./shared/carouselStyles";
import useCarouselTier from "./shared/useCarouselTier";

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
  { name: "Rent House Web & Mobile App", desc: "Full-stack rental platform: Spring Boot REST APIs with OTP email, Google/GitHub sign-up, Stripe payments, Firebase live notifications, RAG-based AI chatbot, Google Maps, 360° virtual tours, and admin-only CRUD via middleware; responsive React.js frontend (search, view, rent, visit inquiries, favorites, auth) and a React Native mobile app.", tags: ["Spring Boot", "React.js", "React Native", "Stripe", "Firebase", "RAG"], demo: "https://rental-house-website-ten.vercel.app", repo: "https://github.com/talaosman/Rental-House-website" },
  { name: "Delivery App", desc: "Full-stack delivery platform in PHP Laravel, HTML/CSS, and JavaScript with Stripe payments; multi-role access, email verification, real-time GPS tracking, live chat, dynamic pricing, push notifications, multi-currency support, and admin tools for driver approvals, payments, reports, and loyalty programs.", tags: ["Laravel", "JavaScript", "Stripe"], repo: "https://github.com/talaosman/DeliveryApp" },
  { name: "Cloud Deployment — NJS-AZ-FRD", desc: "Node.js Azure Full Resource Deployment: hosted a Node.js application on Microsoft Azure with full resource setup — Web App, Functions, SQL, Key Vault, Storage, and CI/CD automation.", tags: ["Node.js", "Azure", "CI/CD"] },
  { name: "Heart Disease Prediction System", desc: "Machine learning pipeline with preprocessing, model selection, and evaluation; multiple algorithms with hyperparameter tuning, plus CNN models explored for medical image-based prediction.", tags: ["Python", "Machine Learning", "CNN"] },
  { name: "Medical Center Management System", desc: "JavaFX/Java application with secure login, user management, and storage of patient files, appointments, and staff using databases and CSV files.", tags: ["JavaFX", "Java", "Database", "CSV"], repo: "https://github.com/talaosman/Medical-Center-Management" },
  { name: "University Teacher Management", desc: "C++ system using OOP, pointers, and linked lists to manage teachers and schedules, with feedback, teacher ranking, disk storage, and a visual interface.", tags: ["C++", "OOP", "Linked Lists"] },
  { name: "Course Management System", desc: "Java application helping students manage university courses, with CSV-based data persistence.", tags: ["Java", "CSV"] },
  { name: "University Website", desc: "Responsive university portal in HTML, CSS, JavaScript, and Bootstrap with faculties, events, campuses, admission, and sign-up.", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
  { name: "Travel Booking Website", desc: "Responsive city tour guide in HTML, CSS, JavaScript, and Bootstrap with city management, a feedback form, and cross-device accessibility.", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"], demo: "https://travelbookingcity.netlify.app" },
];

const TIERS = [
  { max: 480, slidesToShow: 1, arrows: false },
  { max: 700, slidesToShow: 1, arrows: false },
  { max: 1024, slidesToShow: 2, arrows: true },
  { max: Infinity, slidesToShow: 3, arrows: true },
];

const ProjectsList = () => {
  const { slidesToShow, arrows } = useCarouselTier(TIERS);

  const settings = {
    dots: true,
    arrows,
    infinite: true,
    speed: 450,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
  <ProjectsSection id="projects">
    <SectionHeading index="03">Projects</SectionHeading>
    <motion.div
      className="carousel-wrap"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <Slider key={slidesToShow} {...settings}>
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
};

export default ProjectsList;
