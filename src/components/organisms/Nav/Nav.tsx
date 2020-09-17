import Styled from "./Nav.styles";
import Link from "next/link";
import routes from "routes";

import NavLinks from "components/molecules/NavLinks";
import Logo from "components/atoms/Logo";
import ThemeSwitch from "components/atoms/ThemeSwitch";
import HamIcon from "components/atoms/HamIcon";

const Nav = () => (
  <Styled.NavWrapper>
    <Styled.Nav>
      <Link href={routes.home}>
        <Styled.NavLogo>
          <Logo />
        </Styled.NavLogo>
      </Link>
      <HamIcon />
      <Styled.NavMain>
        <NavLinks />
        <ThemeSwitch />
      </Styled.NavMain>
    </Styled.Nav>
  </Styled.NavWrapper>
);

export default Nav;
