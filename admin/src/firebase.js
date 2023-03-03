import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import firebase from "firebase";
// import { getStorage } from "firebase/storage";
// import{}

// firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyCTTkIVGjT7vKlKHDa2GhfuYygQHSzjLSY",
  authDomain: "login-12ea1.firebaseapp.com",
  databaseURL: "https://login-12ea1-default-rtdb.firebaseio.com",
  projectId: "login-12ea1",
  storageBucket: "login-12ea1.appspot.com",
  messagingSenderId: "1084593690415",
  appId: "1:1084593690415:web:db02680963fd16631633da"
});

export const db =getFirestore(app);
export const auth =getAuth(app);
// export const storage =getStorge(app);
export default app;

