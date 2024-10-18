import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, firebaseStore } from "../firebase-config";

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

export const useGetInfoUser = () => {
  const user = auth.currentUser;

  const { data } = useQuery({
    queryKey: [keyCollection.users, user?.uid],
    queryFn: async () => {
      try {
        if (!user || !user?.uid) {
          console.error("User have not authorized!");
          return;
        }

        const userDocRef = doc(firebaseStore, keyCollection.users, user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data() as IUsers;
          data.id = userDoc.id;
          return data;
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          return;
        }
      }
    },
    enabled: !!user?.uid,
    staleTime: Infinity,
  });

  return { userProfile: data };
};
