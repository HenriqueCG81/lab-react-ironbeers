import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BeerDetails = () => {
  const [beer, setBeer] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
      .then(response => {
        setBeer(response.data);
      })
      .catch(error => {
        console.error('Error fetching beer details:', error);
      });
  }, [_id]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} style={{ height: '300px' }} />
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;
