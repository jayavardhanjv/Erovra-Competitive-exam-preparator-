import classes from "../styles/Layout.module.css";
import { Footer } from "./Footer";
import Nav from "./Nav";

export default function Layout1({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
      <Footer/>
    </>
  );
}
