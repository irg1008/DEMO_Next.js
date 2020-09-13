import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import Styled from "./Link.styled";

export type LinkProps = {
  id?: React.ReactText;
  href: string;
  text: string;
};

const Link: React.FC<LinkProps> = ({ href, text }) => {
  const router = useRouter();
  const activeLink = router.pathname === href;

  return (
    <Styled.Link active={activeLink}>
      <NextLink {...{ href }}>{text}</NextLink>
    </Styled.Link>
  );
};

export default Link;
