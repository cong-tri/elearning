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

import { key, keyCollection } from "../constants/constants";
import { IUsers } from "../types/types";
import { getCookie } from "typescript-cookie";
import { signOut } from "firebase/auth";

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
  const [userProfile, setUserProfile] = useState<IUsers>();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const user = auth.currentUser;

  const token = getCookie(key.uid) ?? "";
  const userToken = token !== "" ? JSON.parse(token) : null;

  if (user !== null) {
    // console.log("user >>>", user);
  }

  useQuery({
    queryKey: [keyCollection.users, userToken?.uid],
    queryFn: async () => {
      try {
        if (token === "") {
          await signOut(auth);
        }

        if (user === null || user.uid === "") {
          console.error("User have not authorized!");
          return;
        }

        const userDocRef = doc(
          firebaseStore,
          keyCollection.users,
          userToken.uid
        );
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data() as IUsers;
          data.id = userDoc.id;

          // console.log(data);

          setUserProfile(data);
          setIsAdmin(data.role === "admin" ? true : false);

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

  if (userProfile === undefined) {
    return {};
  } else {
    // console.log(userProfile, isAdmin);
    return { userProfile, isAdmin };
  }
};
