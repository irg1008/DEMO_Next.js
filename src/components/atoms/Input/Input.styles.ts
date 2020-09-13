import styled, { css } from "styled-components";
import colors from "styles/colors";
import animations from "styles/animations";

const Input = styled.input<{ displayError: boolean }>`
  ${(props) =>
    props.displayError
      ? css`
          border: 2px solid ${colors.fieldColors.errorRed};
          animation: ${animations.shake} 0.5s;
          &:focus {
            box-shadow: 0 0 0 2px ${colors.fieldColors.shadowRed};
          }
        `
      : css`
          &:focus {
            border: 2px solid ${colors.fieldColors.validBlue};
            box-shadow: 0 0 0 2px ${colors.fieldColors.shadowBlue};
          }
        `}
`;

const Styled = {
  Input,
};

export default Styled;
