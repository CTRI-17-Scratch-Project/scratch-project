import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div>
      <p> {localStorage.getItem('username')}&apos;s Account</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Account;
