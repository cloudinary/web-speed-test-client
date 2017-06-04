import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import WebspeedtestView from 'features/webspeedtest/components/WebspeedtestView';
import {NotFound} from 'views';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WebspeedtestView} />
    <Route path="/:page" component={WebspeedtestView}/>
    <Route path="404" component={NotFound} />
    <Redirect from="*" to="404" />
  </Route>
);
