import styled from "styled-components";
import { shadows } from "styles";

const CardImg = styled.img`
  height: 50%;
  width: 100%;
  overflow: hidden;
  transition: 0.4s height ease-in-out;
  object-fit: cover;
  object-position: center;
`;

const CardTextWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 1;
  transition: 0.2s opacity ease-in-out;
`;

const CardWrapper = styled.div`
  ${shadows.depthShadow};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.grey4};
  height: 300px;
  width: 200px;
  margin: 20px;
  display: block;
  color: ${({ theme }) => theme.colors.grey1};
  overflow: hidden;
  &:hover {
    ${CardImg} {
      height: 100%;
    }
    ${CardTextWrapper} {
      opacity: 0;
    }
  }
`;

const CardTitle = styled.h2``;

const CardText = styled.p`
  margin: 10px;
`;

const Styled = { CardWrapper, CardImg, CardTextWrapper, CardTitle, CardText };

export default Styled;
