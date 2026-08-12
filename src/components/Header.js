import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import cvFile from "../assets/Tala-Osman-Resume-2026-08-12.pdf";
import profile from "../assets/Profile.jpeg";
import { PrimaryButton, GhostButton } from "./shared/Button";

const HeaderSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 6rem 1.5rem 4rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    left: 50%;
    width: 60vw;
    max-width: 700px;
    height: 60vw;
    max-height: 700px;
    transform: translateX(-50%);
    background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatar-wrap {
    position: relative;
    margin-bottom: 1.8rem;
  }

  img {
    width: 148px;
    height: 148px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border-strong);
    box-shadow: 0 0 0 8px var(--accent-soft);
  }

  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    color: var(--accent);
    margin-bottom: 1.2rem;
  }

  h1 {
    font-size: clamp(2.4rem, 6vw, 4rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 0.9rem;
    background: linear-gradient(135deg, #ffffff 40%, var(--accent) 120%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .role {
    font-size: clamp(1.05rem, 2.2vw, 1.35rem);
    font-weight: 500;
    color: var(--text-muted);
    margin-bottom: 0.6rem;
  }

  .tagline {
    max-width: 520px;
    font-size: 1rem;
    color: var(--text-faint);
    margin-bottom: 2.4rem;
  }

  .cta-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2.2rem;
  }

  .socials {
    display: flex;
    gap: 1.3rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      color: var(--text-muted);
      border: 1px solid var(--border);
      transition: all 0.25s ease;

      &:hover {
        color: var(--accent);
        border-color: var(--accent);
        transform: translateY(-3px);
      }
    }
  }
`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Header = () => (
  <HeaderSection id="home">
    <motion.div className="content" variants={container} initial="hidden" animate="show">
      <motion.div className="avatar-wrap" variants={item}>
        <img src={profile} alt="Tala Osman" />
      </motion.div>

      <motion.p className="eyebrow" variants={item}>
        Hi, I'm
      </motion.p>

      <motion.h1 variants={item}>Tala Osman</motion.h1>

      <motion.p className="role" variants={item}>
        Software Developer
      </motion.p>

      <motion.p className="tagline" variants={item}>
        B.S. Computer Science graduate building efficient, user-friendly
        applications with React, Spring Boot, Laravel, and .NET.
      </motion.p>

      <motion.div className="cta-row" variants={item}>
        <PrimaryButton href={cvFile} download="Tala-Osman-Resume.pdf">
          <FaDownload /> Download CV
        </PrimaryButton>
        <GhostButton href="#projects">View Projects</GhostButton>
      </motion.div>

      <motion.div className="socials" variants={item}>
        <a href="mailto:talawww@hotmail.com" aria-label="Email"><FaEnvelope /></a>
        <a href="https://github.com/talaosman" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/tala-osman-380412368" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://www.instagram.com/talaosman._" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
      </motion.div>
    </motion.div>
  </HeaderSection>
);

export default Header;
