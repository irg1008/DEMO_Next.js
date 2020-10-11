import styled from "styled-components";
import { colors } from "styles";

const Wrapper = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
`;

const Warning = styled.div`
  color: ${colors.fieldColors.errorRed};
  font-size: 80pt;
  text-align: center;
`;

const Styled = {
  Wrapper,
  Warning,
};

export default Styled;
