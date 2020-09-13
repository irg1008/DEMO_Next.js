import styled from "styled-components";
import colors from "styles/colors";
import constant from "styles/constants";

const NavWrapper = styled.nav`
  height: ${constant.navHeight};
`;

const Nav = styled.div`
  width: 100%;
  height: ${constant.navHeight};
  position: fixed;
  color: ${colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.8;
  -webkit-backdrop-filter: blur(0.5rem);
  backdrop-filter: blur(0.5rem);
`;

const Styled = {
  Nav,
  NavWrapper,
};

export default Styled;
