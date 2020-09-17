import styled from "styled-components";
import constant from "styles/constants";
import shadows from "styles/shadows";

const NavWrapper = styled.nav`
  margin-bottom: ${constant.navHeight};
  z-index: 1;
`;

const Nav = styled.div`
  width: 100%;
  height: ${constant.navHeight};
  position: fixed;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.lightOpacity};
  display: flex;
  align-items: center;
  padding: 10px 20px;
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
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const Styled = {
  Nav,
  NavWrapper,
  NavLogo,
  NavMain,
};

export default Styled;
