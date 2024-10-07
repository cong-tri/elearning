import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { ICategory, ICourses } from "../types/types";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firebaseStore } from "../firebase-config";

import { keyCollection } from "../constants/constants";

// for category
export const useGetCategory = () => {
  const [categories, setCategories] = useState<ICategory[]>();

  useQuery({
    queryKey: [keyCollection.categories],
    queryFn: () => {
      const q = query(
        collection(firebaseStore, keyCollection.categories),
        orderBy("category_id")
      );
      getDocs(q).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const item = doc.data() as ICategory;
          item.id = doc.id;
          return item;
        });

        setCategories(data);
        return data;
      });
    },
    staleTime: Infinity,
  });
  return { categories };
};

// for course
export const useGetCourse = () => {
  const [courses, setCourses] = useState<ICourses[]>();

  useQuery({
    queryKey: [keyCollection.courses],
    queryFn: () => {
      const q = query(
        collection(firebaseStore, keyCollection.courses),
        orderBy("course_id")
      );
      getDocs(q).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const item = doc.data() as ICourses;
          item.id = doc.id;
          return item;
        });

        setCourses(data);
        return data;
      });
    },
    staleTime: Infinity,
  });
  return { courses };
};
