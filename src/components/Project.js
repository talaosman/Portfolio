import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SectionHeading from "./shared/SectionHeading";

const ProjectsSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 980px;
  margin: 0 auto;

  /* Pages of three rows sit side by side; native horizontal scrolling
     with snap gives swipe/trackpad support for free. */
  .pager {
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overscroll-behavior-x: contain;
    scrollbar-width: none;

    &::-webkit-scrollbar { display: none; }
  }

  .list {
    flex: 0 0 100%;
    scroll-snap-align: start;
    list-style: none;
    border-top: 1px solid var(--border);
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;
    padding: 0 1.25rem;
  }

  .count {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-faint);
    font-variant-numeric: tabular-nums;

    strong {
      font-weight: 500;
      color: var(--text);
    }
  }

  .progress {
    flex: 1;
    max-width: 220px;
    height: 1px;
    background: var(--border-strong);
    position: relative;
  }

  .progress span {
    position: absolute;
    top: -0.5px;
    height: 2px;
    background: var(--accent);
    transition: left 0.4s ease;
  }

  .arrows {
    display: flex;
    gap: 0.6rem;
  }

  .arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid var(--border-strong);
    color: var(--text);
    font-size: 1rem;
    cursor: pointer;
    transition: border-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;

    &:hover:not(:disabled) {
      border-color: var(--accent);
      color: var(--accent);
    }

    &:disabled {
      opacity: 0.3;
      cursor: default;
    }

    &:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }
  }

  .row {
    position: relative;
    display: grid;
    grid-template-columns: 3.5rem 1fr auto;
    gap: 1.5rem;
    align-items: start;
    padding: 2.1rem 1.25rem;
    border-bottom: 1px solid var(--border);
    transition: background 0.3s ease;
  }

  .row:hover {
    background: linear-gradient(90deg, var(--accent-soft), transparent 70%);
  }

  .num {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--text-faint);
    padding-top: 0.35rem;
    transition: color 0.3s ease;
  }

  .row:hover .num { color: var(--accent); }

  h3 {
    font-size: clamp(1.15rem, 2.2vw, 1.4rem);
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.3;
    color: var(--text);
    margin-bottom: 0.55rem;
  }

  .summary {
    max-width: 58ch;
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--text-muted);
    margin-bottom: 0.9rem;
  }

  .stack {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.02em;
    color: var(--text-faint);
  }

  .links {
    display: flex;
    gap: 0.6rem;
    padding-top: 0.15rem;
  }

  .link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.45rem 0.9rem;
    border-radius: 50px;
    border: 1px solid var(--border-strong);
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--text);
    white-space: nowrap;
    transition: border-color 0.2s ease, color 0.2s ease;

    svg {
      font-size: 0.9rem;
      transition: transform 0.2s ease;
    }

    &:hover {
      border-color: var(--accent);
      color: var(--accent);

      svg { transform: translate(1px, -1px); }
    }

    &:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }
  }

  .private {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-faint);
    padding-top: 0.5rem;
    white-space: nowrap;
  }

  @media (max-width: 720px) {
    .controls { padding: 0 0.25rem; }
    .progress { display: none; }

    .row {
      grid-template-columns: 2.4rem 1fr;
      gap: 0.4rem 1rem;
      padding: 1.8rem 0.25rem;
    }

    .row:hover { background: none; }

    .links, .private {
      grid-column: 2;
      margin-top: 0.4rem;
      padding-top: 0;
    }
  }
