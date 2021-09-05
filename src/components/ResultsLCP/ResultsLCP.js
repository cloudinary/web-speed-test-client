import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ImageLCP from './ImageLCP';
import NonImageLCP from './NonImageLCP';
import cx from 'classnames';

import './ResultsLCP.scss';

class ResultsLCP extends Component {
  static propTypes = {
    lcp: PropTypes.object.isRequired,
    isImage: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded || false
    };
    this.toggleImageInfo = this.toggleImageInfo.bind(this);
  }

  toggleImageInfo(e) {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { analyzed: lcp } = this.props.lcp;
    const resultCls = cx('resultsLCP', {
      expanded: this.state.expanded
    });
    return lcp ? (
      <div className={resultCls}>
        <div className="container">
          <h1>{this.props.t('LargestResultTitle')}</h1>
          <h2>{this.props.t('LargestResultDescription')}</h2>
          {this.props.isImage ? (
            <ImageLCP
              lcp={this.props.lcp}
              toggleImageInfo={() => this.toggleImageInfo}
              expanded={this.state.expanded}
            />
          ) : (
            <NonImageLCP lcp={this.props.lcp} />
          )}
        </div>
      </div>
    ) : null;
  }
}

export default withTranslation()(ResultsLCP);
