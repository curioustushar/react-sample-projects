/* eslint-disable no-undef */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from './Pokemon';

export const PokemonWrapper = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 15 },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <pre>{error}</pre>;

  return (
    <div className="container pokemons">
      {data?.pokemons?.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonWrapper;
