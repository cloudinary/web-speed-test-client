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
    if (location.query.testid) {
      setTestId(location.query.testid)
      fetchTestDataIfNeeded(location.query.testid);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { webspeedtest, location } = this.props;
    if (nextProps.webspeedtest.testId && webspeedtest.testId !== nextProps.webspeedtest.testId) {
      browserHistory.push({
        pathname: location.pathname,
        query: { testid: nextProps.webspeedtest.testId }
      });
    }
  }

  render() {
    return (
      <CloudinaryContext cloudName="webspeedtest" cname="staging.cloudinary.com/res">
        <WebspeedtestLayout {...this.props} />
      </CloudinaryContext>
    );
  }
}
