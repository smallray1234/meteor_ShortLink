import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Redirect, useHistory } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

import { Links_API } from '../api/links';
import LinksList from './LinksList';

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

  const sendAddLinks = (e) => {
    e.preventDefault();
    const urlTxt = e.target.url.value.trim();
    if (urlTxt) {
      Meteor.call('links.insert', urlTxt);
      e.target.url.value = '';
    }
  };

  return (
    <div>
      <h1>Links here</h1>
      <button onClick={onLogout}>Logout</button>
      <h2>Add Link</h2>
      <form onSubmit={sendAddLinks}>
        <input type="text" name="url" placeholder="URL" />
        <button>Add Link</button>
      </form>
      <h2>Your Links</h2>
      <LinksList />
    </div>
  );
}

export default Links;
