import React, { Component, PropTypes } from 'react';
import MetaData from './MetaData/MetaData';
import Header from './Header/Header';
import InputUrl from './InputUrl/InputUrl';
import Loader from './Loader/Loader';
import ResultSumm from './ResultSumm/ResultSumm';
import ResultsList from './ResultsList/ResultsList';
import PreFooter from './PreFooter/PreFooter';
import Footer from './Footer/Footer';
import * as Pages from "views";

const StaticPage = (props) => {
  const page = props.page;
  console.log(Pages[page]);
  if (Pages[page]) {
    const Page = Pages[page];
    return <Page />
  }
  return <Pages.NotFound />
}

export default class WebspeedtestLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    webspeedtest: PropTypes.object.isRequired
  };

  render() {
    const { webspeedtest, actions } = this.props;
    const staticPage = this.props.params.page ? this.props.params.page : false;

    return (
      <div className="webspeedtestApp">
        {/*<MetaData result={webspeedtest.testResult} />*/}
        <Header />

        {staticPage &&
          <StaticPage page={staticPage} />
        }
        {!staticPage && !webspeedtest.testId &&
          <InputUrl onSubmit={actions.runNewTest}/>
        }
        {webspeedtest.testId && webspeedtest.isFetching !== false &&
          <Loader url={webspeedtest.testUrl} />
        }
        {webspeedtest.testId && webspeedtest.isFetching == false &&
          <div className="page-wrap">
            <ResultSumm testId={webspeedtest.testId} result={webspeedtest.testResult.resultSumm || {}} />
            {webspeedtest.testResult.resultSumm.totalImagesCount > 0 &&
              <ResultsList testId={webspeedtest.testId} results={webspeedtest.testResult.imagesTestResults || []} />
            }
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
