import React from "react";
import Head from "next/head";
import Layout from "components/templates/Layout";
import Styled from "./404.styles";
import NavLinks from "components/molecules/NavLinks";

const NotFound: React.FC = () => (
  <>
    <Head>
      <title>Not Found - 404</title>
    </Head>
    <Layout hideNav hideFooter>
      <Styled.Wrapper>
        <Styled.Error>404</Styled.Error>
        <Styled.Info>I'm sorry, you are lost.</Styled.Info>
        <NavLinks />
      </Styled.Wrapper>
    </Layout>
  </>
);

export default NotFound;
