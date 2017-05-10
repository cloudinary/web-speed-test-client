// @flow

import { createStructuredSelector } from 'reselect';
import isFunction from 'lodash/isfunction';
import fetch from 'isomorphic-fetch';
import { State, ImageAnalyzeInfo, TotalPageRank } from '../../models/pagespeed';

// Action Types

// Define types in the form of 'npm-module-or-myapp/feature-name/ACTION_TYPE_NAME'
const SET_TEST_ID = 'redux-app/pagespeed/SET_TEST_ID';
const REQUEST_TEST_RESULTS = 'redux-app/pagespeed/REQUEST_TEST_RESULTS';
const REQUEST_TEST_RESULTS_SUCCESS = 'redux-app/pagespeed/REQUEST_TEST_RESULTS_SUCCESS';
const REQUEST_TEST_RESULTS_ERROR = 'redux-app/pagespeed/REQUEST_TEST_RESULTS_ERROR';

// This will be used in our root reducer and selectors
export const NAME = 'pagespeed';
// Api url
//@TODO: think about where to store the api url (config file or env)
const API_URL = process.env.API_URL || 'http://localhost:5000'
const TEST_RESULTS_END_POINT = API_URL + '/test';

// Define the initial state for `pagespeed` module

const initialState: State = {
  testId: null,
  imagesTestResults: [],
  totalPageRank: null,
  isFetching: false,
  hasResults: false
};

// Reducer

export default function (state = initialState, action) {
  const actions = {
     [SET_TEST_ID]: () => ({
       ...state,
       testId: action.testId
     }),
     [REQUEST_TEST_RESULTS_SUCCESS]: () => ({
       ...state,
       imagesTestResults: action.payload.imagesTestResults,
       totalPageRank: action.payload.totalPageRank,
       isFetching: false,
       hasResults: true
     }),
     [REQUEST_TEST_RESULTS_ERROR]: () => ({
       ...state,
       imagesTestResults: null,
       totalPageRank: null,
       isFetching: false,
       hasResults: false
     }),
     [REQUEST_TEST_RESULTS]: () => ({
       ...state,
       isFetching: true,
       imagesTestResults: null,
       totalPageRank: null,
       hasResults: false
     })
  };

  return (isFunction(actions[action.type])) ? actions[action.type]() : state
}


const requestTestResults = (testId: string) => ({
  type: REQUEST_TEST_RESULTS,
  testId
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


const fetchTestData = async(testId) => {
  try {
    const response: Object = await fetch(TEST_RESULTS_END_POINT + '/' + testId)
    const data: Object = await response.json();
    return data;
  } catch (err) {
    throw err;
  }


}
const processTestResults = (data) => {
  console.log(data);
  //@TODO: calculate results.
  return {imagesTestResults: data, totalPageRank: {}}
}

const fetchTestDataIfNeeded = (testId) => async(dispatch, getState) => {
  if (testId && !getState().isFetching && !getState().hasResults) {
    try {
      dispatch(requestTestResults(testId));
      const data = await fetchTestData(testId);
      dispatch(requestTestSuccess(processTestResults(data)));
    } catch (err) {
      dispatch(requestTestError(err));
    }
  }
}
// Selectors

const checkUrlForTestId = () => (dispatch, getState) => {
  const {routing: {locationBeforeTransitions: location}} = getState();
  if (location.query.testid) {
    dispatch(setTestId(location.query.testid))
  }
}

const pagespeed = (state) => state[NAME];

export const selector = createStructuredSelector({
  pagespeed
});

export const actionCreators = {
  fetchTestDataIfNeeded,
  setTestId,
  checkUrlForTestId
};
