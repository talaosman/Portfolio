import { css } from "styled-components";

export const carouselDots = css`
  .slick-list {
    overflow: hidden;
    padding: 0.6rem 0 !important;
  }

  .slick-track {
    display: flex !important;
    align-items: stretch;
  }

  .slick-slide {
    height: auto;
    > div {
      height: 100%;
      display: flex;
    }
  }

  .slick-dots {
    position: static;
    margin-top: 2.2rem;
    display: flex !important;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .slick-dots li {
    width: auto;
    height: auto;
    margin: 0;
  }

  .slick-dots li button {
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 50%;
    background: var(--border-strong);
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .slick-dots li button:before {
    display: none;
  }

  .slick-dots li.slick-active button {
    background: var(--accent);
    transform: scale(1.2);
  }
`;
