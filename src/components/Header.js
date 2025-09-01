import React from "react";
import styled from "styled-components";
import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import cvFile from "../assets/Tala-Osman-FlowCV-Resume-20250818.pdf";
import profile from "../assets/Profile.jpeg";

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 1rem;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    border: 3px solid #00aaff;
    box-shadow: 0 0 20px rgba(0,170,255,0.6);
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
    background: linear-gradient(90deg, #00aaff, #00ffcc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: #cccccc;
  }

  button {
    background: rgba(0,170,255,0.2);
    color: #fff;
    border: 1px solid #00aaff;
    padding: 0.9rem 1.8rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0,170,255,0.35);
      transform: translateY(-3px);
      box-shadow: 0 0 15px #00aaff;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .socials {
    margin-top: 1.5rem;
    display: flex;
    gap: 1.2rem;

    a {
      color: #00aaff;
      font-size: 1.6rem;
      transition: color 0.3s ease;

      &:hover {
        color: #00ffcc;
      }
    }
  }
`;

const Header = () => (
  <HeaderSection id="home">
    <img src={profile} alt="Tala Osman" />
    <h1>Tala Osman</h1>
    <p>Computer Science Student | Software Developer</p>
    <button className="glass">
      <a href={cvFile} download="Tala-Osman-Resume.pdf">
        <FaDownload /> Download CV
      </a>
    </button>

    {/* Social Links */}
    <div className="socials">
      <a href="mailto:talawww@hotmail.com"><FaEnvelope /></a>
      <a href="https://github.com/talaosman" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/tala-osman-380412368" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://www.instagram.com/talaosman._" target="_blank" rel="noreferrer"><FaInstagram /></a>
    </div>
  </HeaderSection>
);

export default Header;
