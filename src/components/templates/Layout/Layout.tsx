import React from "react";
import Nav from "components/organisms/Nav";
import Styled from "./Layout.styles";

type LayoutProps = {
  children: React.ReactNode;
  hideNav?: boolean;
  hideFooter?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, hideNav, hideFooter }) => (
  <Styled.Layout>
    {!hideNav && <Nav />}
    <Styled.Content>{children}</Styled.Content>
    {!hideFooter && <footer>Footer</footer>}
  </Styled.Layout>
);

export default Layout;
