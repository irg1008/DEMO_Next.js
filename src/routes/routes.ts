import NextRouter from "next/router";

type Routes = "/" | "/signin" | "/signup";

const push = (to: Routes) => NextRouter.push(to);

const Router = {
  push,
};

export type { Routes };
export default Router;
