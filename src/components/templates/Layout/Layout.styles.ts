import styled from "styled-components";

const Layout = styled.div`
  height: auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Content = styled.section`
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.grey2};
`;

const Styled = {
  Layout,
  Content,
};

export default Styled;
