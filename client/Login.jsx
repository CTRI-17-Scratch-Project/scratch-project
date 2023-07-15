import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();

    const users = ['1'];

    // If user is found and authenticated, redirect to '/'. Else redirect to '/signup'
    if (users.includes(e.target.username.value)) {
      console.log('Login Authenticated');
      localStorage.setItem('username', e.target.username.value);
      navigate('/');
    } else {
      console.log('Login failed');
      navigate('/signup');
    }

    // If username and password is in database, redirect to login
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>Login.jsx</label> <br />
      <label>username:</label>
      <input type="text" id="username"></input>
      <label>password:</label>
      <input type="text" id="password"></input>
      <input type="submit"></input>
    </form>
  );
};

export default Login;
