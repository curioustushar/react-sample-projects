import React from 'react';

export const Pokemon = ({ pokemon }) => {
  const britishNumberFormatter = new Intl.NumberFormat('en-GB');

  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__meta">
        <span>{britishNumberFormatter.format(pokemon.maxHP)}</span>
        <span>{britishNumberFormatter.format(pokemon.maxCP)}</span>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
      </div>
      <div className="pokemon__attacks">
        {pokemon?.attacks?.special.slice(0, 3).map((attack) => (
          <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
        ))}
      </div>
    </div>
  );
};
