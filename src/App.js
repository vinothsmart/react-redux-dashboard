import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components";
import { Provider } from "react-redux";
import store from "./store";
import AppRouter from "./components/AppRouter";
import Footer from "./components/elements/Footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <AppRouter />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
