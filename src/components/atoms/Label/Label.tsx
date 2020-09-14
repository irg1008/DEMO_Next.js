import Styled from "./Label.styles";

type LabelProps = {
  name: string;
  label: string;
};

const Label = ({ name, label }: LabelProps) => (
  <Styled.Label htmlFor={name}>{label}</Styled.Label>
);

export default Label;
