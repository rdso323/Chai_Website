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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/LogIn">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
