// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { margin:0; padding:0; box-sizing:border-box; }

  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
    color: #f5f5f5;
    scroll-behavior: smooth;
  }

  a { text-decoration:none; color: inherit; }
  ul { list-style: none; }

  /* Glassmorphism utility */
  .glass {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  }
`;

export default GlobalStyle;
