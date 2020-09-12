import styled from "styled-components";

const FullPage = styled.div<{ color: string }>`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: ${(props) => props.color};
  padding: 50px 20px;
`;

const Styled = { FullPage };

export default Styled;
