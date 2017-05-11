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

    return (
      <div className="pagespeedApp">
        <Header />
        {pagespeed.isFetching == false &&
          <div className="page-wrap">
            <ResultSumm result={pagespeed || {}} />
            <ResultsList results={pagespeed.imagesTestResults || []} />
          </div>
        }
        {pagespeed.isFetching !== false &&
          <h2 className="page-wrap" style={{'text-align': 'center', 'margin': '100px'}}>
            Loading
          </h2>
        }
      </div>
    );
  }
}
