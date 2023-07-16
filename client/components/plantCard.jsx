import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Popup from './Popup';

const PlantCard = (props) => {
  // const {
  //   Img,
  //   id,
  //   Family,
  //   Common_name,
  //   Categories,
  //   Origin,
  //   Climate,
  //   Zone,
  //   Light_ideal,
  //   Light_tolerated,
  //   Watering,
  //   Color_of_blooms,
  //   Blooming_season,
  //   Pruning,
  // } = props.feed;
  return (
    <div
      className="plant-card"
      onClick={() => {
        props.handlePlantCardClick(props.data);
      }}
    >
      <img src={props.img} width={100} height={100}></img>
      <ul>
        <li>Name: {props.Common_name}</li>
        <li>Family: </li>
      </ul>
    </div>
  );
};

export default PlantCard;
