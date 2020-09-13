import styled, { css } from "styled-components";

const Link = styled.span<{ active: boolean }>`
  &:hover {
    text-decoration: underline;
  }
  ${(props) =>
    props.active &&
    css`
      text-decoration: underline;
    `}
`;

const Styled = {
  Link,
};

export default Styled;
