// @flow

import { createStructuredSelector } from 'reselect';
import isFunction from 'lodash/isFunction';
import fetch from 'isomorphic-fetch';
import { State } from '../../models/webspeedtest';

// Action Types

// Define types in the form of 'npm-module-or-myapp/feature-name/ACTION_TYPE_NAME'
const SET_TEST_ID = 'redux-app/webspeedtest/SET_TEST_ID';
const REQUEST_TEST_RESULTS = 'redux-app/webspeedtest/REQUEST_TEST_RESULTS';
const REQUEST_TEST_RESULTS_SUCCESS = 'redux-app/webspeedtest/REQUEST_TEST_RESULTS_SUCCESS';
const REQUEST_TEST_RESULTS_ERROR = 'redux-app/webspeedtest/REQUEST_TEST_RESULTS_ERROR';
const REQUEST_NEW_TEST = 'redux-app/webspeedtest/REQUEST_NEW_TEST';
const REQUEST_NEW_TEST_SUCCESS = 'redux-app/webspeedtest/REQUEST_NEW_TEST_SUCCESS';
const REQUEST_NEW_TEST_ERROR = 'redux-app/webspeedtest/REQUEST_NEW_TEST_ERROR';

// This will be used in our root reducer and selectors
export const NAME = 'webspeedtest';
// Api url
//@TODO: think about where to store the api url (config file or env)
const API_URL = process.env.API_URL || 'http://localhost:5000';
const TEST_RESULTS_END_POINT = API_URL + '/test';
const NEW_TEST_END_POINT = API_URL + '/test/run';

// Define the initial state for `webspeedtest` module

const initialState: State = {
  testId: null,
  testResult: {imagesTestResults : [], resultSumm : {}},
  hasResults: false
};

// Reducer

export default function (state = initialState, action) {
  const actions = {
     [SET_TEST_ID]: () => ({
       ...state,
       testId: action.testId
     }),
     [REQUEST_NEW_TEST]: () => ({
       ...state,
       testUrl: action.url
     }),
     [REQUEST_TEST_RESULTS_SUCCESS]: () => ({
       ...state,
       testResult: action.payload,
       isFetching: false,
       hasResults: true
     }),
     [REQUEST_TEST_RESULTS_ERROR]: () => ({
       ...state,
       testResult: initialState.testResult,
       isFetching: false,
       hasResults: false
     }),
     [REQUEST_TEST_RESULTS]: () => ({
       ...state,
       isFetching: true,
       testResult: initialState.testResult,
       hasResults: false
     }),
     ['@@router/LOCATION_CHANGE']: () => ({
       ...state,
       isFetching: false,
       testResult: initialState.testResult,
       hasResults: false,
       testId: initialState.testId
     })
  };
  if (action.type == '@@router/LOCATION_CHANGE' && action.payload.pathname != '/') {
    return state
  }
  return (isFunction(actions[action.type])) ? actions[action.type]() : state
}


const requestTestResults = (testId: string) => ({
  type: REQUEST_TEST_RESULTS,
  testId
})

const requestNewTest = (url: string) => ({
  type: REQUEST_NEW_TEST,
  url
})

const requestNewTestSuccess = (payload) => ({
  type: REQUEST_NEW_TEST_SUCCESS,
  payload
})

const requestNewTestError = (msg) => ({
  type: REQUEST_NEW_TEST_ERROR,
  msg
})

const setTestId = (testId: string) => ({
  type: SET_TEST_ID,
  testId
});


const requestTestSuccess = (payload) => ({
  type: REQUEST_TEST_RESULTS_SUCCESS,
  payload
});

const requestTestError = (msg: string) => ({
  type: REQUEST_TEST_RESULTS_ERROR,
  msg
});

const wait = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  });
};

const fetchTestData = async(testId, getState, retryNum = 0) => {
  const totalRetries = 180;
  const delay = 3000;
  try {
    if (getState().webspeedtest.isFetching == false) {
      return false;
    }
    const response: Object = await fetch(TEST_RESULTS_END_POINT + '/' + testId)
    const data: Object = await response.json();

    if (data.status === 'success' && data.code !== 150) {
      // SUCCESS
      console.log("Got test data:", data);
      return data;
    }
    else if (data.status === 'success' && data.code === 150 && retryNum < totalRetries) {
      // KEEP TRYING
      console.log("Test not ready yet. re-trying [" + retryNum + '/' + totalRetries + "]");
      retryNum++;
      return wait(delay).then(() => {return fetchTestData(testId, getState, retryNum)});
    }
    else if (data.status === 'success' && data.code === 150 && retryNum >= totalRetries) {
      // STOP TRYING
      console.log("Tried " + retryNum + " times. Stopping.");
      data.status = 'timeout';
      return data;
    }

  } catch (err) {
    console.log("Got server error", err);
    throw err;
  }
}

const fetchNewTest = async(url) => {
  try {
    const response: Object = await fetch(NEW_TEST_END_POINT, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST', body: JSON.stringify({url})})
    const data: Object = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

const processTestResults = (data) => {
  return {imagesTestResults: data.imagesTestResults, resultSumm: data.resultSumm}
}

const fetchTestDataIfNeeded = (testId) => async(dispatch, getState) => {
  if (testId && !getState().isFetching && !getState().hasResults) {
    try {
      dispatch(requestTestResults(testId));

      const result = await fetchTestData(testId, getState);
      if (result == false) {
        return;
      }
      if (result.status == 'success') {
        dispatch(requestTestSuccess(processTestResults(result.data)));
      }
      else {
        dispatch(requestTestError(result.message));
      }

    } catch (err) {
      dispatch(requestTestError(err));
    }
  }
}

const runNewTest = (url) => async(dispatch, getState) => {
  if (url) {
    try {
      dispatch(requestNewTest(url));
      const result = await fetchNewTest(url);
      if (result.status == 'success') {
        dispatch(requestNewTestSuccess(result.data));
        dispatch(setTestId(result.data.testId))
        dispatch(fetchTestDataIfNeeded(result.data.testId));
      }
      else {
        dispatch(requestNewTestError(result.message));
      }
    } catch (err) {
      dispatch(requestNewTestError(err));
    }
  }
}

// Selectors

const webspeedtest = (state) => state[NAME];

export const selector = createStructuredSelector({
  webspeedtest
});

export const actionCreators = {
  fetchTestDataIfNeeded,
  setTestId,
  runNewTest
};
