import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

function Links(props) {
  const { isAuth } = props;
  const history = useHistory();
  const onLogout = () => {
    Accounts.logout();
    history.push('/');
  };
  if (!isAuth) {
    alert('You have to login to use this function.');
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>Links here</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Links;
