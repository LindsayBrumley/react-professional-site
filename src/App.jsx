import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate, NavLink } from "react-router-dom";
import { Home } from "../src/Components/Home";
import { Contact } from "..src/Components/Contact";
import { Porfolio } from "..src/Components/Porfolio";
import { About } from "../src/Components/About";
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
      </Routes>
    </div>
  );
}

export default App;
