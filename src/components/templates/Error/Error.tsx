import { useEffect } from "react";
import Head from "next/head";
import NavLinks from "components/molecules/NavLinks";
import { useLayoutStore } from "contexts/LayoutStore";
import Styled from "./Error.styles";

type ErrorProps = {
  error: number;
  text: string;
};

const Error = ({ error, text }: ErrorProps) => {
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
          <Styled.Error>{error}</Styled.Error>
          <Styled.Info>{text}</Styled.Info>
          <NavLinks />
        </Styled.InnerWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default Error;
