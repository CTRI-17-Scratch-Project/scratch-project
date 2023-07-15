import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// import {users} from './Signup.jsx'
const users = {
  kevin: '1234',
  annabelle: '1234',
  arianna: '1234',
  alexandra: '1234',
};

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    loginFailed: false,
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value.toLowerCase();
    const password = document.querySelector('#password').value;

    // If user is found and authenticated, redirect to '/'. Else display invalid login message'
    if (users[username] !== undefined && users[username] === password) {
      console.log('Login Authenticated');
      localStorage.setItem('username', username);
      navigate('/');
    } else {
      console.log('Login failed');
      setState({
        loginFailed: true,
      });
    }
  };

  return (
    <div className="auth-container">
      <label>Sign In</label>
      <input type="text" placeholder="username" id="username"></input>
      <input type="password" placeholder="password" id="password"></input>
      <button className="auth-button" onClick={onFormSubmit}>
        SIGN IN
      </button>

      <Link to="/signup">
        <button className="auth-button">CREATE ACCOUNT</button>
      </Link>
      {(() => {
        if (state.loginFailed === true) {
          return (
            <p id='message-text'>Username or password incorrect. Please sign up or try again. </p>
          );
        }
      })()}
    </div>
  );
};

export default Login;
