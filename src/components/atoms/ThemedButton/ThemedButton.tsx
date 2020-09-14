import Styled from "./ThemedButton.styles";

type ButtonProps = {
  disabled: boolean;
  text: string;
  type: "submit" | "reset" | "button";
};

const Button = ({ disabled, text, type }: ButtonProps) => (
  <Styled.ButtonWrapper>
    <Styled.Button {...{ disabled, type }}>{text}</Styled.Button>
  </Styled.ButtonWrapper>
);

export default Button;
