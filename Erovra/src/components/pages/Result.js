import _ from "lodash";
import { useHistory, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Board from "../Lead";
import update from "../update";

import Summary from "../Summary";
import "../../styles/Button.module.css"
import { updateCurrentUser } from "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";
import { addDoc, collection, doc, increment, onSnapshot, setDoc, updateDoc, where } from "firebase/firestore";
import { dab, db } from "../../firebase";
import { query } from "firebase/database";
import { useEffect, useState } from "react";
import Datatable from "../Datatable";

export default function Result() {
  const { id ,L2 } = useParams();
  const { location } = useHistory();
  const { state } = location;
  const { qna } = state;

  const { loading, error, answers } = useAnswers(id,L2);
  const { currentUser, logout } = useAuth();


  const [UserLevel,setUserLevel] = useState();
  const [UserData,setUserData] = useState();
  const [UserAge,setUserAge] = useState();
  const [UserName,setUserName] = useState();
  const [UserUid,setUserUid] = useState();
  const [UserInst,setUserInst] = useState();
  const [UserEmail,setUserEmail] = useState();
// console.log("entred the result page")

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
  //         setUserData(list[0])
  //   // console.log(userData['id'], score)

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
  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
      // console.log(userData['id'], score);
    });

    // console.log(userData['id'], score)
    return score;
    // console.log(userData['id'], score)
    
  }
  // console.log(userData['id'], userScore)
// console.log(currentUser);
  const userScore = calculate();
  // console.log(userData['id'], userScore);
  // console.log(userScore)
  // console.log(currentUser);
  // function UpdateScore(userScore){
  //     if (currentUser["uid"] === undefined) {
  //     } else {
  //       setDoc(collection(db, "users"),{
  //         "score":userScore,
  //       });
  //       console.log(userScore);
  //       console.log(currentUser);
  //     }
  //   };
    

  // function UpdateScore(score){
        
  //       // setDoc(collection(db, "users",userData[id]), 
  //       // // where("uid", "==", currentUser["uid"]),
  //       //   {
  //       //     "score":score,
  //       //   });
  //       //   console.log(score);
  //       //   console.log(currentUser);
        
  //       console.log(userData['id'], score);

  //       }
  useEffect(() => {
    // console.log(currentUser["uid"])
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
          // console.log(currentUser)
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          // console.log(list[0]);
          
          setUserData(list[0]['id']);
          setUserName(list[0]['name']);
          setUserAge(list[0]['age']);
          setUserUid(list[0]['uid']);
          setUserEmail(list[0]['email']);
          setUserInst(list[0]['institution']);
          setUserLevel(list[0]['level']);
          // console.log(UserData)
          // console.log(UserData, userScore,UserAge,UserName);
          // console.log(UserData['id'], score)
          // console.log(list,score);
          //  setDoc(collection(db, "users"),{
          //           "score":score,
          //         });
          // console.log(list)
          //  setDoc(list[0][score]);
          // setUserAge(list[0]["age"]);
          // setUserInst(list[0]["institution"]);
        },
        
        (error) => {
          console.log(error);
        }
        
        
      );
      
    }
    
  });


  // const bro =()=>{

  // //   console.log("entering the update")
  // //   updateDoc(doc(dab, "users",UserData), {
  // //     // score:{
  // //     //   [id]:
  // //     // {[L2]:{
  // //       scores:userScore
  // //     // }
  // //     // }
  // //   // }
  // // });
  // // console.log("exit the update")
  // //   // db.collection("users").doc(UserData).
  // //   // db.collection("users").doc(UserData).update({
  // //   //   favorites: {
  // //   //     food: "Ice Cream"
  // //   //   }
  // //   // }).then(function() {
  // //   //   console.log("Frank food updated");
  // //   // });

  // }




  const Push=(userScore)=>{
    if (userScore <= 20) {
      const link1 = `/home`
      alert("Your performance was very poor you need to retake the quiz");
      window.location.replace(link1);
    } else {
      const link2 = `/test/${id}/${L2}`
      window.location.replace(link2);
    }
    console.log("pushing")

}
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      

      {answers && answers.length > 0 && (
        <>
        
          <Summary score={userScore} noq={answers.length} />
            
          <Analysis answers={answers} />
        </>
      )}
      <Datatable></Datatable>
       <button onClick={()=>{update(id,L2,UserData,userScore);Push(userScore) }}class="inline-block px-6 py-2.5 text-base bg-green-500 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">To get the answers</button>
      
    </>
  );
}
