import React, { Component, PropTypes } from 'react';
import Header from './Header/Header';
import InputUrl from './InputUrl/InputUrl';
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
        {!pagespeed.testId &&
          <InputUrl/>
        }
        {pagespeed.testId && pagespeed.isFetching !== false &&
          <h2 className="page-wrap" style={{'textAlign': 'center', 'margin': '100px'}}>
            Loading
          </h2>
        }
        {pagespeed.testId && pagespeed.isFetching == false &&
          <div className="page-wrap">
            <ResultSumm testId={pagespeed.testId} result={pagespeed.testResult.resultSumm || {}} />
            <ResultsList results={pagespeed.testResult.imagesTestResults || []} />
          </div>
        }
      </div>
    );
  }
}
