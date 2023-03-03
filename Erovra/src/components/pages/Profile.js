import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
// import "../../styles/userprofile.css";
import baground from "../../assets/images/prof.png";
import { db } from "../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default function About() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userInst, setUserInst] = useState("");

  useEffect(() => {
    if (currentUser["uid"] === undefined) {
    } else {
      const q = query(
        collection(db, "users"),
        where("uid", "==", currentUser["uid"])
      );

      onSnapshot(
        q,
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          // console.log(list);
          setUserName(list[0]["name"]);
          setUserEmail(list[0]["email"]);
          setUserAge(list[0]["age"]);
          setUserInst(list[0]["institution"]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  });

  return (
    <>
      <div className="py-12 max-h-fit bg-gray-300">
        <div className="max-w-md mx-auto justify-center bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
          <div className="md:flex items-center">
            <div className="w-full p-2 py-10 text-center">
              <div className="flex">
                <div className="relative">
                  <img
                    src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png"
                    className="rounded-full items-center"
                    width="80"
                  />
                  <span className="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full"></span>
                </div>
              </div>

              <div className="flex flex-col text-center mt-3 mb-4">
                <span className="text-4xl font-medium">{userName}</span>
                <span className="text-xl font-medium">{userEmail}</span>
                <span className="text-base font-medium"> {userAge} years</span>
                <span className="text-base font-medium">{userInst} institution</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div classNameName="per-info">
      <h1>Welcome</h1>
      <div classNameName="pro">
      <img src={baground} alt="Profile image" />

      </div>
          <h1>Name:{userName}</h1>
          <h1>Email:{userEmail}</h1>
          <h1>age:{userAge}</h1>
      
    </div> */}
    </>
  );
}
