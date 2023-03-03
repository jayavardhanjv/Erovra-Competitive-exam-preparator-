import React from "react";
import { useAuth } from "../contexts/AuthContext";
import MultiplePizzas from "../assets/images/pizza.jpg";
import "../styles/About.css";

export default function About(){
  const { currentUser } = useAuth();
  console.log(currentUser);
  
  return (
    <div className="about">
    <div
     className="aboutTop"
     style={{ backgroundImage: `url(${MultiplePizzas})` }}
   ></div>
   <div className="aboutBottom">
     <h1> ABOUT US</h1>
     <p>
     EROVRA is a web application that can be utilized in multiple ways to help any student in their path of preparing for upcoming competitive and entrance exams.
In this application, any student can practice for the exam in a competitive and game-based structure.
Here the student can act as a teacher by providing his questions and making other people answer that questions, which helps everyone from the student to the student and for the students.
     </p>
   </div>
  
 </div>

  );

}
