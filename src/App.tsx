import React, { lazy, Suspense } from 'react'
import CookieConsent from "react-cookie-consent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/loading.scss'
import LogoLight from "./assets/img/scuba-point.svg";
function App() {
  const AnimatedRoutes = lazy(() => import('./assets/js/AnimatedRoutes'));
  const Footer = lazy(() => import('./assets/js/Footer'));
  const Nav = lazy(() => import('./assets/js/Nav'));

  return (
    <div className="App">
      <Suspense fallback={<div className="d-flex align-items-center h-100 w-100">
        <img className="loading" src={LogoLight} alt="Scuba Point Loading" />
      </div>}>
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
            <span style={{ fontSize: "10px" }}> APOLOGIES AGAIN. :O</span>
          </CookieConsent>
        </main>
        <Nav />
      </Suspense>
    </div>
  );
}

export default App;
