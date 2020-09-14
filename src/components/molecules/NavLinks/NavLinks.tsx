import Styled from "./NavLinks.styles";
import Link from "components/atoms/Link";
import links from "./links";

type NavLinksProps = {
  color?: string;
};

const NavLinks = ({ color }: NavLinksProps) =>
  links && (
    <Styled.LinkList>
      {links.map(({ id, href, text }) => (
        <Styled.LinkElement key={id}>
          <Link {...{ href, text, color }} />
        </Styled.LinkElement>
      ))}
    </Styled.LinkList>
  );

export default NavLinks;
