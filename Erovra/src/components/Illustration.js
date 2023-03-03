// import signupImage from "../assets/images/signup.svg";
// import signupImage from "../assets/images/signin.jpg";
import signupImage from "../assets/images/sig.gif";
import classes from "../styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
}
