import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Account = () => {
  useEffect(() => {
    // pull user notifications from db
  }, []);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  const handleReminderDelete = () => {
    // send request to server with delete type
    // update
  };

  return (
    <div>
      <p> {localStorage.getItem('username')}&apos;s Account</p>
      <button onClick={handleLogOut} className="red-button">
        Log Out
      </button>
    </div>
  );
};

export default Account;
