import Styled from "./Nav.styles";
import Link from "next/link";
import routes from "routes";

import NavLinks from "components/molecules/NavLinks";
import Logo from "components/atoms/Logo";
import ThemeSwitch from "components/atoms/ThemeSwitch";
import HamIcon from "components/atoms/HamIcon";
import { useState } from "react";

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  const closeMenu = () => setMenuIsOpen(false);

  return (
    <Styled.NavWrapper>
      <Styled.Nav open={menuIsOpen}>
        <Styled.NavLeft>
          <Link href={routes.home}>
            <Styled.NavLogo>
              <Logo />
            </Styled.NavLogo>
          </Link>
          <Styled.NavHam>
            <HamIcon open={menuIsOpen} toggle={toggleMenu} />
          </Styled.NavHam>
        </Styled.NavLeft>
        <Styled.NavRight open={menuIsOpen}>
          <NavLinks onClick={closeMenu} />
          <ThemeSwitch />
        </Styled.NavRight>
      </Styled.Nav>
      <Styled.NavBG open={menuIsOpen} onClick={closeMenu} />
    </Styled.NavWrapper>
  );
};

export default Nav;
