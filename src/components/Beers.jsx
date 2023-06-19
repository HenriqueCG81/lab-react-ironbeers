import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching beers:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">Beers</h1>
      {beers.map(beer => (
        <div key={beer._id} className="row mb-4">
          <div className="col-4">
            <img
              src={beer.image_url}
              alt={beer.name}
              className="img-fluid"
              style={{ maxHeight: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-8 d-flex align-items-center">
            <div>
              <NavLink to={`/beers/${beer._id}`}>
                <h5 className="card-title">{beer.name}</h5>
              </NavLink>
              <p className="card-text">{beer.tagline}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Beers;