`;

const projects = [
  {
    name: "Rent House Web & Mobile App",
    summary: "Rental platform with a React.js web app, a React Native mobile app, and a Spring Boot API — featuring Stripe payments, Firebase live notifications, a RAG AI chatbot, and 360° virtual tours.",
    stack: ["Spring Boot", "React.js", "React Native", "Stripe", "Firebase", "RAG"],
    demo: "https://rental-house-website-ten.vercel.app",
    repo: "https://github.com/talaosman/Rental-House-website",
  },
  {
    name: "Delivery App",
    summary: "Multi-role delivery platform built with PHP Laravel, with real-time GPS tracking, live chat, Stripe payments, and admin tools for driver approvals and loyalty programs.",
    stack: ["Laravel", "PHP", "JavaScript", "Stripe"],
    repo: "https://github.com/talaosman/DeliveryApp",
  },
  {
    name: "Travel Booking Website",
    summary: "Responsive city tour guide with city management, a feedback form, and cross-device accessibility.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demo: "https://travelbookingcity.netlify.app",
    repo: "https://github.com/talaosman/Travel-Booking-website",
  },
  {
    name: "Cloud Deployment — NJS-AZ-FRD",
    summary: "Node.js application deployed on Microsoft Azure with a full resource setup: Web App, Functions, SQL, Key Vault, Storage, and CI/CD automation.",
    stack: ["Node.js", "Azure", "CI/CD"],
  },
  {
    name: "Heart Disease Prediction System",
    summary: "Machine learning pipeline with preprocessing, model selection, and hyperparameter tuning, plus CNN models explored for medical image-based prediction.",
    stack: ["Python", "Machine Learning", "CNN"],
  },
  {
    name: "Medical Center Management System",
    summary: "JavaFX desktop application with secure login and user management, storing patient files, appointments, and staff in databases and CSV files.",
    stack: ["JavaFX", "Java", "Database", "CSV"],
    repo: "https://github.com/talaosman/Medical-Center-Management",
  },
  {
    name: "University Teacher Management",
    summary: "C++ system using OOP, pointers, and linked lists to manage teachers and schedules, with feedback, ranking, and a visual interface.",
    stack: ["C++", "OOP", "Linked Lists"],
  },
  {
    name: "Course Management System",
    summary: "Java application that helps students manage their university courses, with CSV-based data persistence.",
    stack: ["Java", "CSV"],
  },
  {
    name: "University Website",
    summary: "Responsive university portal with faculties, events, campuses, admission, and sign-up.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

const PER_PAGE = 3;
const pages = Array.from({ length: Math.ceil(projects.length / PER_PAGE) }, (_, i) =>
  projects.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE)
);
const pad = (n) => String(n).padStart(2, "0");

const ProjectRow = ({ p, n }) => (
  <motion.li
    className="row"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <span className="num">{pad(n)}</span>

    <div>
      <h3>{p.name}</h3>
      <p className="summary">{p.summary}</p>
      <p className="stack">{p.stack.join("  ·  ")}</p>
    </div>

    {p.demo || p.repo ? (
      <div className="links">
        {p.demo && (
          <a className="link" href={p.demo} target="_blank" rel="noopener noreferrer"
             aria-label={`Live demo of ${p.name} (opens in a new tab)`}>
            Live <FiArrowUpRight />
          </a>
        )}
        {p.repo && (
          <a className="link" href={p.repo} target="_blank" rel="noopener noreferrer"
             aria-label={`Source code of ${p.name} on GitHub (opens in a new tab)`}>
            <FiGithub /> Code
          </a>
        )}
      </div>
    ) : (
      <span className="private">Code on request</span>
    )}
  </motion.li>
);

const ProjectsList = () => {
  const pagerRef = useRef(null);
  const [page, setPage] = useState(0);

  // Follow the scroll position so swipes and trackpad scrolls update the
  // counter and arrows, not just button clicks.
  useEffect(() => {
    const el = pagerRef.current;
    const onScroll = () => setPage(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i) => {
    const el = pagerRef.current;
    el.scrollTo({ left: i * el.clientWidth });
  };

  const first = page * PER_PAGE + 1;
  const last = Math.min(first + PER_PAGE - 1, projects.length);

  return (
    <ProjectsSection id="projects">
      <SectionHeading index="03">Projects</SectionHeading>

      <div className="pager" ref={pagerRef}>
        {pages.map((group, gi) => (
          <ol
            key={gi}
            className="list"
            start={gi * PER_PAGE + 1}
            aria-label={`Projects ${gi * PER_PAGE + 1} to ${gi * PER_PAGE + group.length}`}
          >
            {group.map((p, i) => (
              <ProjectRow key={p.name} p={p} n={gi * PER_PAGE + i + 1} />
            ))}
          </ol>
        ))}
      </div>

      <div className="controls">
        <p className="count" aria-live="polite">
          <strong>{pad(first)}–{pad(last)}</strong> / {pad(projects.length)}
        </p>

        <div className="progress" aria-hidden="true">
          <span style={{ left: `${(page / pages.length) * 100}%`, width: `${100 / pages.length}%` }} />
        </div>

        <div className="arrows">
          <button type="button" className="arrow" onClick={() => goTo(page - 1)}
                  disabled={page === 0} aria-label="Previous projects">
            <FiArrowLeft />
          </button>
          <button type="button" className="arrow" onClick={() => goTo(page + 1)}
                  disabled={page === pages.length - 1} aria-label="Next projects">
            <FiArrowRight />
          </button>
        </div>
      </div>
    </ProjectsSection>
  );
};

export default ProjectsList;
