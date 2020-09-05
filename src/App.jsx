import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Game, OnBoard } from './components/';
import { ROUTES } from './utils';

const App = () => {
  return (
    <Switch>
      <Route path={ROUTES.PLAY}>
        <Game />
      </Route>
      <Route path={ROUTES.BASE}>
        <OnBoard />
      </Route>
      <Redirect to={ROUTES.BASE} />
    </Switch>
  );
};

export default App;
