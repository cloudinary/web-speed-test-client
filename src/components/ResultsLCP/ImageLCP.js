import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Image } from 'cloudinary-react';
import numbro from 'numbro';
import CompressionBar from '../ResultsItem/CompressionBar/CompressionBar';
import ImageExpanded from '../ResultsItem/ImageExpanded/ImageExpanded';
import cx from 'classnames';

import './ResultsLCP.scss';

class ImageLCP extends Component {
  static propTypes = {
    lcp: PropTypes.object.isRequired
  };

  getBestReduction(transformations) {
    const best = transformations.filter(function (t) {
      return t.best;
    });
    return best[0] ? best[0].percentChange / 100 : 'N/A';
  }

  render() {
    const { analyzed: lcp, event } = this.props.lcp;
    const transformations = [lcp.transformedImage, ...lcp.dynamicFormats];
    const btnCls = cx('toggle-btn btn btn-large', {
      expanded: this.props.expanded
    });
    return (
      <Fragment>
        <div className="lcp-item">
          <div className="image-data">
            <div className="image-data-header">
              <div
                className={
                  'image-data-grading grade grade-' +
                  lcp.analyze.grading.aggregated.value
                }
              >
                {lcp.analyze.grading.aggregated.value}
              </div>
              {lcp.server === 'cloudinary' && (
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
              <h3
                className="image-data-name"
                title={lcp.original_filename + '.' + lcp.format}
              >
                {lcp.original_filename + '.' + lcp.format}
              </h3>
            </div>
            <CompressionBar
              format={lcp.format}
              size={lcp.bytes}
              grade={lcp.analyze.grading.aggregated.value}
            />
            <div className="image-loading-time">
              <h3 className="image-loading-time-title">
                {this.props.t('TimeToLoad')}
                <span>{'(' + this.props.t('TimeToLoadShouldBe') + ')'}</span>
              </h3>
              <Image
                publicId="icon-time_new.svg"
                type="asset"
                width="51"
              ></Image>
              <div
                className={cx(
                  'image-loading-time-grade',
                  'time-grade-' + lcp.analyze.grading.aggregated.value
                )}
              >
                {`${numbro(event.time / 1000).format('3a')}s`}
                <span>
                  {this.props.t(
                    'TimeGrade' + lcp.analyze.grading.aggregated.value
                  )}
                </span>
              </div>
            </div>
            <div className="image-final-percent">
              <h3 className="image-compressions-title">
                {this.props.t('CollapsedPotentialCompressionTitle')}
              </h3>
              <Image
                publicId="icon-compress-v4.svg"
                type="asset"
                width="47"
              ></Image>
              {numbro(1 - this.getBestReduction(transformations)).format(
                '0.0%'
              )}
              <div className="total-of">
                {this.props.t('ImageWeightReduction')}
              </div>
              <div className="image-final-pixel">
                {lcp.width}x{lcp.height}
                <Image
                  publicId="icon-arrow-blue.svg"
                  type="asset"
                  width="14"
                ></Image>
                {lcp.transformedImage.width}x{lcp.transformedImage.height}
              </div>
            </div>
            <button onClick={this.props.toggleImageInfo()} className={btnCls}>
              {this.props.expanded && this.props.t('CollapseButton')}
              {!this.props.expanded && this.props.t('ExpandButton')}
              <Image publicId="icon-expand.svg" type="asset" width="12"></Image>
            </button>
          </div>
          <div className="flex-column">
            <div className={'image-orig image-' + lcp.format}>
              <Image
                publicId={lcp.public_id}
                height="300"
                width="400"
                crop="limit"
                dpr="auto"
              ></Image>
            </div>
            <div className="image-compression-bars">
              <h3 className="image-compressions-title">
                {this.props.t('CompressionBarsTitle')}
              </h3>
              <div className="bars-wrp">
                {transformations.map((transform, key) => (
                  <CompressionBar
                    key={key}
                    format={transform.analyze.data.format}
                    size={transform.analyze.data.bytes}
                    originalSize={lcp.analyze.data.bytes}
                    best={transform.best}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ImageExpanded result={lcp} />
      </Fragment>
    );
  }
}

export default withTranslation()(ImageLCP);
