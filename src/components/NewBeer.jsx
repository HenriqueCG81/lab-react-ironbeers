import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewBeer = () => {
  const navigate = useNavigate();

  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setBeerData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
      .then(response => {
        console.log('New beer created:', response.data);
        navigate('/beers'); // Redirect to the list of beers
      })
      .catch(error => {
        console.error('Error creating new beer:', error);
      });
  };

  return (
    <div className="container">
      <h1>Create a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={beerData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tagline" className="form-label">
            Tagline
          </label>
          <input
            type="text"
            className="form-control"
            id="tagline"
            name="tagline"
            value={beerData.tagline}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={beerData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first_brewed" className="form-label">
            First Brewed
          </label>
          <input
            type="text"
            className="form-control"
            id="first_brewed"
            name="first_brewed"
            value={beerData.first_brewed}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brewers_tips" className="form-label">
            Brewers Tips
          </label>
          <input
            type="text"
            className="form-control"
            id="brewers_tips"
            name="brewers_tips"
            value={beerData.brewers_tips}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="attenuation_level" className="form-label">
            Attenuation Level
          </label>
          <input
            type="number"
            className="form-control"
            id="attenuation_level"
            name="attenuation_level"
            value={beerData.attenuation_level}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contributed_by" className="form-label">
            Contributed By
          </label>
          <input
            type="text"
            className="form-control"
            id="contributed_by"
            name="contributed_by"
            value={beerData.contributed_by}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Beer
        </button>
      </form>
    </div>
  );
};

export default NewBeer;
