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

  const onFormSubmit = (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value.toLowerCase();
    const password = document.querySelector('#password').value;
    const body = {
      username: username,
      password: password,
    };

    // Testing data... please remove after post request is connected
    if (body.username in users || body.username === '') {
      console.log(1);
      setState({
        signUpStatusCode: 2,
      });
    } else {
      users[body.username] = body.password;
      setState({
        signUpStatusCode: 1,
      });
    }

    // fetch('/api', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data === 'successful') {
    //       setState({
    //         signUpStatusCode: 1,
    //       });
    //     } else {
    //       setState({
    //         signUpStatusCode: 2,
    //       });
    //     }
    //   });
  };

  return (
    <div className="auth-container">
      <label>Create Account</label>
      <input type="text" placeholder="username" id="username"></input>
      <input type="password" placeholder="password" id="password"></input>
      <button className="auth-button" onClick={onFormSubmit}>
        CREATE ACCOUNT
      </button>

      <Link to="/login">
        <button className="auth-button">SIGN IN</button>
      </Link>
      {(() => {
        if (state.signUpStatusCode === 1) {
          return (
            <p>Account created successfully. Please return to log in page.</p>
          );
        } else if (state.signUpStatusCode === 2) {
          return <p>Invalid username</p>;
        } 
      })()}
    </div>
  );
};

export default Signup;
