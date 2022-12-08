import React from 'react';
import { Routes, Route } from "react-router-dom"
import Nav from "./assets/js/Nav"
import Home from "./assets/js/Home"
import About from "./assets/js/About"
import Gallery from "./assets/js/Gallery"
import Packages from "./assets/js/Packages"
import Contact from "./assets/js/Contact"
function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="packages" element={<Packages />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <Nav />

    </div>
  );
}

export default App;
