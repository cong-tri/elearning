import { useState } from "react";
import { IZooms } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import { keyCollection } from "../constants/constants";
import { firebaseStore } from "../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const useGetZoom = () => {
  const [zoom, setZoom] = useState<IZooms[]>();

  useQuery({
    queryKey: [keyCollection.zoom],
    queryFn: () => {
      const q = query(
        collection(firebaseStore, keyCollection.zoom),
        orderBy("title")
      );
      getDocs(q).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const item = doc.data() as IZooms;
          item.id = doc.id;
          return item;
        });

        setZoom(data);
        return data;
      });
    },
    staleTime: Infinity,
  });
  return { zoom };
};
