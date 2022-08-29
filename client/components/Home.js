import React from 'react';
// import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
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
    <Card>
      <Card.Body>WELCOME TO THE POKE APP</Card.Body>
    </Card>
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
