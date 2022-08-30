import React from 'react';
// import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import styles from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import PokeCard from './PokeCard';

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div id={styles.container}>
      <Card id={styles.title}>
        <Card.Body>WELCOME TO THE POKE APP</Card.Body>
      </Card>
      <SearchBar />
      <PokeCard />
    </div>
  );
};

export default Home;
