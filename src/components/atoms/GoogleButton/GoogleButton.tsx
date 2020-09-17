import { GoogleOutlined } from "@ant-design/icons/";
import Styled from "./GoogleButton.styles";

type GoogleProps = {
  text: string;
};

const GoogleButton = ({ text }: GoogleProps) => (
  <Styled.GoogleButton type="button">
    <Styled.GoogleIcon>
      <GoogleOutlined />
    </Styled.GoogleIcon>
    <Styled.ButtonText>{text}</Styled.ButtonText>
  </Styled.GoogleButton>
);

export default GoogleButton;
