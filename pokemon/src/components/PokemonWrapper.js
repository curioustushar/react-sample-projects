/* eslint-disable no-undef */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql';
import { Pokemon } from './Pokemon';
import { Link } from 'react-router-dom';

export const PokemonWrapper = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 15 },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <pre>{error}</pre>;

  return (
    <div className="container pokemons">
      {data?.pokemons?.map((pokemon) => (
        <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
          <Pokemon pokemon={pokemon} />
        </Link>
      ))}
    </div>
  );
};

export default PokemonWrapper;
