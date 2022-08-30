import axios from 'axios';

const GET_POKEMON = 'GET_POKEMON';
const SET_LOADING_STATE = 'SET_LOADING_STATE';

const _getPokemon = (pokemon) => ({
  type: GET_POKEMON,
  pokemon,
});

const _setLoadingState = () => ({
  type: SET_LOADING_STATE,
});

export const getPokemon = (name) => {
  return async (dispatch) => {
    try {
      name = name.toLowerCase();
      dispatch(_setLoadingState());
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      dispatch(
        _getPokemon({
          name: data.name,
          abilities: data.abilities,
          image: data.sprites.front_default,
          loading: false,
        })
      );
    } catch (error) {
      dispatch(
        _getPokemon({
          name: undefined,
          abilities: undefined,
          image: undefined,
          loading: false,
        })
      );
    }
  };
};

const initialState = {
  name: '',
  abilities: [],
  image: '',
  loading: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return action.pokemon;
    case SET_LOADING_STATE:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default pokemonReducer;
