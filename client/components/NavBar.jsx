import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import {plantdaddy} from '../assets/plantdaddy.png';

const NavBar = () => {
  return (
    <nav className="nav">
      <div id="left">
        <Link to="/" className="nav-first">
          My Garden
        </Link>

        <Link to="/discover">Discover</Link>
      </div>
      <div className = 'logoDiv'>
        {/* <a id="logo">Plant Daddy</a> */}
        <img id = 'new-logo' src= "https://i.ibb.co/njC72RX/IMG-0795.png" width={60} height={60} />
      </div>
      <div id="right">
        <Link to="/account">Account</Link>
      </div>
    </nav>
  );
};

export default NavBar;
