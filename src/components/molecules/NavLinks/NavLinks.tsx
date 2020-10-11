import Styled from "./NavLinks.styles";
import { ActiveLink as Link } from "components/atoms/Link";
import useUser from "lib/useUser";
import SignOutButton from "components/atoms/SignOutButton";
import Color from "color";

type NavLinksProps = {
  color?: Color;
  onClick?: () => void;
};

const NavLinks = ({ color, onClick }: NavLinksProps) => {
  const { user } = useUser();

  return (
    <Styled.LinkList>
      <Styled.LinkElement {...{ onClick }}>
        <Link href="/" text="Home" {...{ color }} />
      </Styled.LinkElement>
      {user ? (
        <SignOutButton />
      ) : (
        <>
          <Styled.LinkElement {...{ onClick }}>
            <Link href="/signin" text="Log In" {...{ color }} />
          </Styled.LinkElement>
          <Styled.LinkElement {...{ onClick }}>
            <Link href="/signup" text="Sign Up" {...{ color }} />
          </Styled.LinkElement>
        </>
      )}
    </Styled.LinkList>
  );
};

export default NavLinks;
