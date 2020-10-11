import styled from "styled-components";
import colors from "styles/colors";

const Button = styled.button<{ color?: string }>`
  margin-top: 20px;
  min-height: 40px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme, color }) => color || theme.colors.main};
  &:hover {
    background-color: ${({ theme, color }) =>
      colors.getBrightened(color || theme.colors.main)};
  }
`;

const Styled = {
  Button,
};

export default Styled;
