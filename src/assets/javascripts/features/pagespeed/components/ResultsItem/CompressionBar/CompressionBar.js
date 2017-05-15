import React, { Component, PropTypes } from 'react';
import numbro from 'numbro';
import classnames from 'classnames';

import './CompressionBar.scss';

export default class CompressionBar extends Component {
  static propTypes = {
    format: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    originalSize: PropTypes.number,
  };

  computeBarStyles(size, originalSize) {
    let barStyles;
    if (originalSize) {
      barStyles = {
        'width': size / originalSize * 100 + '%',
        'backgroundColor': '#0071ba'
      }
    }
    else {
      barStyles = {
        'width': '100%',
        'backgroundColor': '#f2676a'
      }
    }
    return barStyles;
  }

  computeCompression(size, originalSize) {
    return 1 - (size / originalSize);
  }

  render() {
    const { format, size, originalSize } = this.props;
    return (
      <div className="compressionBar">
        <div className="type">{format}</div>
        <div className="bar-wrp">
          <div className="bar" style={this.computeBarStyles(size, originalSize)}></div>
        </div>
        <div className="bytes">
          {numbro(size).format('0d')}
        </div>
        {!originalSize &&
          <div className="note original-note">
            { this.context.t('ExpandedTabOriginal') }
          </div>
        }
        {originalSize &&
          <div className="note compression-note">
            {numbro(this.computeCompression(size, originalSize)).format('0.0%')}
          </div>
        }
      </div>
    );
  }
}

CompressionBar.contextTypes = {
  t: React.PropTypes.func.isRequired
}
