import Styled from "./OnlySignedWarning.styles";
import { WarningOutlined } from "@ant-design/icons";

const OnlySignedWarning = () => (
  <Styled.Wrapper>
    <Styled.Warning>
      <WarningOutlined />
    </Styled.Warning>
    <h2>You need to be signed in to access this page</h2>
  </Styled.Wrapper>
);

export default OnlySignedWarning;
