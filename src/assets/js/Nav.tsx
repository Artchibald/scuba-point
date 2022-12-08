import React from 'react'

import { Link } from "react-router-dom";
import "./Nav.scss"
import LogoLight from "./../img/scuba-point.svg";
function showMenu() {
  var toggleVariable: any = document.getElementById('main-menu');
  //if shown
  if (toggleVariable.style.display === 'block') {
    // hide it after.5
    setTimeout(function () {
      toggleVariable.style.display = 'none';
    }, 300);
    // change the class
    toggleVariable.classList.remove('menu-on');
    toggleVariable.classList.add('menu-off');
    //stuff to remove cross from burger
    var showCross: any = document.getElementById('burger-cross');
    showCross.classList.remove('show-cross');
  } else {
    //otherwise show it
    toggleVariable.style.display = 'block';
    // otherwise add the class
    toggleVariable.classList.add('menu-on');
    toggleVariable.classList.remove('menu-off');
    //stuff to add cross from burger
    var showCross2: any = document.getElementById('burger-cross');
    showCross2.classList.add('show-cross');
  }
}





function Nav() {
  return (
    <>
      <header>

        <div id="main-menu">
          <h3>MENU</h3>

          <Link onClick={showMenu} to="about">About</Link>
          <Link onClick={showMenu} to="gallery">Gallery</Link>
          <Link onClick={showMenu} to="packages">Packages</Link>
          <Link onClick={showMenu} to="contact">Contact</Link>
          {/* <Link to="/does-not-exist">Catch all route</Link> */}
        </div>

        <button
          aria-label="open menu"
          className="menu-button"
          onClick={showMenu}
        >
          <div id="burger-cross" className="burger-menu">
            <div className="burger"></div>
            <Link to="/">
              <img src={LogoLight} alt="Scuba Point Logo" className="logo" />
            </Link>
          </div>
        </button>


      </header>

    </>
  )
}

export default Nav