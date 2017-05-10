import React, { PropTypes } from 'react';
import I18n from "redux-i18n"
import { translations } from '../translations/translations'

const App = (props) => (
  <I18n translations={translations} initialLang="en">
    <div className="page-container">
      {React.cloneElement({...props}.children, {...props})}
    </div>
  </I18n>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
