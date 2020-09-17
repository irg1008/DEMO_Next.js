import styled, { css } from "styled-components";
import animations from "styles/animations";

const Wrapper = styled.div<{ isDark: boolean; animate: boolean }>`
  width: auto;
  ${({ animate, isDark }) =>
    animate &&
    css`
      animation: ${animations.scaleDown} 0.3s ease-in-out ${isDark && "reverse"};
    `}
`;

const Styled = {
  Wrapper,
};

export default Styled;
