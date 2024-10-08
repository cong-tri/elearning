import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firebaseStore } from "../firebase-config";

import { keyCollection } from "../constants/constants";
import { IUsers } from "../types/types";

export const useGetUser = () => {
  const [users, setUsers] = useState<IUsers[]>();

  useQuery({
    queryKey: [keyCollection.users],
    queryFn: () => {
      const q = query(
        collection(firebaseStore, keyCollection.users),
        orderBy("user_id")
      );
      getDocs(q).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const item = doc.data() as IUsers;
          item.id = doc.id;
          return item;
        });

        setUsers(data);
        return data;
      });
    },
    staleTime: Infinity,
  });
  return { users };
};
