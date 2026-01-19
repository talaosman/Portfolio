import React from "react"; 
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa";

const FooterSection = styled.footer`
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #1e1e2f, #12121b);
  color: #fff;

  a { 
    margin: 0 0.8rem; 
    font-size: 1.5rem; 
    color: #fff; 
    &:hover { 
      opacity: 0.7; 
    } 
  }

  p { margin-bottom: 1rem; }
`;

const Footer = () => (
  <FooterSection>
    <p>© 2026 Tala Osman</p>
    <div>
      <a href="mailto:talawww@hotmail.com"><FaEnvelope /></a>
      <a href="https://github.com/talaosman" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/tala-osman-380412368" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://www.instagram.com/talaosman._" target="_blank" rel="noreferrer"><FaInstagram /></a>
      <a href="tel:+96178841333"><FaPhone /></a>
    </div>
  </FooterSection>
);

export default Footer;
