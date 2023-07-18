import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const users = {
  kevin: '1234',
  annabelle: '1234',
  arianna: '1234',
  alexandra: '1234',
};

const Signup = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    signUpStatusCode: 0,
  });

  // Takes user input data and sends request to server, adding to DB
  const onFormSubmit = (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value.toLowerCase();
    const password = document.querySelector('#password').value;

    const body = {
      username: username,
      password: password,
    };

    // Testing data... please remove after post request is connected DO NOT DELETE
    // if (body.username in users || body.username === '') {
    //   setState({
    //     signUpStatusCode: 2,
    //   });
    // } else {
    //   users[body.username] = body.password;
    //   setState({
    //     signUpStatusCode: 1,
    //   });
    // }

    const request_body = {
      username: username,
      plants: [],
    };


    fetch('/api/dbAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request_body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.username && data.username === username) {
          setState({
            signUpStatusCode: 1,
          });
        } else {
          setState({
            signUpStatusCode: 2,
          });
        }
      });
  };

  return (
    <div className="auth-container-main">
      <div className="auth-container">
        <img
          id="signin-logo"
          src="https://i.ibb.co/Wgb23JR/plantdaddy.png"
          alt=""
        />

        <input type="text" placeholder="username" id="username"></input>
        <input type="password" placeholder="password" id="password"></input>

        <button className="auth-button" onClick={onFormSubmit}>
          CREATE ACCOUNT
        </button>

        <Link to="/login">
          <button className="auth-button">SIGN IN</button>
        </Link>

        {/* Conditionals for displaying messages  */}
        {(() => {
          if (state.signUpStatusCode === 1) {
            return (
              <p>Account created successfully. Please return to log in page.</p>
            );
          } else if (state.signUpStatusCode === 2) {
            return <p>Sign up failed. Please try again.</p>;
          }
        })()}

      </div>
    </div>
  );
};

export default Signup;
