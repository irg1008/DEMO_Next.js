import { signOut } from "middlewares/auth";
import useUser from "lib/useUser";

const SignOutButton = () => {
  const { mutateUser } = useUser({});

  const signOutOnClick = async () => {
    const res = await signOut();
    mutateUser(res.user);
  };

  return <button onClick={signOutOnClick}>Sign Out</button>;
};

export default SignOutButton;
