import React from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ $dir }) => ($dir === "prev" ? "left: -18px;" : "right: -18px;")}
  transform: translateY(-50%);
  z-index: 2;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  &.slick-disabled {
    opacity: 0.35;
    cursor: default;
    pointer-events: none;
  }

  &::before {
    content: none !important;
  }

  @media (max-width: 640px) {
    ${({ $dir }) => ($dir === "prev" ? "left: -8px;" : "right: -8px;")}
    width: 36px;
    height: 36px;
  }
`;

export const PrevArrow = ({ onClick, className }) => (
  <ArrowButton
    type="button"
    $dir="prev"
    className={className}
    onClick={onClick}
    aria-label="Previous"
  >
    <FaChevronLeft />
  </ArrowButton>
);

export const NextArrow = ({ onClick, className }) => (
  <ArrowButton
    type="button"
    $dir="next"
    className={className}
    onClick={onClick}
    aria-label="Next"
  >
    <FaChevronRight />
  </ArrowButton>
);
