import Styled from "./ThemedButton.styles";
import WaveLoader from "components/atoms/WaveLoader";

type ButtonProps = {
  disabled: boolean;
  text: string;
  type: "submit" | "reset" | "button";
};

const Button = ({ disabled, text, type }: ButtonProps) => (
  <Styled.ButtonWrapper>
    <Styled.Button {...{ disabled, type }}>
      {disabled ? <WaveLoader /> : text}
    </Styled.Button>
  </Styled.ButtonWrapper>
);

export default Button;
