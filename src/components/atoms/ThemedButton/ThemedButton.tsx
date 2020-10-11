import Styled from "./ThemedButton.styles";
import WaveLoader from "components/atoms/WaveLoader";

type ButtonProps = {
  disabled?: boolean;
  text: string;
  type: "submit" | "reset" | "button";
  color?: string;
};

const Button = ({ disabled, text, type, color }: ButtonProps) => (
  <Styled.Button {...{ disabled, type, color }}>
    {disabled ? <WaveLoader /> : text}
  </Styled.Button>
);

export default Button;
