import classes from "../styles/Layout.module.css";
import Nav from "./Nav"
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
  
      <Nav />
      {/* <Sidebar/> */}
      
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
