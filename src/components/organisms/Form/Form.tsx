import React from "react";
import Styled from "./Form.styles";

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<FormProps> = ({ onSubmit, children }) => (
  <Styled.FormWrapper>
    <Styled.Form noValidate {...{ onSubmit }}>
      {children}
    </Styled.Form>
  </Styled.FormWrapper>
);

export default Form;
