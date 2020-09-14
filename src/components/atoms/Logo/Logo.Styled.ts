import styled from "styled-components";

const Logo = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  color: ${({ color, theme }) => color || theme.colors.dark};
`;

const Styled = {
  Logo,
};

export default Styled;
