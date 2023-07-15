import React from 'react';
import { Outlet } from 'react-router';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import NavBar from './components/NavBar.jsx';
import Home from './containers/Home.jsx';
import Discover from './containers/Discover.jsx';
import './styles.css';



const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
