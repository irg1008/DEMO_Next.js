import Styled from "./Input.styles";

type InputProps = {
  displayError: boolean;
  type: string;
  name: string;
};

const Input = ({ displayError, type, name, ...props }: InputProps) => (
  <Styled.Input {...{ ...props, type, name, displayError }} autoComplete="on" />
);

export default Input;
