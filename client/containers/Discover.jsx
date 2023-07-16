import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlantCard from '../components/PlantCard.jsx';
import Popup from '../components/Popup.jsx';

const Discover = (props) => {
  //declare plant feed state
  const [plantFeed, updatePlantFeed] = useState([]);

  //use effect to fetch API
  useEffect(() => {
    const fetchFeed = async () => {
      const response = await fetch('/plantAPI');
      const json = await response.json();
      console.log(json);
    };
    fetchFeed();
  }, []);
  console.log(plantFeed);
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
  // } = plantFeed;

  //declare an array to hold feeds
  const feed = [];
  //iterate through API feed
  // for (let i = 0; i < plantFeed.length; i++) {
  //   feed.push(
  //     <PlantCard
  //       id={Id}
  //       key={'plant_' + i}
  //       img={plantFeed[i].img}
  //       name={plantFeed[i].name}
  //     />
  //   );
  // }
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
    <div className="plantsContainer">
      <h3>testing</h3>
      {feed}
    </div>
  );
};

export default Discover;
