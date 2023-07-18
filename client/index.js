import React from 'react';
import WithoutNav from './containers/WithoutNav.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Login from './containers/Login.jsx';
import Signup from './containers/Signup.jsx';
import Home from './containers/Home.jsx';
import Account from './containers/Account.jsx';
import Discover from './containers/Discover.jsx';

const root = createRoot(document.getElementById('root'));

// routes for login, home, signup
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<WithoutNav />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/discover" element={<Discover />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
