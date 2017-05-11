import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import PagespeedView from 'features/pagespeed/components/PagespeedView';
import NotFoundView from 'views/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PagespeedView} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
