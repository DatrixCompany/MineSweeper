import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Game, OnBoard } from './components/';
import { ROUTES } from './utils';

const App = () => {
  return (
    <Switch>
      <Route path={'/MinesWeeper/' + ROUTES.PLAY}>
        <Game />
      </Route>
      <Route path={'/MinesWeeper/' + ROUTES.BASE}>
        <OnBoard />
      </Route>
    </Switch>
  );
};

export default App;
