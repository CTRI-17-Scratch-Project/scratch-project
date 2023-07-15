import React from 'react';

import { useNavigate } from 'react-router-dom';
import '../styles.scss';
import PlantCard from '../components/PlantCard.jsx';

const Home = () => {
  // PLACE HOLDER DATA FOR TESTING BEFORE CONNECTING TO SERVER
  const plants = [
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
      name: 'Kyle',
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
    {
      Categories: 'Palm',
      Disease: 'N/A',
      Use: ['Potted plant', 'Secondary'],
      'Latin name': 'Rhapis excelsa',
      Insects: ['N/A'],
      Avaibility: 'Regular',
      url: 'http://www.tropicopia.com/house-plant/detail.np/detail-290.html',
      Style: null,
      Bearing: 'Clump',
      'Light tolered': 'Diffuse light ( Less than 5,300 lux / 500 fc)',
      'Height at purchase': {
        m: 0.91,
        cm: 91,
      },
      'Light ideal': 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
      'Width at purchase': {
        m: 0.71,
        cm: 71,
      },
      id: '9b97aef1-20a4-5620-af90-7d64dadb414e',
      Appeal: 'Foliage',
      img: 'http://www.tropicopia.com/house-plant/thumbnails/5725.jpg',
      Perfume: null,
      Growth: 'Slow',
      'Width potential': {
        m: 3.05,
        cm: 305,
      },
      'Common name (fr.)': null,
      Pruning: 'Never',
      Family: 'Arecaceae',
      'Height potential': {
        m: 3.66,
        cm: 366,
      },
      Origin: ['China'],
      Description: null,
      'Blooming season': null,
      'Color of leaf': ['Dark green'],
      Watering: 'Keep moist between watering & Must not dry between watering',
      'Color of blooms': null,
      Zone: ['11', '9'],
      name: 'Lady Palm',
      'Available sizes (Pot)': '6in to 32in / 15cm to 81cm',
      'Other names': 'Rhapis flabelliformis',
      Temperature: {
        F: 46.4,
        C: 8,
      },
      'Pot diameter (cm)': {
        m: 0.25,
        cm: 25,
      },
      Climat: 'Subtropical',
    },
  ];

  const [state, setState] = React.useState({
    plants: plants,
  });

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('username') === null) {
      return navigate('/login');
    }

    // fetch('/userdata')
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    //   setState({
    //     data: data,
    //   });
    // });
  }, []);

  const plantCards = [];
  for (let i = 0; i < state.plants.length; i++) {
    plantCards.push(
      <PlantCard
        key={state.plants[i].name + i}
        img={state.plants[i].img}
        name={state.plants[i].name}
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
    </div>
  );
};

export default Home;
