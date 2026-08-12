import styled, { css } from "styled-components";

const base = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem 1.7rem;
  border-radius: 50px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const PrimaryButton = styled.a`
  ${base}
  background: var(--accent);
  color: #08080c;
  border: 1px solid var(--accent);

  &:hover {
    box-shadow: 0 0 24px var(--accent-soft);
    background: #8f84f3;
  }
`;

export const GhostButton = styled.a`
  ${base}
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border-strong);

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;
