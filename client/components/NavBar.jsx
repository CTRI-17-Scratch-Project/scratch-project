import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav">
      <div id="left">
        <Link to="/" className="nav-first">
          My Garden
        </Link>

        <Link to="/discover">Discover</Link>
      </div>
      <div>
        <a id="logo">Plant Daddy</a>
      </div>
      <div id="right">
        <Link to="/account">Account</Link>
      </div>
    </nav>
  );
};

export default NavBar;
