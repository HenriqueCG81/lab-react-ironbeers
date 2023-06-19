import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        setBeer(response.data);
      })
      .catch(error => {
        console.error('Error fetching random beer:', error);
      });
  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by
  } = beer;

  return (
    <div className="container">
      <img src={image_url} alt={name} style={{ height: '300px' }} />
      <h1>{name}</h1>
      <p>{tagline}</p>
      <p>First Brewed: {first_brewed}</p>
      <p>Attenuation Level: {attenuation_level}</p>
      <p>{description}</p>
      <p>Contributed by: {contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
