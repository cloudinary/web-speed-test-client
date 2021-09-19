import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';
import cx from 'classnames';
import numbro from 'numbro';

import './CompressionBar.scss';

const gradeColor = {
  A: '#48C4D8',
  B: '#48C4D8',
  C: '#f2a81a',
  D: '#f2a81a',
  E: '#FF5050',
  F: '#FF5050',
  default: '#3146c6'
};
class CompressionBar extends Component {
  static propTypes = {
    format: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    originalSize: PropTypes.number,
    best: PropTypes.bool
  };

  computeBarStyles(size, originalSize) {
    let barStyles;
    if (this.props.grade) {
      barStyles = {
        width: '100%',
        backgroundColor: gradeColor[this.props.grade]
      };
    } else {
      barStyles = {
        width: (size / originalSize) * 100 + '%',
        backgroundColor:
          size > originalSize ? gradeColor['F'] : gradeColor['default']
      };
    }
    return barStyles;
  }

  computeCompression(size, originalSize) {
    return -1 + size / originalSize;
  }

  render() {
    const { format, size, originalSize, best } = this.props;
    return (
      <div
        className={cx('compressionBar', {
          'no-reduction': size > originalSize
        })}
      >
        <div className="type">
          {this.props.t(format)}
          {best && (
            <div className="best">
              <Image
                publicId="icon-best-v2.svg"
                type="asset"
                width="22"
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
            {numbro(this.computeCompression(size, originalSize)).format(
              '+0.0%'
            )}
            )
          </div>
        )}
      </div>
    );
  }
}

export default withTranslation()(CompressionBar);
