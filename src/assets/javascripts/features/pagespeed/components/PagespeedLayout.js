import React, { Component, PropTypes } from 'react';
import Header from './Header/Header';
import ResultSumm from './ResultSumm/ResultSumm';
import ResultsList from './ResultsList/ResultsList';

export default class PagespeedLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    pagespeed: PropTypes.object.isRequired
  };

  render() {
    const { pagespeed, actions } = this.props;
    console.log(this.props);
    return (
      <div className="pagespeedApp">
        <Header />
        <ResultSumm result={pagespeed.testResult.resultSumm} />
        <ResultsList results={pagespeed.testResult.imagesTestResults} />
      </div>
    );
  }
}
