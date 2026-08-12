import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SectionHeading from "./shared/SectionHeading";

const VolunteerSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: var(--section-max);
  margin: 0 auto;

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.6rem;
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 1.8rem;
    transition: transform 0.25s ease, border-color 0.25s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    border-color: var(--border-strong);
  }

  .card h3 {
    margin-bottom: 0.7rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
  }

  .card p {
    color: var(--text-muted);
    line-height: 1.6;
  }

  .card .date {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--text-faint);
    margin-top: 0.6rem;
  }
`;

const items = [
  {
    title: "مؤسسة الأمير مجيد ارسلان",
    desc: "Inputting & organizing client data to provide free medical care",
    date: "03/2022 – 05/2022 · Choueifat, Lebanon",
  },
  {
    title: "Environmental Club – Amjad High School",
    desc: "Cleaned streets, planted trees, lectures on climate change",
  },
];

const Volunteer = () => (
  <VolunteerSection id="volunteer">
    <SectionHeading index="05">Volunteer & Extracurricular</SectionHeading>
    <div className="cards">
      {items.map((v, i) => (
        <motion.div
          className="card"
          key={v.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <h3>{v.title}</h3>
          <p>{v.desc}</p>
          {v.date && <p className="date">{v.date}</p>}
        </motion.div>
      ))}
    </div>
  </VolunteerSection>
);

export default Volunteer;
