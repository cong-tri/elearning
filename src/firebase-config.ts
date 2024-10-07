import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getFirestore, writeBatch } from "firebase/firestore";
// import { keyCollection, listCourses } from "./constants/constants";

const firebaseConfig = {
  apiKey: "AIzaSyCIjRsvwi79tpta1hP8RuxZ_wQyxWbA690",
  authDomain: "elearning-reactjs.firebaseapp.com",
  projectId: "elearning-reactjs",
  storageBucket: "elearning-reactjs.appspot.com",
  messagingSenderId: "1053687674359",
  appId: "1:1053687674359:web:d4a5f772c570c585b46af2",
  measurementId: "G-HHXBLGCCJC",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const firebaseStore = getFirestore(firebaseApp);

// const addMultiDocs = async () => {
//   const batch = writeBatch(firebaseStore);

//   const collectionRef = collection(firebaseStore, keyCollection.courses);
//   listCourses.forEach((data) => {
//     const docRef = doc(collectionRef);
//     batch.set(docRef, data);
//   });

//   try {
//     await batch.commit();
//     console.log("Batch write successfully completed!");
//   } catch (error) {
//     console.error("Error writing batch:", error);
//   }
// };
// addMultiDocs();
