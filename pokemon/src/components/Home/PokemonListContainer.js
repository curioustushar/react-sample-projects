/* eslint-disable no-undef */
import React from 'react';
import { Pokemon } from './Pokemon';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PokemonListContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);
  return (
    <>
      {pokemons?.map((pokemon) => (
        <Link
          key={pokemon.id}
          to={{ pathname: `/pokemon/${pokemon.id}`, state: { pokemon } }}
        >
          <Pokemon pokemon={pokemon} />
        </Link>
      ))}
    </>
  );
};

export default PokemonListContainer;
