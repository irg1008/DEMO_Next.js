import styled from "styled-components";
import media from "styles/media";

const Layout = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Content = styled.section`
  min-width: ${media.smaller};
  height: auto;
  width: auto;
  display: inline-block;
  padding: 130px 50px 50px 50px; /* 130px is with navbar */
  background-color: ${({ theme }) => theme.colors.grey2};
  @media screen and (max-width: ${media.mediumSmall}) {
    padding: 130px 20px 50px 20px;
  }
`;

const Styled = {
  Layout,
  Content,
};

export default Styled;
