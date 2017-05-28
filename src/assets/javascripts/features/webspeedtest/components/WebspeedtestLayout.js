import React, { Component, PropTypes } from 'react';
import Header from './Header/Header';
import InputUrl from './InputUrl/InputUrl';
import Loader from './Loader/Loader';
import ResultSumm from './ResultSumm/ResultSumm';
import ResultsList from './ResultsList/ResultsList';
import PreFooter from './PreFooter/PreFooter';
import Footer from './Footer/Footer';

export default class WebspeedtestLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    webspeedtest: PropTypes.object.isRequired
  };

  render() {
    const { webspeedtest, actions } = this.props;
    return (
      <div className="webspeedtestApp">
        <Header />
        {!webspeedtest.testId &&
          <InputUrl onSubmit={actions.runNewTest}/>
        }
        {webspeedtest.testId && webspeedtest.isFetching !== false &&
          <Loader />
        }
        {webspeedtest.testId && webspeedtest.isFetching == false &&
          <div className="page-wrap">
            <ResultSumm testId={webspeedtest.testId} result={webspeedtest.testResult.resultSumm || {}} />
            <ResultsList results={webspeedtest.testResult.imagesTestResults || []} />
          </div>
        }
        <PreFooter />
        <Footer />
      </div>
    );
  }
}

WebspeedtestLayout.contextTypes = {
  t: React.PropTypes.func.isRequired
}
