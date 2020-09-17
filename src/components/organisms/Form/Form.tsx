import React from "react";
import Styled from "./Form.styles";

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title?: string;
  extraContent?: React.ReactNode;
};

const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  title,
  extraContent,
}) => (
  <Styled.FormWrapper>
    <Styled.FormInnerWrapper>
      {title && <Styled.FormTitle>{title}</Styled.FormTitle>}
      <Styled.Form noValidate {...{ onSubmit }}>
        {children}
      </Styled.Form>
      {extraContent && (
        <Styled.ExtraContent>{extraContent}</Styled.ExtraContent>
      )}
    </Styled.FormInnerWrapper>
  </Styled.FormWrapper>
);

export default Form;
