import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Home } from "../src/Components/Home";
import { About } from "../src/Components/About";
import { Portfolio } from "../src/Components/Portfolio";
import { Contact } from "../src/Components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <h1 className="title">Lindsay Brumley</h1>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="footer">
        <div>
          <a
            href="https:github.com/LindsayBrumley"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
