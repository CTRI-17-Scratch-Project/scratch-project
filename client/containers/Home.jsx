import React from 'react';

import { useNavigate } from 'react-router-dom';
import '../styles.scss';
import PlantCard from '../components/plantCard.jsx';
import Popup from '../components/Popup';

const Home = () => {
  const [state, setState] = React.useState({
    plants: [],
    popupContent: '',
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
        console.log(data);
        setState({
          ...state,
          plants: data.plants,
        });
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
      name: localStorage.username,
      plants: state.popupContent,
      type: 'delete',
    };

    fetch('/api/dbAPI', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => {
      console.log(res.json);
      return res.json();
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
      <h1>Welcome to Plant Daddy!</h1>
      <p>hello {localStorage.getItem('username')}</p>
      Home Page
      <p>
        Let plant daddy take care of your plants{' '}
        <i className="bi bi-flower2"></i>
      </p>
      {plantCards}
      <Popup
        content={state.popupContent}
        trigger={state.popupTrigger}
        handlePopupClose={handlePopupClose}
        handlePlantDelete={handlePlantDelete}
        page={'home_page'}
      ></Popup>
    </div>
  );
};

export default Home;
