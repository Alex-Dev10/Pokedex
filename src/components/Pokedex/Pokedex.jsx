import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card } from './Card';
import PokemonDetails from './PokemonDetails';
import buttonBack from './Recursos/buttonBack.svg';
import { NavBar } from '../Nav/NavBar';

export const Pokedex = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetchPokemons();
  }, [currentPage]);

  const fetchPokemons = () => {
    setIsLoading(true);

    const offset = (currentPage - 1) * limit;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    axios
      .get(url)
      .then((response) => {
        setPokemons(response.data.results);
        setTotalPages(Math.ceil(response.data.count / limit));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const viewDetails = (Pokemon) => {
    setSelectedPokemon(Pokemon);
  };

  return (
    <>
      <NavBar />

      <div className="Pagination">
        <button
          className={`btn btn-success ${currentPage === 1 ? 'disabled' : ''}`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          className={`btn btn-success ${currentPage === totalPages ? 'disabled' : ''}`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      {isLoading ? (
        <div className="loading">

        <div class="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

          <p>Cargando pokemones...</p>

        </div>
      ) : (
        <div className="Main-Container">
          <div className="Pokedex-Container">
            {Pokemons.map((Pokemon) => (
              <Card key={Pokemon.name} Pokemon={Pokemon} viewDetails={() => viewDetails(Pokemon)} />
            ))}
          </div>

          <div className="Details-Container">
            {selectedPokemon && (
              <div>
                <PokemonDetails pokemon={selectedPokemon} />

                <button onClick={() => setSelectedPokemon(null)}>
                  <img src={buttonBack} alt="" />
                  <span>Back</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
