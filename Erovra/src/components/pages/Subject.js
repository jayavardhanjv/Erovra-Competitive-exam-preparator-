import image from "../../assets/images/Team.gif";
import classes from "../../styles/Video.module.css";

export default function Subject() {
  return (
    <a href="home">
      <div className={classes.video}>
        <img src={image} alt="Video Title" />
        <p>PGCET-MCA(MASTER OF COMPUTER APPLICATION)</p>
        <div className={classes.qmeta}>
        </div>
      </div>
    </a>
  );
}
