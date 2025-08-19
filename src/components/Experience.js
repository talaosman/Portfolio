import React from "react";
import styled from "styled-components";
import { Briefcase, Code, Database } from "lucide-react";

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0d0d17, #1a1a2e);

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: #00aaff;
    font-size: 2.5rem;
    font-weight: 700;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .card {
    padding: 2rem;
    border-radius: 16px;
    color: #e6e6e6;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 0 25px rgba(0,170,255,0.4);
    }
  }

  .icon {
    width: 48px;
    height: 48px;
    color: #00ffcc;
    margin-bottom: 1.2rem;
  }

  .card h3 {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: #00aaff;
  }

  .date {
    font-size: 0.9rem;
    font-weight: 500;
    color: #aaa;
    margin-bottom: 1rem;
  }
`;

const Experience = () => (
  <ExperienceSection id="experience">
    <h2>Professional Experience</h2>
    <div className="cards">
      <div className="card">
        <Code className="icon" />
        <h3>Software Intern – Dualcom Consulting / Nokia</h3>
        <p className="date">07/2025 – 09/2025 | Khaldeh, Lebanon</p>
        <p>
          Developed features using <strong>React.js</strong> &
          <strong> Spring Boot</strong>. Worked on AI-driven solutions.
        </p>
      </div>

      <div className="card">
        <Database className="icon" />
        <h3>.NET Developer Intern – Inkript Resources Group</h3>
        <p className="date">01/2025 – 02/2025 | Beirut, Lebanon</p>
        <p>
          Built <strong>RESTful APIs</strong> with <strong>ASP.NET Core</strong>.
          Improved database architecture, worked in <strong>Agile Scrum</strong>.
        </p>
      </div>

      <div className="card">
        <Briefcase className="icon" />
        <h3>Accounting Intern – Sara Food Group</h3>
        <p className="date">04/2022 – 05/2022 | Khaldeh, Lebanon</p>
        <p>
          Processed credit/debit transactions & created reports for business
          decisions.
        </p>
      </div>
    </div>
  </ExperienceSection>
);

export default Experience;
