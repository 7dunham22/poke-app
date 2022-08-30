import axios from 'axios';

const GET_POKEMON = 'GET_POKEMON';

const _getPokemon = (pokemon) => ({
  type: GET_POKEMON,
  pokemon,
});

export const getPokemon = (name) => {
  return async (dispatch) => {
    try {
      const { data } = axios.get(`https://pokeapi.co/api/v2/${name}`);
      dispatch(_getPokemon(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
