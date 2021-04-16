import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../../graphql';
import { PokemonListContainer } from './PokemonListContainer';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 100 },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <pre>{error}</pre>;
  if (data) {
    dispatch({ type: 'SET_POKEMONS', payload: data.pokemons });
  }
  return (
    <div className="container pokemons">
      <PokemonListContainer />
    </div>
  );
};

export default Home;
