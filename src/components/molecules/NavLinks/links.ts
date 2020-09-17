import { LinkProps } from "components/atoms/Link";
import routes from "routes";

const links: LinkProps[] = [
  {
    id: 0,
    href: routes.home,
    text: "Home",
  },
  {
    id: 1,
    href: routes.signin,
    text: "Log In",
  },
  {
    id: 2,
    href: routes.signup,
    text: "Sign Up",
  },
];

export default links;
