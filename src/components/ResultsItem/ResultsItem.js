import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';
import numbro from 'numbro';
import CompressionBar from './CompressionBar/CompressionBar';
import ImageExpanded from './ImageExpanded/ImageExpanded';
import cx from 'classnames';

import './ResultsItem.scss';

class ResultsItem extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded || false,
    };
    this.toggleImageInfo = this.toggleImageInfo.bind(this);
  }

  toggleImageInfo(e) {
    this.setState({ expanded: !this.state.expanded });
  }

  getBestReduction(transformations) {
    const best = transformations.filter(function (t) {
      return t.best;
    });
    return best[0] ? best[0].percentChange / 100 : 'N/A';
  }

  render() {
    const { result } = this.props;
    const transformations = [result.transformedImage, ...result.dynamicFormats];
    const resultCls = cx('resultsItem', {
      expanded: this.state.expanded,
    });
    const btnCls = cx('toggle-btn btn btn-large', {
      expanded: this.state.expanded,
    });
    return (
      <div className={resultCls}>
        <div className="image-intro">
          <div className={'image-orig image-' + result.format}>
            <Image
              publicId={result.public_id}
              height="300"
              width="400"
              crop="limit"
              dpr="auto"
            ></Image>
          </div>
          <div className="image-data">
            <div className="image-data-header">
              <div
                className={
                  'image-data-grading grade grade-' +
                  result.analyze.grading.aggregated.value
                }
              >
                {result.analyze.grading.aggregated.value}
              </div>
              {result.server === 'cloudinary' && (
                <span className="from-cloudinary">
                  <Image
                    publicId="icon-cloudinary-gray.svg"
                    type="asset"
                    width="30"
                  ></Image>
                  <span className="tooltip">
                    {this.props.t('FromCloudinary')}
                  </span>
                </span>
              )}
              <h3 className="image-data-name">
                {result.original_filename + '.' + result.format}
              </h3>
            </div>
            <div className="image-data-inner">
              <div className="image-final">
                <CompressionBar
                  format={result.format}
                  size={result.bytes}
                  grade={result.analyze.grading.aggregated.value}
                />
                <div className="image-final-percent">
                  <h3 className="image-compressions-title">
                    {this.props.t('CollapsedPotentialCompressionTitle')}
                  </h3>
                  <Image
                    publicId="icon-compress-v4.svg"
                    type="asset"
                    width="47"
                  ></Image>
                  {numbro(this.getBestReduction(transformations)).format(
                    '0.0%'
                  )}
                </div>
                <div className="total-of">
                  {this.props.t('CompressionOutOf') +
                    ' (' +
                    numbro(1 - this.getBestReduction(transformations)).format(
                      '0.0%'
                    )}
                  <Image
                    publicId="icon-arrow-black.svg"
                    type="asset"
                    width="12"
                  ></Image>
                  {')'}
                </div>
                <div className="image-final-pixel">
                  {result.width}x{result.height}
                  <Image
                    publicId="icon-arrow-blue.svg"
                    type="asset"
                    width="14"
                  ></Image>
                  {result.transformedImage.width}x
                  {result.transformedImage.height}
                </div>
                <button onClick={this.toggleImageInfo} className={btnCls}>
                  {this.state.expanded && this.props.t('CollapseButton')}
                  {!this.state.expanded && this.props.t('ExpandButton')}
                  <Image
                    publicId="icon-expand.svg"
                    type="asset"
                    width="12"
                  ></Image>
                </button>
              </div>
              <div className="image-compression-bars">
                <h3 className="image-compressions-title">
                  {this.props.t('CompressionBarsTitle')}
                </h3>
                {transformations.map((transform, key) => (
                  <CompressionBar
                    key={key}
                    format={transform.analyze.data.format}
                    size={transform.analyze.data.bytes}
                    originalSize={result.analyze.data.bytes}
                    best={transform.best}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ImageExpanded result={result} />
      </div>
    );
  }
}

export default withTranslation()(ResultsItem);
