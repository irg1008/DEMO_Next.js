import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

type useUserProps = {
  redirectTo?: string;
  redirectIfNoUser?: boolean;
};

const useUser = ({ redirectTo, redirectIfNoUser }: useUserProps) => {
  const { data: user, mutate: mutateUser } = useSWR("/api/auth/user");

  useEffect(() => {
    if (
      (user && redirectTo && !redirectIfNoUser) ||
      (!user && redirectTo && redirectIfNoUser)
    )
      Router.push(redirectTo);
  }, [user, redirectTo]);

  return { user, mutateUser };
};

export default useUser;
