import styled, { css } from "styled-components";
import { constants, shadows, media } from "styles";

const NavWrapper = styled.nav`
  margin-bottom: ${constants.navHeight};
`;

const Nav = styled.div<{ open: boolean }>`
  z-index: 2;
  width: 100%;
  min-height: ${constants.navHeight};
  position: fixed;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${({ open, theme }) =>
    open ? theme.colors.light : theme.colors.lightOpacity};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  backdrop-filter: blur(0.5rem);
  ${shadows.shadowDown};
  @media screen and (max-width: ${media.medium}) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const NavBG = styled.div<{ open: boolean }>`
  z-index: 1;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.grey2Opacity};
  backdrop-filter: blur(0.5rem);
  opacity: 1;
  display: none;
  @media screen and (max-width: ${media.medium}) {
    display: block;
  }
  ${({ open }) =>
    open
      ? css`
          cursor: pointer;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
  transition: opacity 0.3s ease;
`;

const NavLogo = styled.div`
  height: 24px;
  cursor: pointer;
`;

const NavLeft = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${media.medium}) {
    width: 100%;
    min-height: ${constants.navHeight};
  }
`;

const NavRight = styled.div<{ open: boolean }>`
  display: flex;
  overflow: hidden;
  width: 300px;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: ${media.medium}) {
    width: 100%;
    flex-direction: column;
    ${({ open }) =>
      open
        ? css`
            height: 18em;
          `
        : css`
            height: 0;
          `};
  }
  transition: height 0.1s ease-out;
`;

const NavHam = styled.div`
  width: auto;
  height: auto;
  display: none;
  @media screen and (max-width: ${media.medium}) {
    display: block;
  }
`;

const Styled = {
  Nav,
  NavWrapper,
  NavLogo,
  NavLeft,
  NavRight,
  NavHam,
  NavBG,
};

export default Styled;
