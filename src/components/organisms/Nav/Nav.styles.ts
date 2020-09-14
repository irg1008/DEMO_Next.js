import styled from "styled-components";
import constant from "styles/constants";
import shadows from "styles/shadows";

const NavWrapper = styled.nav`
  margin-bottom: ${constant.navHeight};
`;

const Nav = styled.div`
  width: 100%;
  height: ${constant.navHeight};
  position: fixed;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.lightOpacity};
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(0.5rem);
  ${shadows.shadowDown};
`;

const NavLogo = styled.div`
  height: 24px;
  cursor: pointer;
`;

const Styled = {
  Nav,
  NavWrapper,
  NavLogo,
};

export default Styled;
