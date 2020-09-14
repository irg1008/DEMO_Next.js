import styled from "styled-components";
import shadows from "styles/shadows";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  padding: 30px 0;
`;

const Form = styled.form`
  width: 400px;
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

const Styled = {
  FormWrapper,
  Form,
};

export default Styled;
