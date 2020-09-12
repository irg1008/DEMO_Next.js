import React from "react";
import { useField } from "formik";

import Input from "components/atoms/Input";
import Label from "components/atoms/Label";
import Error from "components/atoms/Error";

import Styled from "./Field.styles";

type CustomInputProps = {
  label: string;
  type: string;
  name: string;
};

const Field: React.FC<CustomInputProps> = ({ label, type, name }) => {
  const [field, { error, touched }] = useField({ name, type });
  const displayError = !!error && touched;

  return (
    <Styled.FieldWrapper>
      <Label {...{ name, label }} />
      <Input {...{ ...field, name, type, displayError }} />
      <Error {...{ displayError, error }} />
    </Styled.FieldWrapper>
  );
};

export default Field;
