import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Home';
import Links from './Links';
import SignUp from './SignUp';
import Login from './Login';
import NotFound from './NotFound';

export const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </>
    </Router>
  );
};
