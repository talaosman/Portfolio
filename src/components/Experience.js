import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Briefcase, Code, Database } from "lucide-react";
import SectionHeading from "./shared/SectionHeading";

const ExperienceSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: var(--section-max);
  margin: 0 auto;

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.6rem;
  }

  .card {
    padding: 2rem;
    border-radius: var(--radius-lg);
    color: var(--text);
    background: var(--surface);
    border: 1px solid var(--border);
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
    margin-bottom: 1.4rem;
  }

  .icon {
    width: 22px;
    height: 22px;
    color: var(--accent);
  }

  .card h3 {
    margin-bottom: 0.4rem;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text);
  }

  .date {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--text-faint);
    margin-bottom: 1.1rem;
  }

  .card p:last-child {
    font-size: 0.95rem;
    color: var(--text-muted);
    strong { color: var(--text); }
  }
`;

const roles = [
  {
    icon: Code,
    title: "Software Intern",
    company: "Dualcom Consulting / Nokia",
    date: "07/2025 – 09/2025 · Khaldeh, Lebanon",
    desc: (
      <>Developed features using <strong>React.js</strong> &{" "}
      <strong>Spring Boot</strong>. Worked on AI-driven solutions.</>
    ),
  },
  {
    icon: Database,
    title: ".NET Developer Intern",
    company: "Inkript Resources Group",
    date: "01/2025 – 02/2025 · Beirut, Lebanon",
    desc: (
      <>Built <strong>RESTful APIs</strong> with <strong>ASP.NET Core</strong>.
      Improved database architecture, worked in <strong>Agile Scrum</strong>.</>
    ),
  },
  {
    icon: Briefcase,
    title: "Accounting Intern",
    company: "Sara Food Group",
    date: "04/2022 – 05/2022 · Khaldeh, Lebanon",
    desc: <>Processed credit/debit transactions & created reports for business decisions.</>,
  },
];

const Experience = () => (
  <ExperienceSection id="experience">
    <SectionHeading index="02">Professional Experience</SectionHeading>
    <div className="cards">
      {roles.map((r, i) => (
        <motion.div
          className="card"
          key={r.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="icon-wrap">
            <r.icon className="icon" />
          </div>
          <h3>{r.title} – {r.company}</h3>
          <p className="date">{r.date}</p>
          <p>{r.desc}</p>
        </motion.div>
      ))}
    </div>
  </ExperienceSection>
);

export default Experience;
