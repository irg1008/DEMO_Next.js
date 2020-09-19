import styled, { css } from "styled-components";
import { colors, noSelect } from "styles";

const EyeWrapper = styled.div<{ displayError: boolean }>`
  position: absolute;
  height: 100%;
  bottom: 0;
  right: 0;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  ${({ displayError }) =>
    displayError &&
    css`
      color: ${colors.fieldColors.errorRed};
    `};
  ${noSelect};
`;

const EyeIcon = styled.span`
  font-size: 20px;
`;

const Styled = {
  EyeWrapper,
  EyeIcon,
};

export default Styled;
