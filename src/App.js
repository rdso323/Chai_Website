import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import FirebaseConfig from "./components/FirebaseConfig"
import { useEffect, useState } from "react";

function App() {
  const app = FirebaseConfig();
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("Hello in useEffect");
  }, []);

  return (
    <Router>
      <NavBar user={user}/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Products">
          <Products/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/LogIn">
          <LogIn user={user} setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
