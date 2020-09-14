import { useLayoutEffect } from "react";
import Head from "next/head";
import NavLinks from "components/molecules/NavLinks";
import { useTheme } from "styled-components";
import { useLayoutStore } from "contexts/LayoutStore";
import styled from "styled-components";

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

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const InnerWrapper = styled.div`
  height: 400px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Error = styled.h1`
  font-size: 10em;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.dark};
`;

const Info = styled.h2`
  font-size: 2.5em;
  text-transform: capitalize;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Styled = {
  Wrapper,
  InnerWrapper,
  Error,
  Info,
};
