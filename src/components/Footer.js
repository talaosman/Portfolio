import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa";

const FooterSection = styled.footer`
  padding: 2.5rem 1.5rem;
  text-align: center;
  border-top: 1px solid var(--border);

  .socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
  }

  .socials a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    color: var(--text-muted);
    border: 1px solid var(--border);
    font-size: 1.1rem;
    transition: all 0.25s ease;

    &:hover {
      color: var(--accent);
      border-color: var(--accent);
      transform: translateY(-3px);
    }
  }

  p {
    font-size: 0.85rem;
    color: var(--text-faint);
  }
`;

const Footer = () => (
  <FooterSection>
    <div className="socials">
      <a href="mailto:talawww@hotmail.com" aria-label="Email"><FaEnvelope /></a>
      <a href="https://github.com/talaosman" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/tala-osman-380412368" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://www.instagram.com/talaosman._" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
      <a href="tel:+96178841333" aria-label="Phone"><FaPhone /></a>
    </div>
    <p>© 2025 Tala Osman. Built with React.</p>
  </FooterSection>
);

export default Footer;
