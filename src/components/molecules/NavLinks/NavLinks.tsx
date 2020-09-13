import React from "react";
import Styled from "./NavLinks.styles";
import Link from "components/atoms/Link";
import links from "./links";

const NavLinks: React.FC = () =>
  links ? (
    <Styled.LinkList>
      {links.map(({ id, href, text }) => (
        <Styled.LinkElement key={id}>
          <Link {...{ href, text }} />
        </Styled.LinkElement>
      ))}
    </Styled.LinkList>
  ) : null;

export default NavLinks;
