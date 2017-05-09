import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import pagespeed, { NAME as pagespeedName } from 'features/pagespeed';

export default combineReducers({
  routing,
  [pagespeedName]: pagespeed
});
