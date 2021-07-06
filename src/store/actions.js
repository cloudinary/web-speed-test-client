const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const TEST_RESULTS_END_POINT = API_URL + '/test';
const NEW_TEST_END_POINT = API_URL + '/test/run';

export const fetchNewTest = async (url) => {
  try {
    const response = await fetch(NEW_TEST_END_POINT, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ url })
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const runNewTest = async (url, dispatch, state) => {
  try {
    dispatch({ type: 'requestNewTest', url });
    const result = await fetchNewTest(url);
    if (result.status === 'success') {
      // if (process.env.GA) {
      //   ReactGA.event({
      //     category: 'Test info',
      //     action: 'Run new test',
      //     label: 'Run new test for ' + result.data.testId,
      //   });
      // }
      dispatch({
        type: 'setTestId',
        testId: result.data.testId
      });
      await fetchTestDataIfNeeded(result.data.testId, dispatch, state);
    } else {
      console.log('error get test result', result);
    }
  } catch (err) {
    console.log('error get test result', err);
  }
};
export const fetchTestDataIfNeeded = async (testId, dispatch, state) => {
  if (testId && !state.isFetching && !state.hasResults) {
    try {
      dispatch({
        type: 'requestTestResults',
        testId
      });
      const result = await fetchTestData(testId);
      if (result === false) {
        return;
      }
      if (result.status === 'success') {
        if (
          result.data.imagesTestResults.length === 0 &&
          result.data.resultSumm.totalImagesCount !== 0
        ) {
          // Catch an error where images are not analyzed.
          // Image list is empty while totalImagesCount > 0.
          dispatch({
            type: 'requestTestResultsError',
            msg: 'generic'
          });
        } else {
          // Success
          if (state.newTest) {
            // if (process.env.GA) {
            //   ReactGA.timing({
            //     category: 'Test info',
            //     variable: 'load',
            //     value: Date.now() - state.testStartTime,
            //     label: 'Get test results for ' + testId
            //   });
            //   ReactGA.event({
            //     category: 'Test info',
            //     action: 'Get test results',
            //     label: 'Get test results for ' + testId,
            //   });
            // }
          }
          dispatch({
            type: 'requestTestResultsSuccess',
            payload: processTestResults(result.data)
          });
        }
      } else {
        dispatch({
          type: 'requestTestResultsError',
          msg: result.message
        });
      }
    } catch (err) {
      dispatch({
        type: 'requestTestResultsError',
        msg: err
      });
    }
  }
};

const wait = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
};

const fetchTestData = async (testId, retryNum = 0) => {
  const totalRetries = 180;
  const delay = 3000;
  try {
    const response: Object = await fetch(TEST_RESULTS_END_POINT + '/' + testId);
    const data: Object = await response.json();

    if (data.status === 'success' && data.code !== 150) {
      // SUCCESS
      console.log('Got test data:', data);
    } else if (
      data.status === 'success' &&
      data.code === 150 &&
      retryNum < totalRetries
    ) {
      // KEEP TRYING
      console.log(
        'Test not ready yet. re-trying [' + retryNum + '/' + totalRetries + ']'
      );
      retryNum++;
      return wait(delay).then(() => {
        return fetchTestData(testId, retryNum);
      });
    } else if (
      data.status === 'success' &&
      data.code === 150 &&
      retryNum >= totalRetries
    ) {
      // STOP TRYING
      console.log('Tried ' + retryNum + ' times. Stopping.');
      data.status = 'timeout';
      data.message = 'timeout';
    }
    return data;
  } catch (err) {
    console.log('Got server error', err);
    throw err;
  }
};

const processTestResults = (data) => {
  return {
    imagesTestResults: data.imagesTestResults,
    resultSumm: data.resultSumm
  };
};
