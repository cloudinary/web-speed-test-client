import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CloudinaryContext } from 'cloudinary-react';

import { actionCreators as pagespeedActions, selector } from '../';
import PagespeedLayout from './PagespeedLayout';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(pagespeedActions, dispatch)
}))
export default class PagespeedView extends Component {
  render() {
    return (
      <CloudinaryContext cloudName="pagespeed" cname="staging.cloudinary.com/res">
        <PagespeedLayout {...this.props} />
      </CloudinaryContext>
    );
  }
  componentDidMount() {
    const { location } = this.props;
    let { setTestId, fetchTestDataIfNeeded } = this.props.actions;
    if (location.query.testid) {
      setTestId(location.query.testid)
      fetchTestDataIfNeeded(location.query.testid);
    }
  }
}
