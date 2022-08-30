import axios from 'axios';

const GET_POKEMON = 'GET_POKEMON';
const SET_LOADING_STATE = 'SET_LOADING_STATE';
const GET_NAMES = 'GET_NAMES';

const _getPokemon = (pokemon) => ({
  type: GET_POKEMON,
  pokemon,
});

const _setLoadingState = () => ({
  type: SET_LOADING_STATE,
});

const _getNames = (names) => ({
  type: GET_NAMES,
  names,
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

export const getNames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=2000'
      );
      const names = data.results.map((result) => result.name);
      dispatch(_getNames(names));
    } catch (error) {
      console.log('Failed to retrieve pokemon names');
    }
  };
};

const initialState = {
  name: '',
  abilities: [],
  image: '',
  loading: false,
  names: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...action.pokemon, names: state.names };
    case SET_LOADING_STATE:
      return { ...state, loading: true };
    case GET_NAMES:
      return { ...state, names: action.names };
    default:
      return state;
  }
};

export default pokemonReducer;
