import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Briefcase, Code, Database } from "lucide-react";
import SectionHeading from "./shared/SectionHeading";
import { PrevArrow, NextArrow } from "./shared/CarouselArrows";
import { carouselDots } from "./shared/carouselStyles";
import useCarouselTier from "./shared/useCarouselTier";

const ExperienceSection = styled.section`
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

  .icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-sm);
    background: var(--accent-soft);
    margin-bottom: 1.2rem;
  }

  .icon {
    width: 22px;
    height: 22px;
    color: var(--accent);
  }

  .card h3 {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.4rem;
  }

  .company {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--accent);
    margin-bottom: 0.4rem;
  }

  .date {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--text-faint);
    margin-bottom: 1rem;
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

  ${carouselDots}

  @media (max-width: 700px) {
    .carousel-wrap { padding: 0; }
    .slide-pad { padding: 0 0.25rem; }
  }
`;

const roles = [
  {
    icon: Briefcase,
    title: "Full Stack Software Engineer",
    company: "Aperture Tech Solutions",
    date: "08/2026 – Present · Downtown, Lebanon",
    desc: "Developing an insurance management system for MedGulf using Angular on the frontend and .NET on the backend. Using AI agents in the development workflow to speed up coding, testing, and delivery.",
    tags: ["Angular", ".NET", "AI Agents"],
  },
  {
    icon: Code,
    title: "Software Intern",
    company: "Dualcom Consulting / Nokia",
    date: "07/2025 – 09/2025 · Khaldeh, Lebanon",
    desc: "Developed features using React.js & Spring Boot. Worked on AI-driven solutions.",
    tags: ["React.js", "Spring Boot", "AI"],
  },
  {
    icon: Database,
    title: ".NET Developer Intern",
    company: "Inkript Resources Group",
    date: "01/2025 – 02/2025 · Beirut, Lebanon",
    desc: "Built RESTful APIs with ASP.NET Core. Improved database architecture, worked in Agile Scrum.",
    tags: ["ASP.NET Core", "REST APIs", "Agile Scrum"],
  },
  {
    icon: Briefcase,
    title: "Accounting Intern",
    company: "Sara Food Group",
    date: "04/2022 – 05/2022 · Khaldeh, Lebanon",
    desc: "Processed credit/debit transactions & created reports for business decisions.",
    tags: ["Accounting", "Reporting"],
  },
];

const TIERS = [
  { max: 480, slidesToShow: 1, arrows: false },
  { max: 700, slidesToShow: 1, arrows: false },
  { max: 1024, slidesToShow: 2, arrows: true },
  { max: Infinity, slidesToShow: 3, arrows: true },
];

const Experience = () => {
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
  <ExperienceSection id="experience">
    <SectionHeading index="02">Professional Experience</SectionHeading>
    <motion.div
      className="carousel-wrap"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <Slider key={slidesToShow} {...settings}>
        {roles.map((r) => (
          <div key={r.title} className="slide-pad">
            <div className="card">
              <div className="icon-wrap">
                <r.icon className="icon" />
              </div>
              <h3>{r.title}</h3>
              <p className="company">{r.company}</p>
              <p className="date">{r.date}</p>
              <p className="desc">{r.desc}</p>
              <div className="tags">
                {r.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  </ExperienceSection>
  );
};

export default Experience;
