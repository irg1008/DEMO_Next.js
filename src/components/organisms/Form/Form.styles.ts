import styled from "styled-components";
import shadows from "styles/shadows";
import media from "styles/media";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormInnerWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 30px;
  @media screen and (max-width: ${media.mediumSmall}) {
    width: 100%;
  }
`;

const Form = styled.form`
  height: auto;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 40px;
  border-radius: 12px;
  ${shadows.depthShadow};
`;

const FormTitle = styled.h1`
  margin-bottom: 10px;
  &:after {
    content: "";
    margin: 10px auto;
    display: block;
    width: 20%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.dark};
    border-radius: 10px;
  }
`;

const ExtraContent = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Styled = {
  FormWrapper,
  FormInnerWrapper,
  Form,
  FormTitle,
  ExtraContent,
};

export default Styled;
