import SelectInput from "@mui/material/Select/SelectInput";
import { getDatabase, push, ref, set, update } from "firebase/database";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import useQuestions from "./hooks/useQuestions";
const database = getDatabase();

export default function Test(){
  // const { id } = useParams();
    const [name , setName] = useState();
  const [que , setQue] = useState();
  const [id , setId] = useState();
  const [Level , setLevel] = useState();
  const [b , setB] = useState();
  const [a , setA] = useState();
  const [c , setC] = useState();
  const [d , setD] = useState();
  const [b1 , setB1] = useState();
  const [a1 , setA1] = useState();
  const [c1 , setC1] = useState();
  const [d1 , setD1] = useState();
  const [isChecked, setIsChecked] = useState(false);
  // const {questions } = useQuestions(id);
  const num =2;
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  // const handlecChange = (e) => {
  //   const value=e.target.value;
  //   const checked =e.target.checked;
  //   // console.log(value,checked)
  // }
  const handleChange = (event) => {
    setId(event.target.value)
  }
  console.log(id);


  const handelChangeLevel = (event) => {
    setLevel(event.target.value)
    console.log(Level)
  }

  const handleaChange = (event) => {
    setA1(event.target.value)
  }
  console.log("a1 answer idu",a1)
  const handlebChange = (event) => {
    setB1(event.target.value)
  }
  const handlecChange = (event) => {
    setC1(event.target.value)
  }
  const handledChange = (event) => {
    setD1(event.target.value)
  }
  // console.log(questions.length);
  
    const db = getDatabase();
    // console.log(id);
    const Push=()=>{
      {
      {update(ref(db, 'q/'+id+'/'+Level+'/'), {
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
  {update(ref(db, 'a/'+id+'/'+Level+'/'), {
      
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
    return (
      <div className="py-12 max-h-fit bg-slate-400 shadow-md rounded-xl">
        {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md"> */}
          <div className="md:flex">
            <div className="w-full p-2 py-10">
              <div className="flex justify-center">
                <div className="relative">
                <h1 class="text-4xl font-normal text-gray-900 dark:text-black text-center">Submit the Question</h1>
                <div class="relative inline-block w-full text-gray-700">
  <label class="block mb-1" for="formGridCode_cvc">Select the Subject</label>
  <select value={id} onChange={handleChange} class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
  <option value=""></option>  
  <option value="5Xy-t8k_M4A">GK</option>
        <option value="CHnTTzD1pAQ">Quant</option>
        <option value="WC-g0JtEIwM">Apti</option>
        <option value="lb7wT1gVU7Y">english</option>
  </select>
  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
</div>



<label class="block mb-1" for="formGridCode_cvc">Select the Level</label>
  <select value={Level} onChange={handelChangeLevel} class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" required>
  <option value=""></option>  
    <option value="1">Level 1</option>
    <option value="2">Level 2</option>
    <option value="3">Level 3</option>
    <option value="4">Level 4</option>
    <option value="5">Level 5</option>
        
  </select>



<form class="space-y-4 text-gray-700">
  <div class="flex flex-wrap">
    <div class="w-full">
      <label class="block mb-1" for="formGridCode_card">Question</label>
      <input type="text" placeholder="Enter the question" value={que} 
          onChange={(e) => setQue(e.target.value)} class=" block p-4 w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"  id="formGridCode_card"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
    <div class="w-full px-2 md:w-1/2">
      <label class="block mb-1" for="formGridCode_name">option A</label>
      <input placeholder="enter the option" value={a} 
          onChange={(e) => setA(e.target.value)} class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_name"/>
    </div>
    <div class="w-full px-2 md:w-1/2">
      <label class="block mb-1" for="formGridCode_last">option B</label>
      <input placeholder="enter the option" value={b} 
          onChange={(e) => setB(e.target.value)} class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_last"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
    <div class="w-full px-2 md:w-1/2">
      <label class="block mb-1" for="formGridCode_name">option C</label>
      <input placeholder="enter the option" value={c} 
          onChange={(e) => setC(e.target.value)} class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_name"/>
    </div>
    <div class="w-full px-2 md:w-1/2">
      <label class="block mb-1" for="formGridCode_last">option D</label>
      <input placeholder="enter the option" value={d} 
          onChange={(e) => setD(e.target.value)} class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_last"/>
    </div>
    <br/><br/>
    <br/><br/>
    <h1 class="text-center text-xl">Enter the correct option</h1>
  </div>
  
  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
    <div class="w-full px-2 md:w-1/4">
    <label class="block mb-1" for="formGridCode_cvc">Select option A</label>
  <select value={a1} onChange={handleaChange} class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
  <option value=" ">select</option>
  <option value="">false</option>  
  <option value="true">true</option>
  </select>
    </div>
    <div class="w-full px-2 md:w-1/4">
    <label class="block mb-1" for="formGridCode_cvc">Select option B</label>
  <select value={b1} onChange={handlebChange} class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
  <option value=" ">select</option>
  <option value="">false</option>  
  <option value="true">true</option>
  </select>
    </div>
    <div class="w-full px-2 md:w-1/4">
    <label class="block mb-1" for="formGridCode_cvc">Select option A</label>
  <select value={c1} onChange={handlecChange} class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
  <option value=" ">select</option>
  <option value="">false</option>  
  <option value="true">true</option>
  </select>
    </div>
    <div class="w-full px-2 md:w-1/4">
    <label class="block mb-1" for="formGridCode_cvc">Select option A</label>
  <select value={d1} onChange={handledChange} class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
  <option value=" ">select</option>
  <option value="">false</option>  
  <option value="true">true</option>
  </select>
    </div>
  </div>
 



</form>
<div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
< button onClick={Push} class="items-center bg-center  relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute bold flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Submit</span>
<span class="relative invisible">Submit</span>
</button>
</div></div></div></div></div>





          
          {/* <center>
          <div>
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Large input</label>
    <input type="text"placeholder="question" value={name} 
          onChange={(e) => setName(e.target.value)} id="large-input" class="block p-4 w-full text-gray-900 bg-black rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
          <input placeholder="question" value={name} 
          onChange={(e) => setName(e.target.value)}/>
          <br/><br/>
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>



          <br/>
          <input placeholder="answer" value={age} 
          onChange={(e) => setAge(e.target.value)}/>
          <br/>
          <input placeholder="true or false" value={f} 
          onChange={(e) => setF(e.target.value)}/>
          <br/><br/> 

          <br/><br/>
          <input placeholder="option a" value={b} 
          onChange={(e) => setB(e.target.value)}/>
          <br/><br/> 
          <input placeholder="true or false" value={t} 
          onChange={(e) => setT(e.target.value)}/> 

         <select value={t} >
        <option value="true">True</option>
        <option value="flase">False</option>
      </select>

          <br/><br/> 
          <form>
      <select value={id} onChange={handleChange}>
        <option value="5Xy-t8k_M4A">GK</option>
        <option value="CHnTTzD1pAQ">Quant</option>
        <option value="WC-g0JtEIwM">Apti</option>
        <option value="lb7wT1gVU7Y">english</option>
      </select>
      
    </form>
    
    <input type="radio" value="true"
    onChange={(e) => setT(e.target.value)} checked={SelectInput === "true"}/>
          <br/><br/>
          <input type="radio" value="true"
    onChange={(e) => setT(e.target.value)} checked={SelectInput === "true"} />
          <br/><br/>
          <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={(e)=>{ setT(e.target.value)}}/>
        Paneer
        <input
          type="checkbox"
          // id="topp"
          // name="topp"
          value="Bins"
          checked={isChecked}
          onChange={(e)=>{ setF(e.target.value)}}/>
        bins
      </div>
      <div className="result">
        Above checkbox is {isChecked ? "checked" : "un-checked"}.
      </div> 
      <form>
        <label htmlFor="">select fruit :&nbsp;</label>
        <input type="checkbox" name="fruit" value="apple" onChange={handlecChange}/>
        <label htmlFor="">A</label>

        <input type="checkbox" name="fruit" value="mango" onChange={handlecChange}/>
        <label htmlFor="">B</label>
      <br/><br/>

      </form>
        <br/>
          <button onClick={Push}>PUSH</button>
          </center> */}
        </div>
       
      );
}