import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';
import numbro from 'numbro';

import './CompressionBar.scss';

class CompressionBar extends Component {
  static propTypes = {
    format: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    originalSize: PropTypes.number,
    best: PropTypes.bool,
  };

  computeBarStyles(size, originalSize) {
    let barStyles;
    if (originalSize) {
      barStyles = {
        width: (size / originalSize) * 100 + '%',
        backgroundColor: '#0071ba',
      };
    } else {
      barStyles = {
        width: '100%',
        backgroundColor: '#f2676a',
      };
    }
    return barStyles;
  }

  computeCompression(size, originalSize) {
    return size / originalSize;
  }

  render() {
    const { format, size, originalSize, best } = this.props;
    return (
      <div className="compressionBar">
        <div className="type">
          {this.props.t(format)}
          {best && (
            <div className="best">
              <Image
                publicId="icon-best.svg"
                type="asset"
                width="20"
                title={this.props.t('BestImageText')}
              ></Image>
              <span className="tooltip">{this.props.t('BestImageText')}</span>
            </div>
          )}
        </div>
        <div className="bar-wrp">
          <div
            className="bar"
            style={this.computeBarStyles(size, originalSize)}
          ></div>
        </div>
        <div className="bytes">{numbro(size).format('0.0 d')}</div>
        {!originalSize && (
          <div className="note original-note">
            {this.props.t('ExpandedTabOriginal')}
          </div>
        )}
        {originalSize && (
          <div className="note compression-note">
            (
            {numbro(this.computeCompression(size, originalSize)).format('0.0%')}
            )
          </div>
        )}
      </div>
    );
  }
}

export default withTranslation()(CompressionBar);
