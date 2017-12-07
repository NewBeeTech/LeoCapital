/* @flow */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import RootContainer from './container/RootContainer';
import HomePage from './pages/HomePage';
import ShareDetail from './pages/ShareDetail';

const routes = (
  <Route path="/" component={RootContainer} >
     <Route path="/home-page" component={HomePage} />
      <Route path="/share-detail/(:id)" component={ShareDetail} />
  </Route>
);

export default routes;
