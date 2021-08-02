import React, { Fragment, useEffect, useRef } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
// import ReactGA from 'react-ga';
import { useStore } from 'store/context';

import InputUrl from 'components/InputUrl/InputUrl';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import ResultSumm from 'components/ResultSumm/ResultSumm';
import ResultsList from 'components/ResultsList/ResultsList';
import ResultsLCP from 'components/ResultsLCP/ResultsLCP';

import { fetchTestDataIfNeeded, runNewTest } from 'store/actions';

// Prevent automatic page location restoration
if (window.history.scrollRestoration) {
  window.history.scrollRestoration = 'manual';
}

function WebSpeedPage(props) {
  const {
    dispatch,
    state: { webspeedtest }
  } = useStore();

  const { search, pathname } = useLocation();
  const history = useHistory();
  const { testId: paramTestId } = useParams();
  const storeTestId = webspeedtest.testId;

  const testIdRef = useRef();

  useEffect(() => {
    const locationParams = new URLSearchParams(search);
    const locationTestId = locationParams.get('testId');
    const testId = paramTestId ? paramTestId : locationTestId;
    if (locationTestId && !paramTestId) {
      history.push({
        pathname: pathname + 'results/' + locationTestId
      });
    }
    // Prevent this being called on every render
    if (testId !== testIdRef.current) {
      dispatch({
        type: 'setTestId',
        testId: testId
      });
      fetchTestDataIfNeeded(testId, dispatch, webspeedtest);
      testIdRef.current = testId;
    }
  }, [webspeedtest, search, pathname, paramTestId, dispatch, history]);

  useEffect(() => {
    if (storeTestId && pathname.indexOf('results') === -1) {
      history.push({
        pathname: pathname + 'results/' + storeTestId
      });
    }
  }, [storeTestId, pathname, history]);

  return (
    <Fragment>
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
            {webspeedtest.testResult.resultSumm.lcp && (
              <ResultsLCP lcp={webspeedtest.testResult.resultSumm.lcp} />
            )}
            {webspeedtest.testResult.resultSumm.totalImagesCount > 0 && (
              <ResultsList
                withLcp={Boolean(
                  webspeedtest.testResult.resultSumm.lcp &&
                    webspeedtest.testResult.resultSumm.lcp.analyzed
                )}
                results={webspeedtest.testResult.imagesTestResults || []}
              />
            )}
          </div>
        )}
      {webspeedtest.error && <Error error={webspeedtest.error} />}
    </Fragment>
  );
}

export default React.memo(WebSpeedPage);
