import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { i18nState } from "redux-i18n";

import webspeedtest, { NAME as webspeedtestName } from 'features/webspeedtest';

export default combineReducers({
  routing,
  i18nState,
  [webspeedtestName]: webspeedtest
});
