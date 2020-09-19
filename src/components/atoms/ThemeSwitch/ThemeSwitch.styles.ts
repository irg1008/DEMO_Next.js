import styled, { css } from "styled-components";

const Wrapper = styled.div<{ animate: boolean }>`
  width: auto;
  perspective: 1000px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${({ animate }) =>
    animate &&
    css`
      transform: rotateY(180deg);
    `}
`;

const Side = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const Styled = {
  Wrapper,
  Side,
};

export default Styled;
