import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  padding: 8em 5em;
  flex-direction: column;
  align-items: center;
`;

const Error = styled.h1`
  font-size: 10em;
  color: white;
  background-color: black;
`;

const Info = styled.h2`
  font-size: 2.5em;
  text-transform: capitalize;
`;

const Styled = {
  Wrapper,
  Error,
  Info,
};

export default Styled;
