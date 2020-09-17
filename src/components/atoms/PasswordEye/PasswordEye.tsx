import Styled from "./Passwordeye.styles";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { IconButton } from "@material-ui/core";

type PasswordEyeProps = {
  onClick: () => void;
  show: boolean;
  displayError: boolean;
};

const PasswordEye = ({ onClick, show, displayError }: PasswordEyeProps) => (
  <Styled.EyeWrapper {...{ displayError }}>
    <IconButton color="inherit" {...{ onClick }}>
      <Styled.EyeIcon>
        {show ? <EyeOutlined /> : <EyeInvisibleOutlined />}
      </Styled.EyeIcon>
    </IconButton>
  </Styled.EyeWrapper>
);

export default PasswordEye;
