import React from 'react';
import Nav from "./assets/js/Nav"
import AnimatedRoutes from "./assets/js/AnimatedRoutes"
import Footer from "./assets/js/Footer"

function App() {

  return (
    <div className="App">
      <main>
        <AnimatedRoutes />
        <Footer />
      </main>
      <Nav />


    </div>
  );
}

export default App;
