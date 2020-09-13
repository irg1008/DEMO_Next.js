import React from "react";
import Styled from "./Nav.styles";
import NavLinks from "components/molecules/NavLinks";
import Logo from "components/atoms/Logo";

const Nav: React.FC = () => (
  <Styled.NavWrapper>
    <Styled.Nav>
      <Logo />
      <NavLinks />
    </Styled.Nav>
  </Styled.NavWrapper>
);

export default Nav;
