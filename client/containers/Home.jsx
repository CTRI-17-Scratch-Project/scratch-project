import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('username') === null) {
      return navigate('/login');
    }

    // make a GET request to server using localstorage.getItem('username')
    // for each Plant item received, create a new plant card and render to screen
  }, []);

  
  return (
    <div>
      Home.jsx
      <p>hello {localStorage.getItem('username')}</p>
    </div>
  );
};

export default Home;
