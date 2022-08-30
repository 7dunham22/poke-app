import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div id={styles.container}>
      <Form.Control
        id={styles.searchbar}
        size="lg"
        type="text"
        placeholder="Search for a Pokemon"
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default SearchBar;
