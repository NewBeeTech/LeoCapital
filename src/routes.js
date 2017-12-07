/* @flow */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import RootContainer from './container/RootContainer';

const routes = (
  <Route path="/" component={RootContainer} >
     <Route path="/home-page" component={''} />
  </Route>
);

export default routes;
