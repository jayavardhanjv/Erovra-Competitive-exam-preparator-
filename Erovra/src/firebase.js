import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import firebase from "firebase";
// import { getStorage } from "firebase/storage";
// import{}

// firebase configuration
const app = initializeApp({
  apiKey: "your code",
  authDomain: "your code",
  databaseURL: "your code",
  projectId: "your code",
  storageBucket: "your code",
  messagingSenderId: "your code",
  appId: "your code"
});

export const db =getFirestore(app);
export const dab =getFirestore(app);
export const auth =getAuth(app);
// export const storage =getStorge(app);
export default app;

