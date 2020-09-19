import styled from "styled-components";
import constant from "styles/constants";
import shadows from "styles/shadows";

const Footer = styled.footer`
  min-height: ${constant.footerHeight};
  height: auto;
  background-color: ${({ theme }) => theme.colors.light};
  ${shadows.shadowUp}
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const LogoContainer = styled.div`
  height: 50px;
  wisth: 90%;
`;

const Separator = styled.div`
  width: 98%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.dark};
  border-radius: 5px;
  margin: 40px 0;
`;

const Styled = {
  Footer,
  LogoContainer,
  Separator,
};

export default Styled;
