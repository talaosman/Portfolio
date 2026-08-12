import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./shared/SectionHeading";

const ContactSection = styled.section`
  padding: 7rem 1.5rem 8rem;
  max-width: 640px;
  margin: 0 auto;

  .intro {
    text-align: center;
    color: var(--text-muted);
    margin-bottom: 2.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  label {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-muted);
    margin-bottom: 0.4rem;
    display: block;
  }

  input, textarea {
    width: 100%;
    padding: 0.85rem 1rem;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-strong);
    background: var(--surface);
    color: var(--text);
    font-size: 0.95rem;
    font-family: var(--font-body);
    transition: border-color 0.2s ease;

    &::placeholder { color: var(--text-faint); }

    &:focus {
      outline: none;
      border-color: var(--accent);
    }
  }

  textarea { resize: vertical; min-height: 120px; }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.9rem;
    border: none;
    background: var(--accent);
    color: #08080c;
    font-weight: 600;
    cursor: pointer;
    border-radius: 50px;
    font-size: 0.95rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 24px var(--accent-soft);
    }
  }

  .note {
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-faint);
    margin-top: 0.5rem;
  }
`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:talawww@hotmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <ContactSection id="contact">
      <SectionHeading index="06">Get In Touch</SectionHeading>
      <motion.p
        className="intro"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Have a role, project, or question in mind? Send a message and it'll
        open directly in your email client, ready to go.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="What would you like to talk about?"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          <FaPaperPlane /> Send Message
        </button>
        <p className="note">Opens your default email app — no data is stored.</p>
      </motion.form>
    </ContactSection>
  );
};

export default Contact;
