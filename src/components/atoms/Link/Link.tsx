import NextLink from "next/link";
import { useRouter } from "next/router";

import Styled from "./Link.styled";

export type LinkProps = {
  id?: React.ReactText;
  href: string;
  text: string;
  color?: string;
};

const Link = ({ href, text, color }: LinkProps) => {
  const router = useRouter();
  const activeLink = router.pathname === href;

  return (
    <Styled.Link active={activeLink} {...{ color }}>
      <NextLink {...{ href }}>{text}</NextLink>
    </Styled.Link>
  );
};

export default Link;
