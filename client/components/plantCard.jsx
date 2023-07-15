import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Popup from './Popup';
import { MoreInfo } from './Popup';


// const Popup = (props) => {
//   const { name, family } = props;
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="popup-card">
//       <button onClick={() => setOpen(true)}>More info</button>
//       {open ? (
//         <MoreInfo
//           family={family}
//           name={name}
//           closePopup={() => setOpen(false)}
//         />
//       ) : null}
//     </div>
//   );
// };

const PlantCard = (props) => {

  // const { name, family } = props;
  // const [open, setOpen] = useState(false);


  return (
    <div className="plant-card">
      <img src={props.img} width={100} height={100}></img>
      <p>{props.name}</p>
    </div>
    // <div className="pop-card"><Popup key={props.id} name={props.name} /></div>
  );
};

export default PlantCard;
