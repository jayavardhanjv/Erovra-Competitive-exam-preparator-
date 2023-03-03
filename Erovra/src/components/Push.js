import * as React from 'react';
import { getDatabase, ref, update } from "firebase/database";
// import { db } from "../firebase";

export default function Push(ida,Level,que,a,b,c,d,a1,b1,c1,d1){
    const db = getDatabase();
        {
        {update(ref(db, 'q/'+ida+'/'+Level+'/'), {
          questions:{
          0:{title: que,
        options :{
          0:{
          title: a,
          },
          1:{
          // score:score;
          title:b,
          },
          2:{
            // score:score;
            title:c,
            },
            3:{
              // score:score;
              title:d,
              }
        }
      }
    }
      
    
      //   profile_picture : imageUrl
      }).catch(alert);
    }
    {update(ref(db, 'a/'+ida+'/'+Level+'/'), {
        
        questions:{
        0:{title: que,
      options :{
        0:{
          correct:a1,
        title: a,
        },
        1:{
          correct:b1,
          title:b,
        },
        2:{
          correct:c1,
          title:c,
          },
          3:{
            correct:d1,
            title:d,
            }
      }
    }
  }
    
      
    //   profile_picture : imageUrl
    }).catch(alert);
    console.log("the a1 value is",a1)
  
    }
        } 
        // else{
        //   console.log("error in true or false")
        // }
  }
