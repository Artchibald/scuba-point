import React from 'react';
import Nav from "./assets/js/Nav"
import AnimatedRoutes from "./assets/js/AnimatedRoutes"
import Footer from "./assets/js/Footer"
import CookieConsent from "react-cookie-consent";
function App() {

  return (
    <div className="App">
      <main>
        <AnimatedRoutes />
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="WHATEVER TREVOR"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#d8feff", color: "#000" }}
          buttonStyle={{ color: "#000", fontSize: "14px", background: "#FFF", border: "1px solid #000" }}
          expires={150}
        >
          SORRY, COOKIE JAZZ GOES HERE.
          <span style={{ fontSize: "10px" }}> APOLOGIES AGAIN. :O</span>
        </CookieConsent>
      </main>
      <Nav />


    </div>
  );
}

export default App;
