import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function update(id,L2,UserData,userScore){
    updateDoc(doc(db, "users",UserData), {
        // score:{
    //    [id]:
        //  {[L2]:{
          scores:userScore
        //  }
        //  }
    //    }
    });
    // console.log(id,L2,UserData,userScore)
    console.log("update?????")
}