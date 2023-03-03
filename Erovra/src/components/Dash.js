// import baground from "../assets/images/pizza.jpg"
import baground from "../assets/images/read.gif"
import { Link } from "react-router-dom";
import "../styles/Dash.css"
import { Footer } from "./Footer";

export default function Dash() {
    return(
        // <header id="header" class="header">
        //     <div class="container">
        //         <div class="row">
        //             <div class="col-lg-6 col-xl-5">
        //                 <div class="text-container">
        //                     <h1 class="h1-large">EROVRA</h1>
        //                     <p class="p-large ">Compitative exam preparator</p>
        //                     <a class="btn-solid-lg" href="#services">Offered services</a>
        //                 </div>
        //             </div> 
        //             <div class="col-lg-6 col-xl-7">
        //                 <div class="image-container">
        //                     <img class="img-fluid" src="../assets/images/pizza.jpg" alt="alternative" />
        //                 </div> 
        //             </div> 
        //         </div> 
        //     </div> 
        // </header>
        <>
        <div className="home" style={{ backgroundImage: `url(${baground})` }}>
        <div className="headerContainer">
          <h1> Erovra </h1>
          <p> Compitative Exam Preparator</p>
          <Link to="/Subject">
            <button className="text-green-500"> Start Preperation </button>
          </Link>
        </div>
        {/* <Footer/> */}
      </div>
      </>
    );
}