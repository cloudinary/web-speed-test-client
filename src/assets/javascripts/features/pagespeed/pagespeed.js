// @flow

import { createStructuredSelector } from 'reselect';
import isFunction from 'lodash/isFunction';
import fetch from 'isomorphic-fetch';
import { State } from '../../models/pagespeed';

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
  return {imagesTestResults: processEagerResult(data.imagesTestResults), resultSumm: data.resultSumm}
}
const processEagerResult = results => {
  var processedResults = [];
  results.forEach(result => {
    let processedResult = Object.assign({}, result);
    processedResult.dynamicFormats = [];
    processedResult.eager.forEach(transformed => {
      if (transformed.transformation.indexOf("/") == -1) {
        processedResult.transformedImage = transformed;
      }
      else {
        processedResult.dynamicFormats.push(transformed);
      }
    })
    delete processedResult.eager;
    processedResults.push(processedResult);
  })
  return processedResults;
}

const fetchTestDataIfNeeded = (testId) => async(dispatch, getState) => {
  if (testId && !getState().isFetching && !getState().hasResults) {
    try {
      dispatch(requestTestResults(testId));
      const result = await fetchTestData(testId);
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
// Selectors

const pagespeed = (state) => state[NAME];

export const selector = createStructuredSelector({
  pagespeed
});

export const actionCreators = {
  fetchTestDataIfNeeded,
  setTestId
};