// import { collection, doc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';
// import React, {useState, useEffect} from 'react';
// import {db} from '../firebase';

// function Datatable() {
//   // import { collection, query, where, getDocs } from "firebase/firestore";
//   useEffect(() => {
//       const q = query(
//         collection(db, "users"),
//         orderBy("scores",'desc')
//       );

//       onSnapshot(
//         q,
//         (snapShot) => {
//           let list = [];
//           snapShot.docs.forEach((doc) => {
//             list.push({ id: doc.id, ...doc.data() });
//           });
//           // console.log(list);
//           // setUserName(list[0]["name"]);
//           // setUserEmail(list[0]["email"]);
//           // setUserAge(list[0]["age"]);
//           // setUserInst(list[0]["institution"]);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
    
//   });
  
//   return(
//     <h1>hello</h1>
//   )

//   // useEffect(() => {
//   //   doc(db, "users").onSnapshot((snapshot) => {
//   //     let users = snapshot.docs.map(doc => doc.data());
//   //     users.sort((a,b) => (a.score < b.score) ? 1 : -1);
//   //     setUsers(users);
//   //   });
//   // }, []);

//   // return (
//   //   <div>
//   //     <h2>Leaderboard</h2>
//   //     {users.map((user, index) => (
//   //       <div key={index}>
//   //         <h3>{user.name}</h3>
//   //         <p>Score: {user.score}</p>
//   //       </div>
//   //     ))}
//   //   </div>
//   // );
// }
// export default Datatable;





import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect  } from 'react';
import { db } from '../firebase';
import "../styles/Broad.css"

const Datatable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "users"),orderBy("scores",'desc'));
      const data = await getDocs(q);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <div> 
       <div className="text-center">
        <h1>LeaderBoard</h1>
        </div>
      {users.map((user) => ( 
        // <div> 
        //   <h3>{user.name}</h3> 
        //   <p>Score: {user.scores}</p> 
        // </div> 
        <>
        <div>
        <div className="flex">
          
                        <div className="item">
                            {/* <img src={value.img} alt="" /> */}
            
                            <div className="info">
                                <h3 className='name text-dark'>{user.name}</h3>    
                                {/* <span>{value.location}</span> */}
                            </div>                
                        </div>
                        <div className="item">
                            <span>{user.scores}</span>
                        </div>
                    </div>
                    </div>
                    </>
      ))} 
    </div> 

  );
};

export default Datatable;