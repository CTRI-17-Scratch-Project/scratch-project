import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlantCard from '../components/plantCard.jsx';
import Popup from '../components/Popup.jsx';

const Discover = (props) => {
  //declare plant feed state
  const [plantFeed, updatePlantFeed] = useState([]);
  const [state, setState] = React.useState({
    popupContent: {},
    popupTrigger: false,
  });

  //use effect to fetch API
  useEffect(() => {
    // const response = await fetch('/api/plantAPI')
    // const json = response.json();
    // updatePlantFeed(json);
    const fetchFeed = async () => {
      const response = await fetch('/api/plantAPI');
      const json = await response.json();
      //console.log(json);
      updatePlantFeed(json);
      //console.log(json);
    };
    fetchFeed();

    // fetch('/api/plantAPI/')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     //console.log(data);
    //     updatePlantFeed(data);
    //   });
  }, []);

  const handlePlantCardClick = (data) => {
    setState({
      ...state,
      popupTrigger: true,
      popupContent: data,
    });
  };

  const handlePopupClose = () => {
    setState({
      ...state,
      popupTrigger: false,
    });
  };

  const handleAddPlant = () => {
    const body = {
      username: localStorage.username,
      plants: state.popupContent,
      type: 'add',
    };

    fetch('/api/dbAPI', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => {
      console.log(res.json);
      return res.json();
    });
  };

  // const {
  //   Img,
  //   Id,
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
  // } = plantFeed[];

  //declare an array to hold feeds
  const feed = [];
  //iterate through API feed

  for (let i = 0; i < plantFeed.length; i++) {
    feed.push(
      <PlantCard
        key={'feed' + i}
        img={plantFeed[i].Img}
        name={plantFeed[i].Common_name}
        data={plantFeed[i]}
        handlePlantCardClick={handlePlantCardClick}
      />
    );
  }

  //console.log(feed);
  // const pop = []
  // for (let i = 0; i < plantFeed.length; i++) {
  //   feed.push(
  //   <Popup
  //   key={'popup_' +i}
  //   name = {plantFeed[i].name}
  //   family = {plantFeed[i].Family}
  //   />
  //   );
  // }
  return (
    <div>
      <h1>Welcome to Plant Daddy!</h1>
      <p>hello {localStorage.getItem('username')}</p>
      Home Page
      <p>
        Let plant daddy take care of your plants{' '}
        <i className="bi bi-flower2"></i>
      </p>
      {feed}
      <Popup
        content={state.popupContent}
        trigger={state.popupTrigger}
        handlePopupClose={handlePopupClose}
        handleAddPlant={handleAddPlant}
        page={'discover_page'}
      ></Popup>
    </div>
  );
};

export default Discover;
