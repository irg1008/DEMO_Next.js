import Styled from "./Nav.styles";
import Link from "next/link";

import { useThemeStore } from "contexts/ThemeStore";

import NavLinks from "components/molecules/NavLinks";
import Logo from "components/atoms/Logo";
import ThemeSwitch from "components/atoms/ThemeSwitch";

const Nav = () => {
  const { toggleTheme } = useThemeStore();

  return (
    <Styled.NavWrapper>
      <Styled.Nav>
        <Styled.NavMain>
          <Link href="/">
            <Styled.NavLogo>
              <Logo />
            </Styled.NavLogo>
          </Link>
          <NavLinks />
        </Styled.NavMain>
        <ThemeSwitch />
      </Styled.Nav>
    </Styled.NavWrapper>
  );
};

export default Nav;
