import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

//This is the POP UP
const Popup = (props) => {
  const { name, family } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="popup-card">
      <button onClick={() => setOpen(true)}>More info</button>
      {open ? (
        <MoreInfo
          family={family}
          name={name}
          closePopup={() => setOpen(false)}
        />
      ) : null}
    </div>
  );
};

export const MoreInfo = (props) => {
  const { popUp, closePopup, name, family } = props;
  return (
    <div className="popup-container">
      <div className="popup-body">
        <h1>{popUp}</h1>
        <ul>
          <li>name: {name}</li>
          <li>family: {family}</li>
        </ul>

        <button onClick={closePopup}>Close X</button>
      </div>
    </div>
  );
};

export default Popup;

