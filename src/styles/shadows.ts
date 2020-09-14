import { css } from "styled-components";

const depthShadow = css`
  box-shadow: 0 0 10px -5px rgb(0, 0, 0, 1);
`;

const shadowUp = css`
  box-shadow: 0px -4px 5px -4px rgb(0, 0, 0, 0.6);
`;

const shadowDown = css`
  box-shadow: 0px 4px 5px -4px rgb(0, 0, 0, 0.6);
`;

const shadows = {
  depthShadow,
  shadowUp,
  shadowDown,
};

export default shadows;
