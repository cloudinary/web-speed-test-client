import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'

import rootReducer from '../reducer';

const enhancer = compose(
  applyMiddleware(ReduxThunk)
)(createStore);

export default function configureStore(initialState) {
  return enhancer(rootReducer, initialState);
}
