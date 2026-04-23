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
    result: PropTypes.object.isRequired
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

  getBestReduction(transformations) {
    const best = transformations.filter(function (t) {
      return t.best;
    });
    return best[0] ? best[0].percentChange / 100 : 'N/A';
  }

  render() {
    const { result } = this.props;
    const transformations = [result.transformedImage, ...result.dynamicFormats];
    const fileName = result.original_filename + '.' + result.format;
    const resultCls = cx('resultsItem', {
      expanded: this.state.expanded
    });
    const btnCls = cx('toggle-btn btn btn-large', {
      expanded: this.state.expanded
    });
    return (
      <div className={resultCls}>
        <div className="image-intro">
          <div className="results-header">
            <div className="results-header-main">
              <h3 className="image-data-name" title={fileName}>
                {fileName}
              </h3>
              {result.server === 'Cloudinary' && (
                <div className="delivery-label">
                  <Image
                    publicId="icon-cloudinary-gray.svg"
                    type="asset"
                    width="22"
                  ></Image>
                  <span>Delivered via Cloudinary</span>
                </div>
              )}
            </div>
            <button onClick={this.toggleImageInfo} className={btnCls}>
              {this.state.expanded && this.props.t('CollapseButton')}
              {!this.state.expanded && this.props.t('ExpandButton')}
              <Image publicId="icon-expand.svg" type="asset" width="12"></Image>
            </button>
          </div>
          <div className="results-grid">
            <div className="results-left">
              <div className="score-card">
                <h3 className="metric-title">Image Score</h3>
                <div
                  className={
                    'image-data-grading grade grade-' +
                    result.analyze.grading.aggregated.value
                  }
                >
                  {result.analyze.grading.aggregated.value}
                </div>
              </div>
              <div className={'image-orig image-' + result.format}>
                <Image
                  publicId={result.public_id}
                  height="300"
                  width="400"
                  crop="limit"
                  dpr="auto"
                ></Image>
              </div>
            </div>
            <div className="results-middle">
              <div className="metric-card current-card">
                <h3 className="metric-title">
                  {this.props.t('ExpandedTabOriginal')}
                </h3>
                <div className="metric-value">
                  {numbro(result.bytes).format('0.0 b')}
                </div>
                <div className="metric-subvalue">{result.format.toUpperCase()}</div>
              </div>
              <div className="metric-card compression-card">
                <h3 className="metric-title">
                  {this.props.t('CollapsedPotentialCompressionTitle')}
                </h3>
                <div className="metric-value">
                  {numbro(1 - this.getBestReduction(transformations)).format(
                    '0.0%'
                  )}
                </div>
                <div className="metric-copy">
                  {this.props.t('ImageWeightReduction')}
                </div>
                <div className="metric-dimensions">
                  {result.width}x{result.height}
                  <Image
                    publicId="icon-arrow-black.svg"
                    type="asset"
                    width="14"
                  ></Image>
                  {result.transformedImage.width}x
                  {result.transformedImage.height}
                </div>
              </div>
            </div>
            <div className="image-compression-bars">
              <div className="image-compression-summary">
                <h3 className="image-compressions-title">
                  Image Format Compression Options
                </h3>
                <p className="image-compression-copy">
                  {this.props.t('CompressionBarsTitle')}
                </p>
              </div>
              <div className="bars-wrp">
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
