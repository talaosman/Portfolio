import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DURATION = 1800;

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const Screen = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  overflow: hidden;

  /* Same soft accent glow as the hero, so the hand-off feels seamless. */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70vmin;
    height: 70vmin;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
    pointer-events: none;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 1.5rem;
  }

  .mark {
    position: relative;
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.2rem;
  }

  .mark svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .spin {
    animation: spin 1.6s linear infinite;
    transform-origin: 50% 50%;
  }

  .initials {
    font-family: var(--font-heading);
    font-size: 1.45rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: var(--text);

    span { color: var(--accent); }
  }

  h1 {
    font-family: var(--font-heading);
    font-size: clamp(1.9rem, 6vw, 2.6rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    background: linear-gradient(135deg, #ffffff 40%, var(--accent) 120%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.7rem;
  }

  .role {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-bottom: 2.6rem;
  }

  .progress {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .track {
    position: relative;
    width: 168px;
    height: 2px;
    border-radius: 2px;
    background: var(--border);
    overflow: hidden;
  }

  .fill {
    position: absolute;
    inset: 0;
    transform-origin: left center;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
  }

  .pct {
    min-width: 3ch;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-align: right;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @media (prefers-reduced-motion: reduce) {
    .spin { animation: none; }
  }
`;

const rise = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Loader = ({ onDone }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    let finished = false;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      setProgress(easeInOutCubic(t));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else if (!finished) {
        finished = true;
        onDone();
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);

  return (
    <Screen
      role="status"
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(6px)", transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="content">
        <motion.div className="mark" variants={rise} custom={0} initial="hidden" animate="show">
          <svg viewBox="0 0 88 88" aria-hidden="true">
            <defs>
              <linearGradient id="loader-arc" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--accent-2)" />
              </linearGradient>
            </defs>
            <circle cx="44" cy="44" r="42" fill="none" stroke="var(--border-strong)" strokeWidth="1" />
            <circle
              className="spin"
              cx="44"
              cy="44"
              r="42"
              fill="none"
              stroke="url(#loader-arc)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="66 198"
            />
          </svg>
          <span className="initials">
            T<span>.</span>O
          </span>
        </motion.div>

        <motion.h1 variants={rise} custom={1} initial="hidden" animate="show">
          Tala Osman
        </motion.h1>

        <motion.p className="role" variants={rise} custom={2} initial="hidden" animate="show">
          Software Developer
        </motion.p>

        <motion.div className="progress" variants={rise} custom={3} initial="hidden" animate="show">
          <div className="track">
            <div className="fill" style={{ transform: `scaleX(${progress})` }} />
          </div>
          <span className="pct">{Math.round(progress * 100)}%</span>
        </motion.div>
      </div>
    </Screen>
  );
};

export default Loader;
