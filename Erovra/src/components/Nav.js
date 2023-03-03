import { Link } from "react-router-dom";
import logo from "../assets/images/EROVRA.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Erovra Logo" />
            <h3>EROVRA</h3>
          </Link>
        </li>
      <Link to="/" className="bro">Dash</Link>
      <Link to="/Subject"  className="bro">Exams</Link>
      <Link to="/About"  className="bro">About</Link>
      </ul>
      <Account />
    </nav>
  );
}
