import React, { Component, PropTypes } from 'react';
import Header from './Header/Header';
import InputUrl from './InputUrl/InputUrl';
import Loader from './Loader/Loader';
import ResultSumm from './ResultSumm/ResultSumm';
import ResultsList from './ResultsList/ResultsList';
import PreFooter from './PreFooter/PreFooter';
import Footer from './Footer/Footer';

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
        {!pagespeed.testId &&
          <InputUrl onSubmit={actions.runNewTest}/>
        }
        {pagespeed.testId && pagespeed.isFetching !== false &&
          <Loader />
        }
        {pagespeed.testId && pagespeed.isFetching == false &&
          <div className="page-wrap">
            <ResultSumm testId={pagespeed.testId} result={pagespeed.testResult.resultSumm || {}} />
            <ResultsList results={pagespeed.testResult.imagesTestResults || []} />
          </div>
        }
        <PreFooter />
        <Footer />
      </div>
    );
  }
}

PagespeedLayout.contextTypes = {
  t: React.PropTypes.func.isRequired
}
