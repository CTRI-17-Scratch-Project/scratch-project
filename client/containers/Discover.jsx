import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlantCard from '../components/plantCard.jsx';
import Popup from '../components/Popup.jsx';

const Discover = (props) => {
  //declare plantFeed state and set it to an empty array
  //plant feed will be the data from the public API
  const [plantFeed, updatePlantFeed] = useState([]);
  //state for popup
  const [state, setState] = React.useState({
    popupContent: {},
    popupTrigger: false,
    added: false
  });
  //use effect to fetch API from backend
 //then using updatePlantFeed to update the state 
  useEffect(() => {
    const fetchFeed = async () => {
      const response = await fetch('/api/plantAPI');
      const json = await response.json();
      updatePlantFeed(json);
    };
    fetchFeed();
    //this is using .then method which also works
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
      added: true,
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
  //iterate through API feed (plantFeed) and push it into feed
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
//array slice feed - feedPages is what will be returned
  const feedPage = feed.slice(page, page + 12);
  //handle page changes
  const handleNextPage = () => {
    console.log('next page!');
    setPage(page + 12);
  };
  const handlePreviousPage = () => {
    if (page > 0) setPage(page - 12);
    console.log('previous page!');
  };

  //declare filter options array
  const categoryList = [
    'Category',
    'Dracaena',
    'Palm',
    'Anthurium',
    'Bromeliad',
    'Aralia',
    'Spathiphyllum',
    'Hanging',
  ];
  const interestedInOptions = categoryList.map((option, idx) => {
    return (
      <option key={option + idx} value={option}>
        {option}
      </option>
    );
  });
    //handle filter
  const handleFilter = (e) => {
    const idx = e.target.value;
    const filtered = plantFeed.filter((plant) => {
      return plant.Categories == idx;
    });
    console.log(filtered);
    updatePlantFeed(filtered);
  };



  return (
    <div>
      <div className="page-header">
        <h3>
          Hello {localStorage.getItem('username')}! Discover new plants to add
          to your garden <i className="bi bi-flower2"></i>
        </h3>
      </div>
      <div>
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
        <label htmlFor="category-filter">Filter by:</label>
        <select
        className='filter'
          name="category-filter"
          id="category-filter"
          onChange={handleFilter}
        >
          {interestedInOptions}
        </select>
        <div className="feed">{feedPage}</div>
        <Popup
          content={state.popupContent}
          trigger={state.popupTrigger}
          handlePopupClose={handlePopupClose}
          handleAddPlant={handleAddPlant}
          page={'discover_page'}
          added={state.added}
        ></Popup>
      </div>
    </div>
  );
};

export default Discover;
