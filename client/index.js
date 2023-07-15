// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root)'));
// root.render(<App />);

// // import React from 'react';
// // import { createRoot } from 'react-dom/client';
// // import App from './App.jsx';
// // import './styling/App.scss';

// // const root = createRoot(document.getElementById('root'));

// // root.render(<App />);


import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <App />
      </Route>
      <Route path="/discover">
        
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
