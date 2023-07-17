import React from 'react';

const ReminderPopup = (props) => {
  return props.trigger ? (
    <div className="popup-outer">
      <div className="popup-inner">
        <button
          id="popup-close-button"
          onClick={props.handleReminderPopupClose}
        >
          X
        </button>
        <h3>Specify reminder frequency here</h3>
        <div >
          <input
            type="text"
            placeholder="days_interval"
            id="days_interval"
          ></input>
          <input type="text" placeholder="hour" id="hour"></input>
          <input
            type="text"
            placeholder="phone number"
            id="phoneNumber"
          ></input>
        </div>

        <div className="popup-button-div">
          <button onClick={props.handleReminderPopupSubmit}>
            Submit Reminder
          </button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default ReminderPopup;
