import React, { useState } from 'react';

//This is the POP UP

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup-outer">
      <div className="popup-inner">
        <button id="popup-close-button" onClick={props.handlePopupClose}>
          X
        </button>
        <div className='popup-content'>{props.content}</div>

        {(() => {
          if (props.page === 'home_page') {
            return (
              <div className="popup-button-div">
                <button className='red-button'>Remove Plant</button>
                <button>Set Up Reminders</button>
              </div>
            );
          } else if (props.page === 'discover_page') {
            return (
              <div className="popup-button-div">
                <button>Add Plant</button>
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
