import { useQuery } from "@tanstack/react-query";
import { Users } from "../types/types";
import { public_api_users } from "../constants/constants";

export const useGetUser = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch(public_api_users);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    staleTime: Infinity,
  });
  return { users: data as Users[] };
};
