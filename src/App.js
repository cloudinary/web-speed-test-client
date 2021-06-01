import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import GoogleTagManager from './GoogleTagManager/GoogleTagManager'
import { CloudinaryContext } from "cloudinary-react";

import { useStore } from "context";

import "services/i18n";

import Header from "components/Header/Header";
import InputUrl from "components/InputUrl/InputUrl";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Error";
import ResultSumm from "components/ResultSumm/ResultSumm";
import ResultsList from "components/ResultsList/ResultsList";
import PreFooter from "components/PreFooter/PreFooter";
import Footer from "components/Footer/Footer";
import StaticPage from "views/StaticPage/StaticPage";

import "styles/styles.scss";

function App(props) {
  // ToDo: add fetchTestData logic.
  // Old implementation in src/components/WebspeedtestView.js

  const {
    dispatch,
    state: { webspeedtest },
  } = useStore();

  // const { webspeedtest, actions } = props;

  // temp
  // const webspeedtest = props.webspeedtest || {};
  // const actions = props.actions || {};

  return (
    <Router>
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
            <Route
              path="/:page"
              render={(props) => <StaticPage page={props.match.params.page} />}
            />

            <Route exact path="/">
              {!webspeedtest.testId && (
                // <InputUrl onSubmit={actions.runNewTest} />
                <InputUrl onSubmit={() => dispatch({ type: "increment" })} />
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
            </Route>
          </Switch>

          <PreFooter />
          <Footer />
        </div>
      </CloudinaryContext>
    </Router>
  );
}

export default App;
