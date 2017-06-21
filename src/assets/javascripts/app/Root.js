// @flow

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';

// Analytics
import ReactGA from 'react-ga';
if (process.env.GA) {
  ReactGA.initialize(process.env.GA);
}

const Root = ({ store, history }: any) => {
  const logPageView = () => {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  let ComponentEl = (
    <Provider store={store}>
      <Router history={history} routes={routes} onUpdate={logPageView} />
    </Provider>
  );

  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./DevTools').default;

    ComponentEl = (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} onUpdate={logPageView}  />
          {!window.devToolsExtension ? <DevTools /> : null}
        </div>
      </Provider>
    );
  }

  return ComponentEl;
};

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
