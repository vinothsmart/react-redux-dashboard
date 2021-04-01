import "./styles/App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/elements/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
