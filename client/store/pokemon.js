import axios from 'axios';

const GET_POKEMON = 'GET_POKEMON';
const SET_LOADING_STATE = 'SET_LOADING_STATE';
const GET_NAMES = 'GET_NAMES';
const SET_ERROR_STATE = 'SET_ERROR_STATE';

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

const _setErrorState = () => ({
  type: SET_ERROR_STATE,
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
        })
      );
    } catch (error) {
      dispatch(_setErrorState());
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
  isLoading: false,
  isFetched: false,
  isError: false,
  names: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...action.pokemon,
        isLoading: false,
        isFetched: true,
        isError: false,
      };
    case SET_LOADING_STATE:
      return { ...state, isLoading: true, isFetched: false, isError: false };
    case GET_NAMES:
      return { ...state, names: action.names };
    case SET_ERROR_STATE:
      return { ...state, isLoading: false, isFetched: true, isError: true };
    default:
      return state;
  }
};

export default pokemonReducer;
