import React from 'react';
// import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import styles from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * COMPONENT
 */
export const Home = () => {
  // const { username } = props;

  return (
    // <div>
    //   <h1>Welcome, {username}</h1>
    // </div>
    <div id={styles.container}>
      <Card id={styles.title}>
        <Card.Body>WELCOME TO THE POKE APP</Card.Body>
      </Card>
    </div>
  );
};

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     username: state.auth.username,
//   };
// };

// export default connect(mapState)(Home);

export default Home;
