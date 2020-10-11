import styled, { css } from "styled-components";
import { shadows, animations, colors } from "styles";

const Banner = styled.div<{ animate: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 300px;
  height: auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grey1};
  color: ${({ theme }) => theme.colors.dark};
  margin: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  ${shadows.depthShadow}
  ${({ animate }) =>
    animate &&
    css`
      animation: ${animations.outLeft} 0.3s linear;
    `};
`;

const Text = styled.p`
  margin: 0 10px 20px 10px;
  text-align: justify;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: auto;
`;

const Button = styled.button`
  margin: 0 5px;
  width: 100%;
`;

const Styled = {
  Banner,
  Buttons,
  Text,
  Button,
};

export default Styled;
