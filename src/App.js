import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Test, Testing, Roles } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/roles" component={Roles} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/testing" component={Testing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
