import React from "react";
import Styled from "./Button.styles";

type ButtonProps = {
  disabled: boolean;
  text: string;
  type: "submit" | "reset" | "button";
};

const Button: React.FC<ButtonProps> = ({ disabled, text, type }) => (
  <Styled.ButtonWrapper>
    <button {...{ disabled, type }}>{text}</button>
  </Styled.ButtonWrapper>
);

export default Button;
