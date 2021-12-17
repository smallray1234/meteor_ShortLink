import React from 'react';
import { useHistory } from 'react-router-dom';

function Links() {
  const history = useHistory();
  const onLogout = () => {
    history.push('/');
  };
  return (
    <div>
      <h1>Links here</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Links;
