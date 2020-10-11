import NextLink from "next/link";
import { useRouter } from "next/router";
import { Routes } from "routes";
import Color from "color";

import Styled from "./Link.styled";

type LinkProps = {
  href: Routes;
};

type TextLinkProps = LinkProps & {
  color?: Color;
  text: string;
};

const Link: React.FC<LinkProps> = ({ href, children }) => (
  <NextLink {...{ href }}>{children}</NextLink>
);

const ActiveLink = ({ href, color, text }: TextLinkProps) => {
  const router = useRouter();
  const activeLink = router.pathname === href;

  return (
    <Styled.Link active={activeLink} color={color?.hex()}>
      <Link {...{ href }}>{text}</Link>
    </Styled.Link>
  );
};

export { ActiveLink };
export default Link;
