import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Home } from "../src/Components/Home";
import { About } from "../src/Components/About";
import { Portfolio } from "../src/Components/Portfolio";
import { Contact } from "../src/Components/Contact";

export default function App() {
  const location = useLocation();
  return (
    <div className="parent">
      <nav>
        <div className="links">
          {location.pathname !== "/" && <Link to="/">Home</Link>}
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer></footer>
    </div>
  );
}
