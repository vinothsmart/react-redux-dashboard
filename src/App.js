import "./styles/App.css";
import Home from "./components/pages/Home";
import Test from "./components/pages/Test";
import Navbar from "./components/elements/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Roles from "./components/pages/Roles/Roles";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/roles" component={Roles} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
