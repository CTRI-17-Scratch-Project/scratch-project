import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Popup from './Popup';

const PlantCard = (props) => {
  return (
    <div
      className="plant-card"
      onClick={() => {
        props.handlePlantCardClick(props.data);
      }}
    >
      <img src={props.img} width={100} height={100}></img>
      <p>{props.name}</p>
    </div>
  );
};

export default PlantCard;