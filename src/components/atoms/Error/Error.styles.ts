import styled from "styled-components";
import animations from "styles/animations";
import colors from "styles/colors";

const Error = styled.div`
  height: auto;
  min-height: 5px;
  color: ${colors.fieldColors.errorRed};
  animation: ${animations.fallDown} 0.2s cubic-bezier(0.15, 1.62, 0.6, 1.01);
`;

const Styled = {
  Error,
};

export default Styled;
