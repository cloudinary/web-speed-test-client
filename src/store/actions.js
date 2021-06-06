const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
// const TEST_RESULTS_END_POINT = API_URL + '/test';
const NEW_TEST_END_POINT = API_URL + '/test/run';

export const fetchNewTest = async (url) => {
  try {
    const response = await fetch(NEW_TEST_END_POINT, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
