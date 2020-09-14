import Styled from "./Nav.styles";
import Link from "next/link";

import { useThemeStore } from "contexts/ThemeStore";

import NavLinks from "components/molecules/NavLinks";
import Logo from "components/atoms/Logo";

const Nav = () => {
  const { toggleTheme } = useThemeStore();

  return (
    <Styled.NavWrapper>
      <Styled.Nav>
        <Link href="/">
          <Styled.NavLogo>
            <Logo />
          </Styled.NavLogo>
        </Link>
        <button onClick={toggleTheme}>Change Theme</button>
        <NavLinks />
      </Styled.Nav>
    </Styled.NavWrapper>
  );
};

export default Nav;
