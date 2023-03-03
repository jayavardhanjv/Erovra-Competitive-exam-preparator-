import classes from "../styles/Video.module.css";
import img from "../assets/images/subject.gif"

export default function Video({ title, id, noq }) {
  return (
    <div className={classes.video}>
      <img
        src={img}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>Questions</p>
        <p>Total Levels : 5</p>
      </div>
    </div>
  );
}
