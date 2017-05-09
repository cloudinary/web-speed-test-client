import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as pagespeedActions, selector } from '../';
import PagespeedLayout from './PagespeedLayout';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(pagespeedActions, dispatch)
}))
export default class PagespeedView extends Component {
  render() {
    return (
      <div>
        <PagespeedLayout {...this.props} />
      </div>
    );
  }
}
