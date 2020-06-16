import SamplePage from 'pages/SampleApp/SamplePage';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


const Router = () => (
  <Switch>
    <Route
      path='/sample'
      component={SamplePage}
      exact
    />
    <Redirect from='/' to='/sample' />
    <Redirect from='*' to='/404' />
  </Switch>
);

export default Router;
