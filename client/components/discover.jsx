import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { plantCard } from './plantCard.jsx';

const Discover = (props) => {
  //declare plant feed state
  const [plantFeed, updatePlantFeed] = useState([]);

  //fetching response from plant API
  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch('', { method: 'GET' });
      const json = await response.json();
      console.log('fetch request from API sucessful');
      updatePlantFeed(json);
    };
    //fetchPlants();
  });

  //declare an array to hold feeds
  const feed = [];
  for (let i = 0; i < 20; i++) {
    feed.push(
      <plantCard
        id={'plantFeed_' + i}
        key={'plant_' + i}
        plantFeed={plantFeed[i]}
      />
    );
  }
  //iterate through API feed

  return (
    <div className="plantsContainer">
      <h3>testing</h3>
    </div>
  );
};

export default Discover;
