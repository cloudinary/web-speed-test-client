// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import * as React from 'react';
import * as actions from './actions';

const StoreContext = React.createContext();

const initialState = {
  testId: null,
  testResult: { imagesTestResults: [], resultSumm: {} },
  hasResults: false,
  newTest: false,
  error: false,
  isFetching: false,
};

function storeReducer(state, action) {
  switch (action.type) {
    case 'requestNewTest': {
      return {
        ...state,
        webspeedtest: {
          ...state.webspeedtest,
          testUrl: action.url,
          testStartTime: Date.now(),
          newTest: true,
        },
      };
    }
    case 'setTestId': {
      return {
        ...state,
        webspeedtest: {
          ...state.webspeedtest,
          testId: action.testId,
        },
      };
    }
    case 'requestTestResultsSuccess': {
      return {
        ...state,
        webspeedtest: {
          ...state.webspeedtest,
          testResult: action.payload,
          isFetching: false,
          hasResults: true,
          testEndTime: Date.now(),
        },
      };
    }
    case 'requestTestResultsError': {
      return {
        ...state,
        webspeedtest: {
          ...state.webspeedtest,
          testResult: initialState.testResult,
          error: action.msg,
          isFetching: false,
          hasResults: false,
        },
      };
    }
    case 'requestTestResults': {
      return {
        ...state,
        webspeedtest: {
          ...state.webspeedtest,
          isFetching: true,
          testResult: initialState.testResult,
          hasResults: false,
        },
      };
    }
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
    webspeedtest: initialState,
  });

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

function useStore() {
  debugger;
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
export { StoreProvider, useStore };
