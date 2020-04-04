import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Search" exact component={Search} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
