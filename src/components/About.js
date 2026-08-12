import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SectionHeading from "./shared/SectionHeading";

const AboutSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: var(--section-max);
  margin: 0 auto;
`;

const Intro = styled(motion.p)`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.75;
  max-width: 680px;
  margin: 0 auto 3.5rem;
  color: var(--text-muted);

  strong { color: var(--text); font-weight: 600; }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const InfoCard = styled(motion.div)`
  padding: 2rem;
  border-radius: var(--radius-lg);
  text-align: left;
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--border);
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--border-strong);
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.15rem;
    color: var(--accent);
    font-weight: 600;
  }

  p, li {
    font-size: 0.98rem;
    color: var(--text-muted);
  }

  p + p { margin-top: 0.3rem; }

  li {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  li::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-2);
    flex-shrink: 0;
  }
`;

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const About = () => (
  <AboutSection id="about">
    <SectionHeading index="01">About Me</SectionHeading>

    <Intro {...cardMotion} transition={{ duration: 0.5 }}>
      I am a <strong>Software Developer</strong> skilled in{" "}
      <strong>React.js, React Native, Laravel, Spring Boot, and .NET</strong>. With
      experience from multiple internships, I build{" "}
      <strong>efficient, user-friendly, and innovative applications</strong>.
    </Intro>

    <InfoGrid>
      <InfoCard {...cardMotion} transition={{ duration: 0.5, delay: 0.05 }}>
        <h3>Education</h3>
        <p><strong>B.S. Computer Science</strong></p>
        <p>Antonine University · Baabda, Lebanon</p>
        <p>09/2022 – 07/2026</p>
      </InfoCard>

      <InfoCard {...cardMotion} transition={{ duration: 0.5, delay: 0.15 }}>
        <h3>Languages</h3>
        <ul>
          <li>English (Fluent)</li>
          <li>Arabic (Native)</li>
          <li>French (Intermediate)</li>
        </ul>
      </InfoCard>
    </InfoGrid>
  </AboutSection>
);

export default About;
