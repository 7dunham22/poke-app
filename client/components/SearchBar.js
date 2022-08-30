import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import styles from './SearchBar.module.css';
import { getPokemon } from '../store/pokemon';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [newPokemon, setNewPokemon] = useState('');

  const handleUpdate = (e) => {
    setNewPokemon(e.target.value);
  };

  const handleSubmit = () => {
    console.log('HERE');
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
        onChange={handleUpdate}
      />
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default SearchBar;
