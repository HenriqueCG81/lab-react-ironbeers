import React from 'react';
import { NavLink } from 'react-router-dom';
import beerImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="mt-5">Welcome to the Beer Website</h1>
      <p>Choose from the following options:</p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <NavLink
            to="/beers"
            className="d-flex flex-column align-items-center"
          >
            <img src={beerImage} alt="Beers" className="img-fluid mb-3" />
            <h3>Beers</h3>
          </NavLink>
        </div>
        <div className="col-md-4 mb-4">
          <NavLink
            to="/random-beer"
            className="d-flex flex-column align-items-center"
          >
            <img
              src={randomBeerImage}
              alt="Random Beer"
              className="img-fluid mb-3"
            />
            <h3>Random Beer</h3>
          </NavLink>
        </div>
        <div className="col-md-4 mb-4">
          <NavLink
            to="/new-beer"
            className="d-flex flex-column align-items-center"
          >
            <img src={newBeerImage} alt="New Beer" className="img-fluid mb-3" />
            <h3>New Beer</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
