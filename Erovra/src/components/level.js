import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams,Link, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";
import { useHistory } from "react-router-dom";

export default function Level(){
  var L2;
  var Level;
  const { currentUser } = useAuth();
    const [page, setPage] = useState(1);
    const history = useHistory();
    const [L1,setL1]=useState();
    // const [L2,setL2]=useState();
    const [L3,setL3]=useState();
    const [L4,setL4]=useState();
    const [l5,setL5]=useState();
    const [l6,setL6]=useState();
    const [L7,setL7]=useState();
    const [l8,setL8]=useState();
    const [l9,setL9]=useState();
    const [l10,setL10]=useState();
    // const [Level,setLevel]=useState();

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
            // setL1(list[0]["lev"]["level"]);
            // setL4(list[0]["score"][id][L2]["score"])
            // setUserEmail(list[0]["email"]);
            // setUserAge(list[0]["age"]);
            // setUserInst(list[0]["institution"]);
            setL3(list[0][id]["level"]);
            // setL7(list[0]["ques"][id][L3]["ques"]);

          },
          (error) => {
            console.log(error);
          }
        );
        
      }
      console.log(L1)
      console.log(L3)
      console.log(L2,L3)
      if(L1 === "0"){
        // window.location.replace("/test")
      }
    });
    const push = (e)=>{
      const link = `/quiz/${L2}/${id}`
      window.location.replace(link);
}
// const test=(e)=>{
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
//         setL7(list[0]["ques"][id][L3]["ques"]);

//       },
//       (error) => {
//         console.log(error);
//       }
//     );
    
//   }
// }

