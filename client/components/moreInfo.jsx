import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';


//This is the POP UP
const MoreInfo = (props) => {

    const [open, setOpen] = useState(false);
    return (
     <div>
      <button onClick={() => setOpen(true)}> Click to Open       Popup</button>
  {open ? <Popup text="Hello there! testing" closePopup={() => setOpen(false)} /> : null}
     </div>
   );
};

const Popup = (props) => {
    const {popUp, closePopup} = props;
    return (
        <div className="popup-container">
         <div className="popup-body">
          <h1>{popUp}</h1>
          <button onClick={closePopup}>Close X</button>
         </div>
        </div>
      );
}

export default MoreInfo;