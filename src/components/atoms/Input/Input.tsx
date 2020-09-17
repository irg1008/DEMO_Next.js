import { useState } from "react";
import Styled from "./Input.styles";
import PasswordEye from "components/atoms/PasswordEye";

type InputProps = {
  displayError: boolean;
  type: string;
  name: string;
};

const Input = ({ displayError, type, name, ...props }: InputProps) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <Styled.InputWrapper>
      <Styled.Input
        {...{ ...props, name, displayError }}
        autoComplete="on"
        type={isPassword && show ? "text" : type}
        isPassword
      />
      {isPassword && (
        <PasswordEye
          onClick={() => setShow(!show)}
          {...{ show, displayError }}
        />
      )}
    </Styled.InputWrapper>
  );
};

export default Input;
