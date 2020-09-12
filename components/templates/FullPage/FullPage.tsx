import React from "react";
import Styled from "./FullPage.styles";

type FullPageProps = {
  children: React.ReactNode;
  color: string;
};

const FullPage: React.FC<FullPageProps> = ({ children, color }) => (
  <Styled.FullPage {...{ color }}>{children}</Styled.FullPage>
);

export default FullPage;
