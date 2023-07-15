import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const  [state, setState]  = useState({
    loginFailed: false,
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const users = {
      kevin: '1234',
      annabelle: '1234',
      arianna: '1234',
      alexandra: '1234',
    };

    const username = e.target.username.value.toLowerCase();
    const password = e.target.password.value;

    // If user is found and authenticated, redirect to '/'. Else display invalid login message'
    if (users[username] !== undefined && users[username] === password) {
      console.log('Login Authenticated');
      localStorage.setItem('username', e.target.username.value);
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
      <form onSubmit={onFormSubmit}>
        <label>Login.jsx</label> <br />
        <input type="text" id="username" placeholder="username"></input> <br />
        <input type="text" id="password" placeholder="password"></input> <br />
        <input type="submit"></input>
      </form>
      <br />
      {(() => {
        if (state.loginFailed === true) {
          return (
            <p>Username or password incorrect. Please sign up or try again. </p>
          );
        }
      })()}
      <Link to='/signup'><button>Signup</button></Link>
      
    </div>
  );
};

export default Login;
