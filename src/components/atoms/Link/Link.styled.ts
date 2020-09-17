import styled, { css } from "styled-components";

const Link = styled.div<{ active: boolean; color?: string }>`
  color: ${({ color, theme }) => color || theme.colors.dark};
  font-weight: 500;
  text-align: center;
  &:after {
    ${({ active }) =>
      active
        ? css`
            width: 100%;
          `
        : css`
            width: 0;
            opacity: 0;
          `}
    content: "";
    display: block;
    margin: auto;
    margin-top: 5px;
    border-bottom: 1px solid;
    border-color: ${({ color, theme }) => color || theme.colors.dark};
    border-radius: 5px;
    transition: width 0.4s ease, opacity 0.4s ease;
  }
  ${({ active }) =>
    !active &&
    css`
      &:hover:after {
        width: 50%;
        opacity: 1;
      }
    `}
`;

const Styled = {
  Link,
};

export default Styled;
