import { getDatabase, ref, onValue, orderByKey, query, get, child} from "firebase/database";
export default function bro(){
    const i=1;
    console.log(i)
    const dbRef = ref(getDatabase());
get(child(dbRef, `videos/1/noq`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


    return(
        <h1>hiii</h1>
    )
}