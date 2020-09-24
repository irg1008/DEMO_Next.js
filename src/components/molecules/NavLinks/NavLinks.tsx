import Styled from "./NavLinks.styles";
import Link from "components/atoms/Link";
import links from "./links";

type NavLinksProps = {
  color?: string;
  onClick?: () => void;
};

const NavLinks = ({ color, onClick }: NavLinksProps) =>
  links && (
    <Styled.LinkList>
      {links.map(({ id, href, text }) => (
        <Styled.LinkElement {...{ onClick }} key={id}>
          <Link {...{ href, text, color }} />
        </Styled.LinkElement>
      ))}
    </Styled.LinkList>
  );

export default NavLinks;
