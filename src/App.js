import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <NavBar
          title="iNotebook"
        />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      {/* <NavBar />
      <Home /> */}
    </>
  );
}

export default App;
