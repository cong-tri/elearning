import { useState } from "react";
import { IQuizs } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import { keyCollection } from "../constants/constants";
import { firebaseStore } from "../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const useGetQuiz = () => {
  const [quizs, setQuizs] = useState<IQuizs[]>();

  useQuery({
    queryKey: [keyCollection.quizs],
    queryFn: () => {
      const q = query(
        collection(firebaseStore, keyCollection.quizs),
        orderBy("title")
      );
      getDocs(q).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const item = doc.data() as IQuizs;
          item.id = doc.id;
          return item;
        });

        setQuizs(data);
        return data;
      });
    },
    staleTime: Infinity,
  });
  return { quizs };
};
