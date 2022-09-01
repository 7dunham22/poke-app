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
  const [singleSelections, setSingleSelections] = useState([]);
  const pokemonNames = useSelector((state) => state.pokemon.names);

  useEffect(() => {
    dispatch(getNames());
  }, []);

  const handleSubmit = () => {
    dispatch(getPokemon(singleSelections[0]));
    setSingleSelections([]);
  };

  return (
    <div id={styles.container}>
      <Form>
        <Typeahead
          id="basic-typeahead-single"
          className={styles.typeahead}
          labelKey="name"
          onChange={setSingleSelections}
          options={pokemonNames}
          placeholder="Search for a Pokemon"
          selected={singleSelections}
        />
      </Form>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
