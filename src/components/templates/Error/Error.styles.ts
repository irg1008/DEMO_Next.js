import styled from "styled-components";


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const InnerWrapper = styled.div`
  height: 550px;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
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
  background-color: ${({ theme }) => theme.colors.main};
`;

const Styled = {
  Wrapper,
  InnerWrapper,
  Error,
  Info,
};

export default Styled;