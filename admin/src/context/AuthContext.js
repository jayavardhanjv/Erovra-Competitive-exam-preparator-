import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import { collection, addDoc  } from "firebase/firestore"; 
import{auth, db} from "../firebase"

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);
// async function addusers(email, username,date,institution){
//   await addDoc(collection(db, "users"), {
//     "uid":currentUser.uid,
//     "name": username,
//     "email": email,
//     "date of birth":date,
//     "institution":institution
//   });
//   console.log("Current user:",currentUser)
// }
  // signup function
  async function signup(email, password, username,age, institution) {
    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, email, password);

    
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });

    await addDoc(collection(db, "users"), {
      "uid":auth.currentUser.uid,
      "name": username,
      "email": email,
      "age":age,
      "institution":institution,
    });
    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

  }

  // login function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  // logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
