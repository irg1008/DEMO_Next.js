import { GoogleOutlined } from "@ant-design/icons/";
import Styled from "./GoogleButton.styles";
import { useGoogleLogin, GoogleLoginResponse } from "react-google-login";

import { signWithGoogle } from "middlewares/auth";
import useUser from "lib/useUser";
import Router from "routes";

type GoogleProps = {
  text: string;
};

const GoogleButton = ({ text }: GoogleProps) => {
  const { setUser } = useUser();

  const handleGoogleSign = async (googleResponse: GoogleLoginResponse) => {
    const { email, name } = googleResponse.profileObj;

    const res = await signWithGoogle(name, email);

    if (!res.success) {
      console.error(res);
    } else {
      await setUser(res.user);
      Router.push("/");
    }
  };

  const handleError = ({ error }: { error: string }) => {
    console.error(error);
  };

  const { signIn } = useGoogleLogin({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    uxMode: "popup",
    onSuccess: handleGoogleSign,
    onFailure: handleError,
  });

  return (
    <Styled.GoogleButton type="button" onClick={signIn}>
      <Styled.GoogleIcon>
        <GoogleOutlined />
      </Styled.GoogleIcon>
      <Styled.ButtonText>{text}</Styled.ButtonText>
    </Styled.GoogleButton>
  );
};

export default GoogleButton;
