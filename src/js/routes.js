import React from 'react';
import { Route, NotFoundRoute, Redirect } from 'react-router';

import Root from './pages/root';
import Dashboard from './pages/dashboard';
import NotFound from './pages/not-found';

const Routes = (
  <Route name='root' path='/' handler={Root}>
    <Route name='dashboard' path='/dashboard' handler={Dashboard}/>
    <Redirect from='/' to='/dashboard' />

    <NotFoundRoute handler={NotFound}/>
  </Route>
);

export default Routes;
