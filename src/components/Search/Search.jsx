import React, { useState } from 'react';
import axios from 'axios';
import { NavBar } from '../Nav/NavBar';
import SearchIcon from './Recursos/Search.svg';
import './Search.css';

export const Search = () => {
  const [searchPokemon, setSearchPokemon] = useState({});
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (search.trim() === '') {
      setError('Please enter a search term.');
      return;
    }

    setError('');

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search.toLocaleLowerCase()}`)
      .then((response) => {
        setSearchPokemon({
          name: response.data.name,
          image: response.data.sprites.front_default,
          type: response.data.types[0].type.name,
          height: response.data.height,
          weight: response.data.weight,
          abilities: response.data.abilities.map((ability) => ability.ability.name),
          stats: response.data.stats.map((stat) => stat.base_stat),
        });
        setSearch(''); // Vaciar el campo de búsqueda después de la búsqueda exitosa
      })
      .catch((error) => {
        console.log(error);
        setError('An error occurred during the search.');
      });
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="SearchContainer">
      <NavBar />

      <div className="container-input">
        <input
          type="text"
          placeholder="Search"
          name="text"
          className="input"
          required=""
          autoComplete="off"
          value={search}
          onChange={handleChange}
        />
        <img src={SearchIcon} alt="" onClick={handleSearch} />
      </div>

      {error && <p className="error">{error}</p>}

      <div className="CardSearchContainer">
      <div class="circle"></div>
    <div class="circle"></div>
    <div class="card-inner">
    <p>{searchPokemon.name}</p>
        <img src={searchPokemon.image} alt="" />
        <p>{searchPokemon.type}</p>
        <p> {searchPokemon.height}</p>
        <p> {searchPokemon.weight}</p>
        <p> {searchPokemon.abilities?.join(', ')}</p>
        <p> {searchPokemon.stats?.join(', ')}</p>
    </div>
      
      </div>
    </div>
  );
};
