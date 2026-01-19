import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";

const ContactSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1rem;
  background: #0f0f1a;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(90deg, #00aaff, #00ffcc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    gap: 1rem;

    input, textarea {
      padding: 0.8rem 1rem;
      border-radius: 10px;
      border: 1px solid #00aaff;
      background: rgba(0,0,0,0.3);
      color: #fff;
      font-size: 1rem;
    }

    button {
      background: rgba(0,170,255,0.2);
      color: #fff;
      border: 1px solid #00aaff;
      padding: 0.9rem 1.8rem;
      border-radius: 50px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        background: rgba(0,170,255,0.35);
        box-shadow: 0 0 15px #00aaff;
      }
    }
  }

  .success-message {
    margin-top: 1rem;
    color: #00ffcc;
  }
`;

const ContactSection = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🚫 stop redirect
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mlgggepa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
      setSuccess(true); 

      setTimeout(() => {
      setSuccess(false); 
      }, 5000);
      
      e.target.reset(); 
      }
    } catch (error) {
      console.error("Form error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactSectionStyled id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="6" required />

        <button type="submit" disabled={loading}>
          <FaEnvelope /> {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && (
        <div className="success-message">
          Message sent successfully! Thank you 🙏
        </div>
      )}
    </ContactSectionStyled>
  );
};

export default ContactSection;