const verify =(e)=>{

  // if (currentUser["uid"] === undefined) {
  // } else {
  //   const q = query(
  //     collection(db, "users"),
  //     where("uid", "==", currentUser["uid"])
  //   );

  //   onSnapshot(
  //     q,
  //     (snapShot) => {
  //       let list = [];
  //       snapShot.docs.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //       });
  //       // console.log(list);
  //       setL7(list[0]["ques"][id][L3]["ques"]);

  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
    
  // }
  // if(L2 != L3) 
  //  if(L2 > L3)
  {
    // const link = `/quiz/${L2}/${id}`
    const link = `/quiz/${id}/${L2}`
      window.location.replace(link)
  }
  // else{
//     <div class="w-full md:w-1/3 mx-auto">
//   <div class="flex flex-col p-5 rounded-lg shadow bg-white">
// 	<div class="flex flex-col items-center text-center">
// 	  <div class="inline-block p-4 bg-yellow-50 rounded-full">
// 		<svg class="w-12 h-12 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>
// 	  </div>
// 	  <h2 class="mt-2 font-semibold text-gray-800">Warning Alert Title With Large Icon and Action</h2>
// 	  <p class="mt-2 text-sm text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit ipsam nam quam! Ab accusamus aperiam distinctio doloribus, praesentium quasi reprehenderit soluta unde?</p>
// 	</div>

// 	<div class="flex items-center mt-3">
// 	  <button class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
// 		Cancel
// 	  </button>

// 	  <button class="flex-1 px-4 py-2 ml-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-md">
// 		Agree
// 	  </button>
// 	</div>
//   </div>
// </div>
  // }
}

  const handle = (e)=>{
    L2 = e.target.id;
  }
 
    const handleChange = (e) => {
      // setL2(e.target.value)
      console.log(L2)
      L2 = e.target.id;
      console.log(e.target.id)
      console.log("sis")
      console.log(L2);
      const link = `/quiz/${id}`
       window.location.replace(link);
      //   <Link
      //   to=
      //   {{
      //       pathname:`/quiz/${id}`,
      //     // pathname: '/quiz/${id}',
      //   //   // pathname: `/level`,
      //     state: {
      //       videoTitle:"",
      //     },
      //   }}
      //   key={id}
        
      // />
      
    }
    const [vid,setVid]=useState();
    const { id ,title} = useParams();
    const { loading, error, videos, hasMore } = useVideoList(page);
    // console.log(id,title);
    // console.log(L1);
    // console.log(id)
  






    return(
        <>
        <div className="py-12 max-h-fit bg-gray-300">
        {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md"> */}
          <div className="md:flex">
            <div className="w-full p-10 py-1 ">
              <div className="flex">
                <div className="relative">
                    <div class="text-center">
                        <h1>Select the level</h1>
                        
                    </div>
                    {/* <Link
                to=
                {{
                    pathname:`/quiz/${id}`,
                  // pathname: '/quiz/${id}',
                //   // pathname: `/level`,
                  state: {
                    videoTitle:"",
                  },
                }}
                key={id}
                
              > */}
        <div class="p-10 content-center inline-grid grid-cols-1 gap-4 flex-row">
          {
            L3>=1 ? <><button id="1" onClick={(e)=>{handle(e);verify(e)}} class="w-20 h-20 rounded-full 
            bg-green-500 hover:bg-red-500 text-white hover:scale-110 transition duration-300 ease-in-out" >
 Level 1
</button></>:<><button disabled id="1" onClick={(e)=>{handle(e);test(e);verify(e)}} class="w-20 h-20 rounded-full 
                       bg-green-500 hover:bg-red-500 text-white hover:scale-110 transition duration-300 ease-in-out opacity-50 cursor-not-allowed" >
            Level 1
        </button></>
          }
        
</div>
<div class="p-10 content-center inline-grid grid-cols-1 gap-4 flex-row">
          {
            L3>=2 ? <><button id="2" onClick={(e)=>{handle(e);verify(e)}} class="w-20 h-20 rounded-full 
            bg-green-500 hover:bg-red-500 text-white hover:scale-110 transition duration-300 ease-in-out" >
 Level 2
</button></>:<><button disabled id="2" onClick={(e)=>{handle(e);test(e);verify(e)}} class="w-20 h-20 rounded-full 
                       bg-green-500 hover:bg-red-500 text-white hover:scale-110 transition duration-300 ease-in-out opacity-50 cursor-not-allowed" >
            Level 2
        </button></>
          }
        
</div>
<div class="p-10 content-center inline-grid grid-cols-1 gap-4 flex-row">
          {
            L3>=3 ? <><button id="3" onClick={(e)=>{handle(e);verify(e)}} class="w-20 h-20 rounded-full 
            bg-green-500 hover:bg-red-500 text-white hover:scale-110 transition duration-300 ease-in-out" >
 Level 3
</button></>:<><button disabled id="2" onClick={(e)=>{handle(e);test(e);verify(e)}} class="w-20 h-20 rounded-full 
                       bg-green-500 hover:bg-red-500 text-white hover:scale-110 transition duration-300 ease-in-out opacity-50 cursor-not-allowed" >
            Level 3
        </button></>
          }
</div>
<div class="p-10 content-center inline-grid grid-cols-1 gap-4 flex-row">
          {
            L3>=4 ? <><button id="4" onClick={(e)=>{handle(e);verify(e)}} class="w-20 h-20 rounded-full 
            bg-green-500 hover:bg-red-500 text-white hover:scale-110 transition duration-300 ease-in-out" >
 Level 4
</button></>:<><button disabled id="4" onClick={(e)=>{handle(e);test(e);verify(e)}} class="w-20 h-20 rounded-full 
                       bg-green-500 hover:bg-red-500 text-white hover:scale-110 transition duration-300 ease-in-out opacity-50 cursor-not-allowed" >
            Level 4
        </button></>
          }
        
</div>
<div class="p-10 content-center inline-grid grid-cols-1 gap-4 flex-row">
          {
            L4>=5 ? <><button id="4" onClick={(e)=>{handle(e);verify(e)}} class="w-20 h-20 rounded-full 
            bg-green-500 hover:bg-red-500 text-white hover:scale-110 transition duration-300 ease-in-out" >
 Level 5
</button></>:<><button disabled id="4" onClick={(e)=>{handle(e);test(e);verify(e)}} class="w-20 h-20 rounded-full 
                       bg-green-500 hover:bg-red-500 text-white hover:scale-110 transition duration-300 ease-in-out opacity-50 cursor-not-allowed" >
            Level 5
        </button></>
          }
        
</div>
{/* </Link> */}



</div></div></div></div></div>

</>
    )
            
  }