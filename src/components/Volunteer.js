import React from "react";
import styled from "styled-components";

const VolunteerSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0f0f1a, #1a1a2e);

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #00d4ff;
    font-size: 2rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .card {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    padding: 1.5rem;
    border-radius: 12px;
    color: #fff;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 18px rgba(0, 212, 255, 0.35);
  }

  .card h3 {
    margin-bottom: 0.8rem;
    color: #00e676;
  }

  .card p {
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.5;
  }
`;


const Volunteer = () => (
  <VolunteerSection id="volunteer">
    <h2>Volunteer & Extracurricular</h2>
    <div className="cards"> 
      <div className="card">
        <h3>الأمير مجيدارسلان مؤسسة </h3>
        <p>Inputting & organizing client data to provide free medical care</p>
        <p>05/2022 – 03/2022, Choueifat, Lebanon</p>
      </div>
      <div className="card">
        <h3>Environmental Club – Amjad High School</h3>
        <p>Cleaned streets, planted trees, lectures on climate change</p>
      </div>
    </div>
  </VolunteerSection>
);

export default Volunteer;
