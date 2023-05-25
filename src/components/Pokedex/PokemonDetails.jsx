import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Pokedex.css'

const PokemonDetails = ({ pokemon }) => {
  const [details, setDetails] = useState(null);
 


  const fetchDetails =  () => {
    axios
    .get(pokemon.url)
    .then((response)=>{
        setDetails(response.data);
        //console.log(response.data)
    })
    
    } 





  useEffect(() => {
    
    fetchDetails();
  }, [pokemon]);




  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card Details">
      <img className="card-img-top" src={details.sprites.front_default} alt={details.name} />
      <div className="card-body">
        <h2 className="card-title">{details.name}</h2>
        <div className="card-text">
          <p><strong>Height:</strong> {details.height}</p>
          <p><strong>Weight:</strong> {details.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
