import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation, useHistory, useParams, useRouteMatch } from 'react-router-dom';
// import GoogleTagManager from './GoogleTagManager/GoogleTagManager'
import { CloudinaryContext } from 'cloudinary-react';
// import ReactGA from 'react-ga';
import { useStore } from 'store/context';

import 'services/i18n';

import Header from 'components/Header/Header';
import InputUrl from 'components/InputUrl/InputUrl';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import ResultSumm from 'components/ResultSumm/ResultSumm';
import ResultsList from 'components/ResultsList/ResultsList';
import PreFooter from 'components/PreFooter/PreFooter';
import Footer from 'components/Footer/Footer';
import StaticPage from 'views/StaticPage/StaticPage';

import 'styles/styles.scss';
import {fetchTestDataIfNeeded, runNewTest} from './store/actions';

function WebSpeedPage(props) {
  const {
    dispatch,
    state: { webspeedtest },
  } = useStore();
  debugger;
  const { search, pathname } = useLocation();
  const history = useHistory();
  const { testId: paramTestId } = useParams();
  const storeTestId = webspeedtest.testId;
  useEffect(() => {
    const locationParams = new URLSearchParams(search);
    const locationTestId = locationParams.get('testId')
    const testId = paramTestId ? paramTestId : locationTestId;
    if (locationTestId && !paramTestId) {
      history.push({
        pathname: pathname + "results/" + locationTestId
      });
    }
    dispatch({
      type: 'setTestId',
      testId: testId,
    });
    fetchTestDataIfNeeded(testId, dispatch, webspeedtest);
  }, [search, pathname, paramTestId]);
  useEffect(() => {
    if (storeTestId && (pathname.indexOf('results') == -1)) {
      history.push({
        pathname: pathname + "results/" + storeTestId
      })
    }
  }, [storeTestId, pathname])
  return <Fragment>
    {!webspeedtest.testId && (
        <InputUrl
            onSubmit={async (url) => {
              runNewTest(url, dispatch, webspeedtest);
            }}
        />
    )}
    {webspeedtest.testId && webspeedtest.isFetching !== false && (
        <Loader url={webspeedtest.testUrl} />
    )}
    {webspeedtest.testId &&
    webspeedtest.isFetching === false &&
    !webspeedtest.error && (
        <div className="page-wrap">
          <ResultSumm
              testId={webspeedtest.testId}
              result={webspeedtest.testResult.resultSumm || {}}
          />
          {webspeedtest.testResult.resultSumm.totalImagesCount >
          0 && (
              <ResultsList
                  testId={webspeedtest.testId}
                  results={
                    webspeedtest.testResult.imagesTestResults || []
                  }
              />
          )}
        </div>
    )}
    {webspeedtest.error && <Error error={webspeedtest.error} />}

  </Fragment>
}

function App(props) {
  // ToDo: add fetchTestData logic.
  // Old implementation in src/components/WebspeedtestView.js

  const {
    dispatch,
    state: { webspeedtest },
  } = useStore();


  return (
    <CloudinaryContext
      cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
      cname={process.env.REACT_APP_CLOUDINARY_CNAME}
    >
      {/* {process.env.REACT_APP_GTM &&
        <GoogleTagManager gtmId={process.env.REACT_APP_GTM} />
      } */}
      <div className="webspeedtestApp">
        <Header />

        <Switch>
          <Route exact path={["/results/:testId", "/"]}>
            <WebSpeedPage/>
          </Route>
          <Route
              path="/:page"
              render={(props) => <StaticPage page={props.match.params.page} />}
          />
        </Switch>

        <PreFooter />
        <Footer />
      </div>
    </CloudinaryContext>
  );
}

export default App;
