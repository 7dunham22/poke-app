import axios from 'axios';

const GET_POKEMON = 'GET_POKEMON';

const _getPokemon = (pokemon) => ({
  type: GET_POKEMON,
  pokemon,
});

export const getPokemon = (name) => {
  return async (dispatch) => {
    try {
      name = name.toLowerCase();
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      dispatch(
        _getPokemon({
          name: data.name,
          abilities: data.abilities,
          image: data.sprites.front_default,
        })
      );
    } catch (error) {
      dispatch(
        _getPokemon({ name: undefined, abilities: undefined, image: undefined })
      );
    }
  };
};

const initialState = {
  name: '',
  abilities: [],
  image: '',
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
