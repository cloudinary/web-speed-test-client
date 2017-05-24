import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CloudinaryContext } from 'cloudinary-react';

import { actionCreators as pagespeedActions, selector } from '../';
import PagespeedLayout from './PagespeedLayout';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(pagespeedActions, dispatch)
}))
export default class PagespeedView extends Component {

  componentDidMount() {
    const { location, actions: { setTestId, fetchTestDataIfNeeded } } = this.props;
    if (location.query.testid) {
      setTestId(location.query.testid)
      fetchTestDataIfNeeded(location.query.testid);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pagespeed, location } = this.props;
    if (nextProps.pagespeed.testId && pagespeed.testId !== nextProps.pagespeed.testId) {
      browserHistory.push({
        pathname: location.pathname,
        query: { testid: nextProps.pagespeed.testId }
      });
    }
  }

  render() {
    return (
      <CloudinaryContext cloudName="pagespeed" cname="staging.cloudinary.com/res">
        <PagespeedLayout {...this.props} />
      </CloudinaryContext>
    );
  }
}
