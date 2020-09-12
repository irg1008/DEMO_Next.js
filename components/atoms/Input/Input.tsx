import React from "react";
import Styled from "./Input.styles";

type InputProps = {
  displayError: boolean;
  type: string;
  name: string;
};

const Input: React.FC<InputProps> = ({ displayError, type, name, ...props }) => (
  <Styled.Input {...{ ...props, type, name, displayError }} autoComplete="on" />
);

export default Input;
