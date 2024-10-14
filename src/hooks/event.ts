import { useState } from "react";
import { IEvents } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import { keyCollection } from "../constants/constants";
import { firebaseStore } from "../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const useGetEvent = () => {
  const [events, setEvents] = useState<IEvents[]>();

  useQuery({
    queryKey: [keyCollection.events],
    queryFn: () => {
      const q = query(
        collection(firebaseStore, keyCollection.events),
        orderBy("title")
      );
      getDocs(q).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const item = doc.data() as IEvents;
          item.id = doc.id;
          return item;
        });

        setEvents(data);
        return data;
      });
    },
    staleTime: Infinity,
  });
  return { events };
};
