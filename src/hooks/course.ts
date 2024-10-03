import { useQuery } from "@tanstack/react-query";

import { public_api_courses } from "../constants/constants";

import { Category, Courses } from "../types/types";

export const useGetCategory = () => {
  const eventName: string = "category";

  const { data } = useQuery({
    queryKey: [eventName],
    queryFn: async () => {
      const response = await fetch(`${public_api_courses}/${eventName}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    staleTime: Infinity,
  });
  return { category: data as Category[] };
};

export const useGetCourse = () => {
  const eventName: string = "course";

  const { data } = useQuery({
    queryKey: [eventName],
    queryFn: async () => {
      const response = await fetch(`${public_api_courses}/${eventName}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    staleTime: Infinity,
  });
  return { course: data as Courses[] };
};
