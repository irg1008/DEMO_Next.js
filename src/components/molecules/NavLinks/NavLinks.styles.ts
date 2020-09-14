import styled from "styled-components";

const LinkList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: auto;
  min-width: 15em;
  text-transform: uppercase;
`;

const LinkElement = styled.li`
  margin: 0 5px;
`;

const Styled = {
  LinkList,
  LinkElement,
};

export default Styled;
