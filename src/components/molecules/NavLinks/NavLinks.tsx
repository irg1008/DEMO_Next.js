import Styled from "./NavLinks.styles";
import Link from "components/atoms/Link";
import useUser from "lib/useUser";
import routes from "routes";
import SignOutButton from "components/atoms/SignOutButton";

type NavLinksProps = {
  color?: string;
  onClick?: () => void;
};

const NavLinks = ({ color, onClick }: NavLinksProps) => {
  const { user } = useUser({});

  return (
    <Styled.LinkList {...{ onClick }}>
      <Styled.LinkElement>
        <Link href={routes.home} text="Home" {...{ color }} />
      </Styled.LinkElement>
      {user ? (
        <SignOutButton />
      ) : (
        <>
          <Styled.LinkElement>
            <Link href={routes.signin} text="Log In" {...{ color }} />
          </Styled.LinkElement>
          <Styled.LinkElement>
            <Link href={routes.signup} text="Sign Up" {...{ color }} />
          </Styled.LinkElement>
        </>
      )}
    </Styled.LinkList>
  );
};

export default NavLinks;
