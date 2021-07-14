import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';
import numbro from 'numbro';
import CompressionBar from '../ResultsItem/CompressionBar/CompressionBar';
import ImageExpanded from '../ResultsItem/ImageExpanded/ImageExpanded';
import cx from 'classnames';

import './ResultsLCP.scss';

class ResultsLCP extends Component {
  static propTypes = {
    lcp: PropTypes.object.isRequired
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
    const { lcp } = this.props;
    console.log(lcp);
    const resultCls = cx('resultsLCP', {
      expanded: this.state.expanded
    });
    // const btnCls = cx('toggle-btn btn btn-large', {
    //   expanded: this.state.expanded
    // });
    return (
      <div className={resultCls}>
        {lcp.element.src}
      </div>
    );
  }
}

export default withTranslation()(ResultsLCP);
