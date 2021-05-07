import "./styles/App.css";
import Home from "../src/pages/Home";
import Test from "../src//pages/Test";
import Testing from "../src/pages/Testing";
import Navbar from "./components/elements/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Roles from "../src/pages/Roles/Roles";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/testing" component={Testing} />
          <Route exact path="/roles" component={Roles} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
