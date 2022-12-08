import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";
import Home from "./assets/js/Home"
import About from "./assets/js/About"
import Gallery from "./assets/js/Gallery"
import Packages from "./assets/js/Packages"
import Contact from "./assets/js/Contact"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="gallery">Gallery</Link>
        <Link to="packages">Packages</Link>
        <Link to="contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="packages" element={<Packages />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </header> 
    </div>
  );
}

export default App;
