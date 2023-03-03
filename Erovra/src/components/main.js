import { getFirestore,getDoc,collection, CollectionRef, getDocs } from "firebase/firestore"
import{app} from "../firebase"

const db =getFirestore(app);
async function queryCollection(){
    const CollectionRef =collection(db,'users')
    const users=await getDocs(CollectionRef)
    users.forEach(user=>{
        console.log(user.data())
    })
}
queryCollection()