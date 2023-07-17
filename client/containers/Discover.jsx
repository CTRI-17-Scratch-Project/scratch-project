import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlantCard from '../components/plantCard.jsx';
import Popup from '../components/Popup.jsx';

const Discover = (props) => {
  //declare plant feed state
  const [plantFeed, updatePlantFeed] = useState([]);
  //state for popup
  const [state, setState] = React.useState({
    popupContent: {},
    popupTrigger: false,
  });
  //use effect to fetch API from backend
  useEffect(() => {
    const fetchFeed = async () => {
      const response = await fetch('/api/plantAPI');
      const json = await response.json();
      updatePlantFeed(json);
    };
    fetchFeed();
    // fetch('/api/plantAPI/')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     //console.log(data);
    //     updatePlantFeed(data);
    //   });
  }, []);
  //handle popup page
  const handlePlantCardClick = (data) => {
    setState({
      ...state,
      popupTrigger: true,
      popupContent: data,
    });
  };
  //handle pop up close
  const handlePopupClose = () => {
    setState({
      ...state,
      popupTrigger: false,
    });
  };
  //handle add plant
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
  //handle previous and next pages
  const [page, setPage] = useState(0);
  const feedPage = feed.slice(page, page + 12);
  const handleNextPage = () => {
    console.log('next page!');
    setPage(page + 12);
  };
  const handlePreviousPage = () => {
    if (page > 0) setPage(page - 12);
    console.log('previous page!');
  };
  //handle filter
    const categoryList = ['Dracaena', 'Palm', 'Anthurium', 'Bromeliad', 'Aralia', 'Spathiphyllum']
    const interestedInOptions = categoryList.map((option, idx) => {
      return (
        <option key={option+idx} value={option}>
          {option}
        </option>
      );
    });
  const [categoryFilter, setCategoryFilter] = useState([])

  
 
  const handleFilter =(filterOption)=> {
const filtered = plantFeed.filter(plant =>{
    return plant.Categories == filterOption
     })
     
  }
  
 // console.log(plantFeed[0].Common_name)

  return (
    <div>
      <div className="page-header">
        <h1>Welcome to Plant Daddy!</h1>
        <h3>
          Hello {localStorage.getItem('username')}! Discover new plants to add
          to your garden <i className="bi bi-flower2"></i>
        </h3>
      </div>
      <div>
        <div className="feed">{feedPage}</div>
        <button
          className="btn"
          onClick={() => {
            handlePreviousPage();
          }}
        >
          Previous Page
        </button>
        <button
          className="btn"
          onClick={() => {
            handleNextPage();
          }}
        >
          Next Page
        </button>
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
            name="category-filter"
            id="category-filter"
            onClick={()=>{
              handleFilter({interestedInOptions})
            }}
          >{interestedInOptions}
          </select>
        <Popup
          content={state.popupContent}
          trigger={state.popupTrigger}
          handlePopupClose={handlePopupClose}
          handleAddPlant={handleAddPlant}
          page={'discover_page'}
        ></Popup>
      </div>
    </div>
  );
};

export default Discover;
