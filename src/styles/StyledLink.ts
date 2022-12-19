import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface iStyledProps {
  width?: string;
  height?: string;
  bg?: string;
  position?: boolean;
  hover?: boolean;
  colorHover?: string;
  registerlink?: string;
}

export const StyledLink = styled(Link)<iStyledProps>`
  cursor: pointer;

  border-radius: ${({ theme }) => theme.border.radius1};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1.25rem;

  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size5};

  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};

  background-color: ${({ theme, bg }) =>
    bg ? theme.colors[bg] : theme.colors.primary};

  height: ${({ height }) => (height === "medium" ? "2.5rem" : "3.75rem")};

  width: ${({ width }) => (width ? width : "fit-content")};

  ${({ position }) =>
    position &&
    css`
      position: absolute;
      right: 0.5rem;
    `};

  &:hover {
    opacity: 0.7;
  }

  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ colorHover, theme }) =>
          colorHover ? theme.colors[colorHover] : theme.colors.white};
        opacity: 1;
      }
    `}

  ${({ registerlink }) =>
    registerlink &&
    css`
      border: none;

      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray50};

      padding: 0;

      height: fit-content;

      font-size: 0.875rem;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
        opacity: 0.9;
      }
    `}
`;
