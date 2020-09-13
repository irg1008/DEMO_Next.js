import React from "react";
import Styled from "./Error.styles";

type ErrorProps = {
  displayError: boolean;
  error?: string;
};

const Error: React.FC<ErrorProps> = ({ displayError, error }) =>
  displayError ? <Styled.Error>{error}</Styled.Error> : null;

export default Error;
