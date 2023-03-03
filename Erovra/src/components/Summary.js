import { getAuth } from "firebase/auth";
import { query } from "firebase/database";
import { addDoc, collection, onSnapshot, setDoc, where } from "firebase/firestore";
import React,{ useEffect, useMemo, useState } from "react";
import successImage from "../assets/images/ranking.gif";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";


export default function Summary({ score, noq }) {
  
  const { currentUser } = useAuth();
  const [UserData, setUserData] = useState();

  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);
  // useEffect(() => {
  //   // console.log(currentUser["uid"])
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
  //         // console.log(currentUser)
  //         snapShot.docs.forEach((doc) => {
  //           list.push({ id: doc.id, ...doc.data() });
  //         });
  //         // console.log(list[0]);
  //         setUserData(list[0]['id'])
  //         console.log(UserData)
  //         // console.log(UserData['id'], score)
  //         // console.log(list,score);
  //         //  setDoc(collection(db, "users"),{
  //         //           "score":score,
  //         //         });
  //         // console.log(list)
  //         //  setDoc(list[0][score]);
  //         // setUserAge(list[0]["age"]);
  //         // setUserInst(list[0]["institution"]);
  //       },
        
  //       (error) => {
  //         console.log(error);
  //       }
        
  //     );
      
  //   }
    
  // });
  // function Con(){
  //   // console.log(UserData)
  // }
  
  


  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

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
  //         console.log(list);
  //         // setuserData(list)
  //         console.log(userData['id'], score)

  //         // setUserName(list[0]["name"]);
  //         // setUserEmail(list[0]["email"]);
  //         // setUserAge(list[0]["age"]);
  //         // setUserInst(list[0]["institution"]);
  //       },
        
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // });
  // const image = result ? result?.photos[0].src.medium : successImage;
  // console.log(UserData,score)
  // function UpdateScore(score){
        
    // setDoc(collection(db, "users",userData[id]), 
    // // where("uid", "==", currentUser["uid"]),
    //   {
    //     "score":score,
    //   });
    //   console.log(score);
    //   console.log(currentUser);
    
    // console.log(userData['id'], score);

    // }
  // console.log( score);
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
  //         console.log(list);
  //         // setUserName(list[0]["name"]);
  //         // setUserEmail(list[0]["email"]);
  //         // setUserAge(list[0]["age"]);
  //         // setUserInst(list[0]["institution"]);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // });

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
        {/* <UpdateScore/> */}
      </div>

      {/* {loading && <div className={classes.badge}>Loading your badge...</div>}

      {error && <div className={classes.badge}>An error occured!</div>} */}

      {/* {!loading && !error && ( */}
        <div className={classes.badge}>
          <img src={successImage} alt="Success" />
        </div>
        {/* <con /> */}
      {/* )} */}
    </div>
  );
}
