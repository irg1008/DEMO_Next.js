import Router from "next/router";
import useSWR from "swr";
import { UserType } from "models/User";

const useUser = () => {
  const { data, mutate } = useSWR("/api/auth/user");

  const user: UserType = data;
  const setUser = (user: UserType) => mutate(user);

  return { user, setUser };
};

export default useUser;
