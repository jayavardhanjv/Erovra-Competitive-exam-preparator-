import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Dash from "./Dash";
import Profile from "../components/pages/Profile";
import About from "./About";
import Subject from "./pages/Subject";
import Test from "./Test";
import level from "./level";
import Datatable from "./Datatable";
import Warning from "./Warning";
import bro from "./bro";
import Leadboard from "./Leadboard";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
          <PrivateRoute exact path="/Home" component={Home} />
            <Route exact path="/" component={Dash} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz/:id/:L2" component={Quiz} />
            <PrivateRoute exact path="/result/:id/:L2" component={Result} />
            <PrivateRoute exact path="/Warning/:id/:L2" component={Warning} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
            <PrivateRoute exact path="/Subject" component={Subject} />
            <Route exact path="/Test/:id/:L2" component={Test} />
            <Route exact path="/bro" component={bro} />
            <Route exact path="/Leadboard" component={Leadboard} />
            <Route exact path="/level/:id" component={level} />
            <Route exact path="/Datatable" component={Datatable} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
    
  );
}

export default App;
