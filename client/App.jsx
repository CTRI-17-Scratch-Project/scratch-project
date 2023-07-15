import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const App = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('username') === null) {
      return navigate('/login');
    }

    // make a GET request to server using localstorage.getItem('username')
    // for each Plant item received, create a new plant card and render to screen
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div>
      App.jsx
      <p>hello {localStorage.getItem('username')}</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default App;
