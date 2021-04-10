import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON_DETAILS } from '../graphql';

export const PokemonDetail = () => {
  const britishNumberFormatter = new Intl.NumberFormat('en-GB');
  const params = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    variables: { id: params.id },
  });

  const goBack = () => {
    history.goBack();
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <pre>{error}</pre>;

  return (
    <div className="pokemondetail">
      <button onClick={goBack}> Back</button>
      <div className="pokemon">
        <div className="pokemon__name">
          <h1>{data?.pokemon.name}</h1>
        </div>
        <h4>Classification: {data?.pokemon.classification}</h4>
        <div className="pokemon__meta">
          <span>
            maxHP: {britishNumberFormatter.format(data?.pokemon.maxHP)} &nbsp;
          </span>
          <span>
            maxCP: {britishNumberFormatter.format(data?.pokemon.maxCP)}
          </span>
        </div>
        <br />
        <div className="pokemon__image">
          <img src={data?.pokemon.image} alt={data?.pokemon.name} />
        </div>
        <h1>Resistant</h1>
        <div className="pokemon__attacks">
          {data?.pokemon?.resistant?.map((resistant, index) => (
            <span key={index}>{resistant} </span>
          ))}
        </div>
        <h1>Weaknesses</h1>
        <div className="pokemon__attacks">
          {data?.pokemon?.weaknesses?.join(', ')}
        </div>
        <h1>Attacks</h1>
        <div className="pokemon__attacks">
          <p>{data?.pokemon?.attacks?.fast.map((f) => f.name).join(', ')}</p>
          <p>{data?.pokemon?.attacks?.special.map((s) => s.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};
