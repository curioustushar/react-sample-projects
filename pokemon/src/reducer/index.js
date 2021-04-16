const initialState = { pokemons: [], pokemonDetail: null };

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return { ...state, pokemons: action.payload };
    case 'SET_POKEMON_DETAILS':
      return { ...state, pokemonDetail: action.payload };
    default:
      return { ...state };
  }
};
