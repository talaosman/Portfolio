// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Color tokens */
    --bg: #0a0a0f;
    --bg-alt: #0d0e16;
    --surface: #12141c;
    --surface-hover: #171a24;
    --border: rgba(255, 255, 255, 0.08);
    --border-strong: rgba(255, 255, 255, 0.16);

    --text: #f2f3f5;
    --text-muted: #9aa1b0;
    --text-faint: #6b7280;

    --accent: #7c6fef;
    --accent-soft: rgba(124, 111, 239, 0.14);
    --accent-2: #34e0a1;
    --accent-2-soft: rgba(52, 224, 161, 0.14);

    --danger: #ef4444;

    /* Typography */
    --font-heading: "Space Grotesk", "Segoe UI", sans-serif;
    --font-body: "Inter", "Segoe UI", sans-serif;
    --font-mono: "JetBrains Mono", "Courier New", monospace;

    /* Spacing / radius */
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 22px;
    --section-max: 1150px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--text);
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-heading);
    line-height: 1.2;
  }

  a { text-decoration: none; color: inherit; }
  ul { list-style: none; }
  button { font-family: inherit; }

  ::selection {
    background: var(--accent-soft);
    color: var(--text);
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Glassmorphism utility */
  .glass {
    background: var(--surface);
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
