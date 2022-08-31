import React, { useState, useEffect, useRef } from 'react';
import styles from './PokeCard.module.css';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

const PokeCard = () => {
  const { name, abilities, image, isLoading, isFetched, isError } = useSelector(
    (state) => state.pokemon
  );

  return (
    <div>
      {!isFetched && !isLoading ? (
        <div></div>
      ) : isLoading ? (
        <Spinner animation="border" />
      ) : isFetched && !isError ? (
        <Card id={styles.container}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name[0].toUpperCase() + name.slice(1)}</Card.Title>
            <Card.Text>
              Abilities:{' '}
              <ul>
                {abilities.map((entry, i) => (
                  <li key={i}>{entry.ability.name}</li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <div>Sorry. Pokemon Not Found.</div>
      )}
    </div>
  );
};

export default PokeCard;
