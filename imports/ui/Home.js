import React from 'react';
import { withRouter } from 'react-router-dom';

function Home(props) {
  const { isAuth } = props;
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      {isAuth ? (
        <button
          onClick={() => {
            props.history.push('/links');
          }}
        >
          Go Links
        </button>
      ) : (
        <button
          onClick={() => {
            props.history.push('/login');
          }}
        >
          Go Login
        </button>
      )}
    </div>
  );
}

export default withRouter(Home);
