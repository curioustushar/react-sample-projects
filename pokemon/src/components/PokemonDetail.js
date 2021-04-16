import React, { useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_POKEMON_DETAILS } from '../graphql';

export const PokemonDetail = () => {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail) || {};
  const britishNumberFormatter = new Intl.NumberFormat('en-GB');
  const params = useParams();
  const history = useHistory();
  const { state } = useLocation();

  const [getPokemonDetails, { loading, error, data }] = useLazyQuery(
    GET_POKEMON_DETAILS,
    {
      variables: { id: params.id },
    },
  );

  useEffect(() => {
    if (state && state?.pokemon) {
      dispatch({ type: 'SET_POKEMON_DETAILS', payload: state.pokemon });
    } else if (params.id) {
      getPokemonDetails();
    }
    return () => {};
  }, [dispatch, getPokemonDetails, state, params.id]);

  const goBack = () => {
    history.goBack();
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <pre>{error}</pre>;

  if (data) {
    dispatch({ type: 'SET_POKEMON_DETAILS', payload: data.pokemon });
  }

  return (
    <div className="pokemondetail">
      <button onClick={goBack}> Back</button>
      <div className="pokemon">
        <div className="pokemon__name">
          <h1>{pokemonDetail.name}</h1>
        </div>
        <h4>Classification: {pokemonDetail.classification}</h4>
        <div className="pokemon__meta">
          <span>
            maxHP: {britishNumberFormatter.format(pokemonDetail.maxHP)} &nbsp;
          </span>
          <span>
            maxCP: {britishNumberFormatter.format(pokemonDetail.maxCP)}
          </span>
        </div>
        <br />
        <div className="pokemon__image">
          <img src={pokemonDetail.image} alt={pokemonDetail.name} />
        </div>
        <h1>Resistant</h1>
        <div className="pokemon__attacks">
          {pokemonDetail?.resistant?.map((resistant, index) => (
            <span key={index}>{resistant} </span>
          ))}
        </div>
        <h1>Weaknesses</h1>
        <div className="pokemon__attacks">
          {pokemonDetail?.weaknesses?.join(', ')}
        </div>
        <h1>Attacks</h1>
        <div className="pokemon__attacks">
          <p>{pokemonDetail?.attacks?.fast.map((f) => f.name).join(', ')}</p>
          <p>{pokemonDetail?.attacks?.special.map((s) => s.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};
