import React from 'react'
import CookieConsent from "react-cookie-consent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/loading.scss'
import AnimatedRoutes from './assets/js/AnimatedRoutes';
import Footer from './assets/js/Footer';
import Nav from './assets/js/Nav';
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
          SORRY, COOKIE JAZZ.
          <span style={{ fontSize: "10px" }}> THESE THINGS ARE ANNOYING! :O</span>
        </CookieConsent>
      </main>
      <Nav />

    </div>
  );
}

export default App;
