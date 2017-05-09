import React, { Component, PropTypes } from 'react';

import './PagespeedApp.scss';

export default class PagespeedLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    pagespeed: PropTypes.object.isRequired
  };

  render() {
    const { pagespeed: { pagespeedById }, actions } = this.props;

    return (
      <div className="pagespeedApp">
        <h1>PageSpeed</h1>
      </div>
    );
  }
}
