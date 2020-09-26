import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Button = styled.button`
  min-width: 150px;
  min-height: 40px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Styled = {
  ButtonWrapper,
  Button,
};

export default Styled;
