import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Button = styled.button`
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Styled = {
  ButtonWrapper,
  Button,
};

export default Styled;
