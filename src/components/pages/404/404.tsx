import { useEffect } from "react";
import Head from "next/head";
import NavLinks from "components/molecules/NavLinks";
import { useLayoutStore } from "contexts/LayoutStore";
import Styled from "./404.styles";

const NotFound = () => {
  const layout = useLayoutStore();

  useEffect(() => {
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
