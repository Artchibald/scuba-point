import React from 'react'
import "./Footer.scss"
import LogoLight from "./../img/scuba-point.svg";
import facebookIcon from "./../img/icons/facebook.png";
import instagramIcon from "./../img/icons/instagram.png";
function Footer() {



 var facebookRoll = {
  backgroundImage: `url(${facebookIcon})`,
 };
 var instagramRoll = {
  backgroundImage: `url(${instagramIcon})`,
 };

 return (
  <>
   <footer>
    <img className="logo" src={LogoLight} alt="Scuba Point logo" />
    <div className="social-roll-wrap">
     <a
      aria-label="Social links"
      href="https://www.facebook.com/archibald.butler"
     >
      <span className="social-roll facebook-roll" style={facebookRoll}></span>
     </a>
     <a
      aria-label="Social links"
      href="https://www.facebook.com/archibald.butler"
     >
      <span className="social-roll facebook-roll" style={instagramRoll}></span>
     </a>

    </div>

   </footer>

  </>
 )
}

export default Footer