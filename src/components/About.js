import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Intro = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: #cccccc;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  padding: 1.8rem;
  border-radius: 15px;
  transition: transform 0.2s ease-in-out;
  text-align: center;
  color: #e6e6e6;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 20px rgba(0,170,255,0.3);
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: #00aaff;
    font-weight: 600;
  }

  p, li {
    font-size: 1rem;
    color: #cccccc;
  }

  li::before {
    content: "✔";
    color: #00ffcc;
    margin-right: 0.5rem;
  }
`;

const About = () => (
  <AboutSection id="about">
    <h2 style={{ textAlign: "center", color: "#00aaff", fontSize: "2.2rem" }}>
      About Me
    </h2>
    <Intro>
      I am a <strong>Software Developer</strong> skilled in{" "}
      <strong>React.js, React Native, Laravel, and Spring Boot</strong>.  
      With experience from multiple internships, I build{" "}
      <strong>efficient, user-friendly, and innovative applications</strong>.
    </Intro>

    <InfoGrid>
      <InfoCard>
        <h3>Education</h3>
        <p><strong>B.S. Computer Science</strong></p>
        <p>Antonine University</p>
        <p>09/2022 – 09/2025</p>
      </InfoCard>

      <InfoCard>
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
