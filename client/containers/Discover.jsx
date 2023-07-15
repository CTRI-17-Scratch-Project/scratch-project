import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlantCard from '../components/PlantCard.jsx';
import Popup from '../components/Popup.jsx';

const Discover = (props) => {
  //declare plant feed state
  const [plantFeed, updatePlantFeed] = useState([
    {
      Categories: 'Dracaena',
      Disease: 'N/A',
      Use: ['Potted plant', 'Secondary'],
      'Latin name': "Dracaena deremensis 'Janet Craig'",
      Insects: ['Mealy bug', 'Scale'],
      Avaibility: 'Regular',
      url: 'http://www.tropicopia.com/house-plant/detail.np/detail-121.html',
      Style: 'Bush',
      Bearing: 'Erect',
      'Light tolered': 'Diffuse light ( Less than 5,300 lux / 500 fc)',
      'Height at purchase': {
        m: 0.91,
        cm: 91,
      },
      'Light ideal': 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
      'Width at purchase': {
        m: 0.91,
        cm: 91,
      },
      id: '53417c12-4824-5995-bce0-b81984ebbd1d',
      Appeal: 'Robustness',
      img: 'http://www.tropicopia.com/house-plant/thumbnails/5556.jpg',
      Perfume: null,
      Growth: 'Regular',
      'Width potential': {
        m: 1.22,
        cm: 122,
      },
      name: 'Janet Craig',
      Pruning: 'If needed',
      Family: 'Liliaceae',
      'Height potential': {
        m: 3.66,
        cm: 366,
      },
      Origin: ['Cultivar'],
      Description: null,
      'Blooming season': 'Winter / Spring',
      'Color of leaf': ['Dark green'],
      Watering: 'Keep moist between watering & Can dry between watering',
      'Color of blooms': 'Light green',
      Zone: ['11-10'],
      'Common name': ['Janet Craig'],
      'Available sizes (Pot)': '4in to 14in / 10cm to 36cm',
      'Other names': null,
      Temperature: {
        F: 50,
        C: 10,
      },
      'Pot diameter (cm)': {
        m: 0.25,
        cm: 25,
      },
      Climat: 'Tropical',
    },
  ]);

  //declare an array to hold feeds
  const feed = [];
  //iterate through API feed
  for (let i = 0; i < plantFeed.length; i++) {
    feed.push(
      <PlantCard
        id={'plantFeed_' + i}
        key={'plant_' + i}
        plantFeed={plantFeed[i]}
        img={plantFeed[i].img}
        name={plantFeed[i].name}
      />
    );
  }
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
