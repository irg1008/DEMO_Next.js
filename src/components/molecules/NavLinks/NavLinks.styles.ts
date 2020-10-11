import styled from "styled-components";
import { media } from "styles";

const LinkList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  min-width: 15em;
  text-transform: uppercase;
  @media screen and (max-width: ${media.medium}) {
    flex-direction: column;
    min-width: auto;
    min-height: 10em;
  }
`;

const LinkElement = styled.li`
  margin: 0 5px;
  display: flex;
  align-items: center;
`;

const Styled = {
  LinkList,
  LinkElement,
};

export default Styled;
