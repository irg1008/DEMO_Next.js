import Styled from "./Footer.styles";
import Logo from "components/atoms/Logo";

const Footer = () => (
  <Styled.Footer>
    <Styled.LogoContainer>
      <Logo />
    </Styled.LogoContainer>
    <Styled.Separator />
  </Styled.Footer>
);

export default Footer;
