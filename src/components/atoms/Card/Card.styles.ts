import styled, { css } from "styled-components";

const CardWrapper = styled.div`
  border-radius: 8px;
  background-color: white;
  height: 300px;
  width: 200px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  color: black;
  overflow: hidden;
`;

const CardImg = styled.img<{ hovering: boolean }>`
  height: 200px;
  overflow: hidden;
  ${({ hovering }) =>
    hovering &&
    css`
      height: 300px;
    `}
  transition: 0.8s height ease;
  object-fit: cover;
`;

const CardTextWrapper = styled.div<{ hovering: boolean }>`
  height: 100px;
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  ${({ hovering }) =>
    hovering &&
    css`
      height: 0;
      opacity: 0;
    `}
  transition: 0.8s height ease, 0.4s opacity ease;
`;

const CardTitle = styled.h2``;

const CardText = styled.p``;

const Styled = { CardWrapper, CardImg, CardTextWrapper, CardTitle, CardText };

export default Styled;
