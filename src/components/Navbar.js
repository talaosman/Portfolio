import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#contact", label: "Contact" },
];

const Bar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $scrolled }) => ($scrolled ? "0.9rem 2rem" : "1.4rem 2rem")};
  background: ${({ $scrolled }) => ($scrolled ? "rgba(10,10,15,0.85)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(14px)" : "none")};
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? "var(--border)" : "transparent")};
  transition: padding 0.3s ease, background 0.3s ease, border-color 0.3s ease;

  .logo {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.15rem;
    letter-spacing: 0.02em;
    color: var(--text);

    span { color: var(--accent); }
  }

  .links {
    display: flex;
    align-items: center;
    gap: 2.1rem;
  }

  .links a {
    position: relative;
    font-size: 0.92rem;
    font-weight: 500;
    color: var(--text-muted);
    transition: color 0.2s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      height: 2px;
      width: 0;
      background: var(--accent);
      transition: width 0.2s ease;
    }

    &:hover { color: var(--text); }

    &.active {
      color: var(--accent);
      &::after { width: 100%; }
    }
  }

  .menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--text);
    font-size: 1.4rem;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    .links { display: none; }
    .menu-btn { display: flex; }
  }
`;

const MobilePanel = styled(motion.div)`
  position: fixed;
  inset: 0;
  top: 0;
  z-index: 99;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;

  a {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text);

    &.active { color: var(--accent); }
  }

  .close-btn {
    position: absolute;
    top: 1.6rem;
    right: 2rem;
    background: none;
    border: none;
    color: var(--text);
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <>
      <Bar $scrolled={scrolled}>
        <a href="#home" className="logo">
          Tala<span>.</span>Osman
        </a>

        <div className="links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? "active" : ""}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </Bar>

      <AnimatePresence>
        {open && (
          <MobilePanel
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleClick}
                className={active === l.href.slice(1) ? "active" : ""}
              >
                {l.label}
              </a>
            ))}
          </MobilePanel>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
