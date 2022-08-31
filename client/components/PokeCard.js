import React, { useState, useEffect, useRef } from 'react';
import styles from './PokeCard.module.css';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

const PokeCard = () => {
  const name = useSelector((state) => state.pokemon.name);
  const abilities = useSelector((state) => state.pokemon.abilities);
  const image = useSelector((state) => state.pokemon.image);
  const isLoading = useSelector((state) => state.pokemon.loading);
  const foundResult = name !== undefined;
  const [currName, setName] = useState(name);
  const didSearch = useRef(false);

  useEffect(() => {
    didSearch.current = true;
    setName(name);
  }, [name]);

  useEffect(() => {
    setName(name);
  }, [isLoading]);

  return (
    <div>
      {!didSearch.current ? (
        <div></div>
      ) : isLoading ? (
        <Spinner animation="border" />
      ) : foundResult ? (
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
