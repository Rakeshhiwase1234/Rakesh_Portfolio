import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import Skills from "./Component/Skills";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Achievement from "./Component/Achievement";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievement" element={<Achievement />} />
      </Routes>
    </div>
  );
};

export default App;