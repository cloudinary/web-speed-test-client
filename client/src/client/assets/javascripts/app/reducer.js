import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { i18nState } from "redux-i18n";

import pagespeed, { NAME as pagespeedName } from 'features/pagespeed';

export default combineReducers({
  routing,
  i18nState,
  [pagespeedName]: pagespeed
});
