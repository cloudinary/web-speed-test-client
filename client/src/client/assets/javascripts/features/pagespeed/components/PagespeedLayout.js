import React, { Component, PropTypes } from 'react';
import ResultsList from './ResultsList/ResultsList';

export default class PagespeedLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    pagespeed: PropTypes.object.isRequired
  };

  render() {
    const { pagespeed, actions } = this.props;

    return (
      <div className="pagespeedApp">
        <h1>PageSpeed</h1>
        <ResultsList results={pagespeed.imagesTestResults || []} />
      </div>
    );
  }
}
