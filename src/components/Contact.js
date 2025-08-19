import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding:4rem 2rem;
  h2{ text-align:center; margin-bottom:2rem; color:#007BFF; }
  form{
    max-width:600px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:1rem;
  }
  input, textarea{
    padding:0.8rem;
    border-radius:8px;
    border:1px solid #ccc;
    font-size:1rem;
  }
  button{
    padding:1rem;
    border:none;
    background:#4CAF50;
    color:#fff;
    font-weight:bold;
    cursor:pointer;
    border-radius:50px;
    &:hover{ opacity:0.8; }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </ContactSection>
  );
};

export default Contact;
