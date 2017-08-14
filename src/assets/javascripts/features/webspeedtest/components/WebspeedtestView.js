import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CloudinaryContext } from 'cloudinary-react';

import { actionCreators as webspeedtestActions, selector } from '../';
import WebspeedtestLayout from './WebspeedtestLayout';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(webspeedtestActions, dispatch)
}))
export default class WebspeedtestView extends Component {

  componentDidMount() {
    const { location, actions: { setTestId, fetchTestDataIfNeeded } } = this.props;
    //@TODO: remove after change the redirect on WPT side.
    if (location.query.testid) {
      browserHistory.push({
        pathname: location.pathname + "results/" + location.query.testid
      });
    }
    const testId = this.props.params && this.props.params.testId || location.query.testid;
    if (testId) {
      setTestId(testId)
      fetchTestDataIfNeeded(testId);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { webspeedtest, location } = this.props;
    if (nextProps.webspeedtest.testId && webspeedtest.testId !== nextProps.webspeedtest.testId) {
      if (location.pathname.indexOf('results') == -1) {
        browserHistory.push({
          pathname: location.pathname + "results/" + nextProps.webspeedtest.testId
        });
      }
    }
    if (webspeedtest.isFetching && nextProps.webspeedtest.isFetching == false) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME} cname={process.env.CLOUDINARY_CNAME}>
        <WebspeedtestLayout {...this.props} />
      </CloudinaryContext>
    );
  }
}
