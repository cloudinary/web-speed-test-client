// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import * as React from 'react';
import * as actions from './actions';

const StoreContext = React.createContext();

function storeReducer(state, action) {
  switch (action.type) {
    case 'fetchNewTest': {
      // WIP
      const testResult = actions.fetchNewTest(action.url);
      console.log(testResult);
      debugger; // eslint-disable-line
      return { testResult };
    }
    case 'increment': {
      return { count: state.count + 1 };
    }
    case 'decrement': {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(storeReducer, {
    count: 0,
    webspeedtest: {},
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

function useStore() {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
export { StoreProvider, useStore };
