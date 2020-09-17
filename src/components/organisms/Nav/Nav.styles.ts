import styled from "styled-components";
import { constants, shadows, media } from "styles";

const NavWrapper = styled.nav`
  margin-bottom: ${constants.navHeight};
  z-index: 1;
`;

const Nav = styled.div`
  width: 100%;
  height: ${constants.navHeight};
  position: fixed;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.lightOpacity};
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: space-between;
  backdrop-filter: blur(0.5rem);
  ${shadows.shadowDown};
`;

const NavLogo = styled.div`
  height: 24px;
  cursor: pointer;
`;

const NavMain = styled.div`
  display: flex;
  width: 300px;
  height: auto;
  align-items: center;
  justify-content: space-between;
`;

const Styled = {
  Nav,
  NavWrapper,
  NavLogo,
  NavMain,
};

export default Styled;
