import SignOutButton from "components/atoms/SignOutButton";
import Styled from "./SignOutPanel.styles";

const SignOutPanel = () => (
  <Styled.Wrapper>
    <h1>Do you want to sign out?</h1>
    <SignOutButton />
  </Styled.Wrapper>
);

export default SignOutPanel;
