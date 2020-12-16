import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";

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
      </Switch>
    </Router>
  );
}

export default App;
