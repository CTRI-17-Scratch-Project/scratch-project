import React from 'react';

import { useNavigate } from 'react-router-dom';
import '../styles.scss';
import PlantCard from '../components/plantCard.jsx';
import Popup from '../components/Popup';
import ReminderPopup from '../components/ReminderPopup';

const Home = () => {
  const [state, setState] = React.useState({
    plants: [],
    popupContent: '',
    popupTrigger: false,
  });

  const [popupState, setpopupState] = React.useState({
    popupTrigger: false,
  });

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('username') === null) {
      return navigate('/login');
    }
    fetch('/api/dbAPI/' + localStorage.username)
      .then((res) => res.json())
      .then((data) => {
        setState({
          ...state,
          plants: data.plants,
        });

        for (let i = 0; i < state.plants.length; i++) {
          plantCards.push(
            <PlantCard
              key={state.plants[i].Name + i}
              img={state.plants[i].Img}
              name={state.plants[i].Common_name}
              data={state.plants[i]}
              handlePlantCardClick={handlePlantCardClick}
            ></PlantCard>
          );
        }
      });
  }, []);

  const handlePopupClose = () => {
    setState({
      ...state,
      popupTrigger: false,
    });
  };

  const handlePlantCardClick = (data) => {
    setState({
      ...state,
      popupTrigger: true,
      popupContent: data,
    });
  };

  const handlePlantDelete = () => {
    const body = {
      username: localStorage.username,
      plants: state.popupContent,
      type: 'delete',
    };
    fetch('/api/dbAPI', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json)
      .then((data) => {
        setState({
          ...state,
          popupTrigger: false,
        });
        window.location.reload();
      });
  };

  const handleReminderPopupOpen = () => {
    setpopupState({
      popupTrigger: true,
    });
    handlePopupClose();
  };

  const handleReminderPopupClose = () => {
    setpopupState({
      popupTrigger: false,
    });
  };

  const handleReminderPopupSubmit = () => {
    // takes e.target.param and submit to server using a fetch request
    const daysInterval = document.querySelector('#days_interval').value;
    const hour = document.querySelector('#hour').value;
    const phoneNumber = document.querySelector('#phoneNumber').value;

    const body = {
      username: localStorage.username,
      type: 'add',
      plant: state.popupContent.Common_name,
      daysInterval: daysInterval,
      hour: hour,
      phoneNumber: phoneNumber
    };

    fetch('/api/textAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data1', data);
      });
  };

  const plantCards = [];
  for (let i = 0; i < state.plants.length; i++) {
    plantCards.push(
      <PlantCard
        key={state.plants[i].Name + i}
        img={state.plants[i].Img}
        name={state.plants[i].Common_name}
        data={state.plants[i]}
        handlePlantCardClick={handlePlantCardClick}
      ></PlantCard>
    );
  }

  return (
    <div>
      <div className="page-header">
        <h1>Welcome to Plant Daddy!</h1>
        <h3>
          Hello {localStorage.getItem('username')}! Let plant daddy take care of
          your plants <i className="bi bi-flower2"></i>
        </h3>
      </div>
      <div className="myPlants">


        {plantCards}
        <Popup
          content={state.popupContent}
          trigger={state.popupTrigger}
          handlePopupClose={handlePopupClose}
          handlePlantDelete={handlePlantDelete}
          handleReminderPopupOpen={handleReminderPopupOpen}
          page={'home_page'}
        ></Popup>
        <ReminderPopup
          trigger={popupState.popupTrigger}
          handleReminderPopupClose={handleReminderPopupClose}
          handleReminderPopupSubmit={handleReminderPopupSubmit}
        ></ReminderPopup>
      </div>
    </div>
  );
};

export default Home;
