import { useLayoutEffect } from "react";
import Head from "next/head";
import Styled from "./_404.styles";
import NavLinks from "components/molecules/NavLinks";
import { useTheme } from "styled-components";
import { useLayoutStore } from "contexts/LayoutStore";

const NotFound = () => {
  const theme = useTheme();
  const layout = useLayoutStore();

  useLayoutEffect(() => {
    layout.hideAll();
    return () => layout.showAll();
  }, []);

  return (
    <>
      <Head>
        <title>{"Silk&Rock - 404"}</title>
      </Head>
      <Styled.Wrapper>
        <Styled.InnerWrapper>
          <Styled.Error>404</Styled.Error>
          <Styled.Info>I'm sorry, you are lost.</Styled.Info>
          <NavLinks />
        </Styled.InnerWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default NotFound;
