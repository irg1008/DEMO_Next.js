import { useEffect } from "react";
import Styled from "./Nav.styles";
import Link from "components/atoms/Link";
import NavLinks from "components/molecules/NavLinks";
import Logo from "components/atoms/Logo";
import ThemeSwitch from "components/atoms/ThemeSwitch";
import HamIcon from "components/atoms/HamIcon";
import { useState } from "react";

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [onTop, setOnTop] = useState(true);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  const closeMenu = () => setMenuIsOpen(false);

  const onScroll = () => {
    const currentY = window.scrollY;
    setOnTop(currentY < 40);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      <Styled.Nav open={menuIsOpen} isOnTop={onTop}>
        <Styled.NavLeft>
          <Link href="/">
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
    </nav>
  );
};

export default Nav;
