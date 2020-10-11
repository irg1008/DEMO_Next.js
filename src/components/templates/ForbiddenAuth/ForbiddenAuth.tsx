import useUser from "lib/useUser";
import SignOutPanel from "components/organisms/SignOutPanel";
import OnlySignedWarning from "components/organisms/OnlySignedWarning";
import Styled from "./ForbiddenAuth.styles";

type ForbiddenAuth = {
  hideWhen: "signed" | "notSigned";
};

const ForbiddenAuth: React.FC<ForbiddenAuth> = ({ children, hideWhen }) => {
  const { user } = useUser();

  if (user && hideWhen === "signed")
    return (
      <Styled.Modal>
        <SignOutPanel />
      </Styled.Modal>
    );
  else if (!user && hideWhen === "notSigned")
    return (
      <Styled.Modal>
        <OnlySignedWarning />
      </Styled.Modal>
    );
  else return <>{children}</>;
};

export default ForbiddenAuth;
