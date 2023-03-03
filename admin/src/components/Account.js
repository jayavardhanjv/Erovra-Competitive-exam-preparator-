import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import classes from "../styles/Account.module.css";
import React, { useEffect, useRef, useState } from "react";
import "../styles/Pro.css";
import { useDetectOutsideClick } from "../context/useDetectOutsideClick";
import { query } from "firebase/database";
import { collection, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";
import { display } from "@mui/system";

export default function Account() {
  const { currentUser, logout } = useAuth();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   if (currentUser["uid"] === undefined) {
  //   } else {
  //     const q = query(
  //       collection(db, "users"),
  //       where("uid", "==", currentUser["uid"])
  //     );

  //     onSnapshot(
  //       q,
  //       (snapShot) => {
  //         let list = [];
  //         snapShot.docs.forEach((doc) => {
  //           list.push({ id: doc.id, ...doc.data() });
  //         });
  //         // console.log(list);
  //         setUserName(list[0]["name"]);
          
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // });

  return (
    <div className={classes.account}>
      
       
      {currentUser ? (
        <>
        <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          {/* <span className="material-icons-outlined" title="Account">
            account_circle
          </span> */}
          {/* <span>{userName}</span> */}
          <span>{currentUser.displayName}</span>
          </button>
          <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="/profile">Profile</a>
            </li>
            {/* <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">Saved</a>
            </li> */}
          </ul>
        </nav>
          </div>
          </div>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/Signup">Signup</Link>
          <Link to="/">Login</Link>
        </>
      )}
    </div>
  );
}
