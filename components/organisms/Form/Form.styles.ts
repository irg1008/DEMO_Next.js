import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Form = styled.form`
  width: 400px;
  height: auto;
  background-color: #e4e4e4;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 10px -5px black;
`;

const Styled = {
  FormWrapper,
  Form,
};

export default Styled;
