import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to="/">My Garden</Link>
        </li>
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
