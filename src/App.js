import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Test, Testing, Roles, AddRole } from "./components";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/roles" component={Roles} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/testing" component={Testing} />
            <Route exact path="/roles/add" component={AddRole} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
