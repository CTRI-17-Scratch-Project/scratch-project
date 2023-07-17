import React, { useState } from 'react';

//This is the POP UP

const Popup = (props) => {
  const {
    Img,
    id,
    Family,
    Common_name,
    Categories,
    Origin,
    Climate,
    Zone,
    Light_ideal,
    Light_tolerated,
    Watering,
    Color_of_blooms,
    Blooming_season,
    Pruning,
  } = props.content;
  //{props.content}
  return props.trigger ? (
    <div className="popup-outer">
      <div className="popup-inner">
        <button id="popup-close-button" onClick={props.handlePopupClose}>
          X
        </button>
        <div className="popup-content">
          <ul>
            <li> {Common_name}</li>
            <li>Family: {Family}</li>
            <li>Category: {Categories}</li>
            <li>Origin: {Origin}</li>
            <li>Climate: {Climate}</li>
            <li>Zone: {Zone}</li>
            <li>Ideal Light: {Light_ideal}</li>
            <li>Light Tolerated: {Light_tolerated}</li>
            <li>Watering: {Watering}</li>
            <li>Color of Blooms: {Color_of_blooms}</li>
            <li>Blooming Season: {Blooming_season}</li>
            <li>Pruning: {Pruning}</li>
          </ul>
        </div>

        {(() => {
          if (props.page === 'home_page') {
            return (
              <div className="popup-button-div">
                <button
                  className="red-button"
                  onClick={props.handlePlantDelete}
                >
                  Remove Plant
                </button>
                <button onClick={props.handleReminderPopupOpen}>Set Up Reminders</button>
              </div>
            );
          } else if (props.page === 'discover_page') {
            return (
              <div className="popup-button-div">
                <button onClick={props.handleAddPlant}>Add to My Garden</button>
              </div>
            );
          }
        })()}
      </div>
    </div>
  ) : (
    ''
  );
};
export default Popup;
