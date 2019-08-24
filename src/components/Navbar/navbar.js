import React from 'react';
import Fish from '../Images/fish.png'
import './navbar.css';

export default function Navbar() {

  return (
    <React.Fragment>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue darken-4">
            <a href="/" className="brand-logo left">Seaside Seafood</a>
            <a href="#" className="brand-logo center hide-on-small-and-down">
              <img src={Fish} alt="" id="fish" />
            </a>
            <ul className="right">
              <li><a href="#aboutUsDiv">About US</a></li>
              <li><a href="#menuDiv">Menu</a></li>
              <li><a href="#comeVisitDiv">Come Visit</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}