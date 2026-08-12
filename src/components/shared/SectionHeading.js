import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Heading = styled(motion.h2)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  max-width: 640px;
  margin: 0 auto 3.5rem;
  text-align: center;
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 600;
  color: var(--text);

  .num {
    font-family: var(--font-mono);
    font-size: 0.85em;
    color: var(--accent);
  }

  .rule {
    flex: 1;
    height: 1px;
    max-width: 100px;
    background: var(--border-strong);
  }

  @media (max-width: 560px) {
    .rule {
      max-width: 40px;
    }
  }
`;

const SectionHeading = ({ index, children }) => (
  <Heading
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <span className="rule" aria-hidden="true" />
    {index && <span className="num">{index}</span>}
    {children}
    <span className="rule" aria-hidden="true" />
  </Heading>
);

export default SectionHeading;
