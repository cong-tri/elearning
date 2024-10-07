import { useState } from "react";
import { IBlogs } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import { keyCollection } from "../constants/constants";
import { firebaseStore } from "../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const useGetBlog = () => {
  const [blogs, setBlogs] = useState<IBlogs[]>();

  useQuery({
    queryKey: [keyCollection.blogs],
    queryFn: () => {
      const q = query(
        collection(firebaseStore, keyCollection.blogs),
        orderBy("blog_id")
      );
      getDocs(q).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const item = doc.data() as IBlogs;
          item.id = doc.id;
          return item;
        });

        setBlogs(data);
        return data;
      });
    },
    staleTime: Infinity,
  });
  return { blogs };
};
