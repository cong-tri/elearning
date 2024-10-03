import { useQuery } from "@tanstack/react-query";
import { public_api_auth_login } from "../constants/constants";

export const useAuthLogin = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const { data } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const response = await fetch(public_api_auth_login, {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    staleTime: Infinity,
  });
  return { jwt: data };
};
