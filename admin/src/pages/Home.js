import { Link } from "react-router-dom";
import baground from "../images/Meeting.gif"
import "../styles/Dash.css"


export default function Home(){
    return(
        <>
        <div className="home" style={{ backgroundImage: `url(${baground})` }}>
        <div className="headerContainer">
          <h1> Erovra-Admin </h1>
          {/* <p> Compitative Exam Preparator</p> */}
          {/* <Link to="/Subject">
            <button className="text-green-500"> Strat Preperation </button>
          </Link> */}
        </div>
        {/* <Footer/> */}
      </div>
      </>
    )
}