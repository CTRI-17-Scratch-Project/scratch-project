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

    const username = e.target.username.value.toLowerCase();
    const password = e.target.password.value;
    const body = {
      username: username,
      password: password,
    };

    // Testing data... please remove after post request is connected
    if (body.username in users) {
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
      <form onSubmit={onFormSubmit}>
        <label>Signup Page</label> <br />
        <input type="text" id="username" placeholder="username"></input> <br />
        <input type="text" id="password" placeholder="password"></input> <br />
        <input type="submit"></input>
      </form>
      <br />

      <Link to="/login">
        <button>Log in</button>
      </Link>
      {(() => {
        if (state.signUpStatusCode === 1) {
          return (
            <p>Account created successfully. Please return to log in page.</p>
          );
        } else if (state.signUpStatusCode === 2) {
          return <p>Account already exists. Please </p>;
        }
      })()}
    </div>
  );
};

export default Signup;
