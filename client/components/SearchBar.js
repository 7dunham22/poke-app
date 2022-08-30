import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBar.module.css';
import { getPokemon, getNames } from '../store/pokemon';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [newPokemon, setNewPokemon] = useState('');
  const pokemonNames = useSelector((state) => state.pokemon.names);

  useEffect(() => {
    dispatch(getNames());
  }, []);

  const handleUpdate = (e) => {
    setNewPokemon(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(getPokemon(newPokemon));
    setNewPokemon('');
  };

  return (
    <div id={styles.container}>
      <Form.Control
        id={styles.searchbar}
        size="lg"
        type="text"
        placeholder="Search for a Pokemon"
        value={newPokemon}
        onChange={handleUpdate}
      />
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default SearchBar;
