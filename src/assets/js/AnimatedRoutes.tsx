import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import Home from "./Home"
import About from "./About"
import Gallery from "./Gallery"
import Packages from "./Packages"
import Contact from "./Contact"
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="packages" element={<Packages />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence >
  )
}

export default AnimatedRoutes