import styled from "styled-components";
import animations from "styles/animations";

const Modal = styled.div`
  width: 100%;
  min-height: 80vh;
  animation: ${animations.fallDown} 0.5s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Styled = {
  Modal,
};

export default Styled;
