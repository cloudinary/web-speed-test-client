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
    const {
      lcp: { analyzed: lcp, event },
      getGrading
    } = this.props;

    const grade = getGrading(event.time);

    const transformations = [lcp.transformedImage, ...lcp.dynamicFormats];
    const btnCls = cx('toggle-btn btn btn-large', {
      expanded: this.props.expanded
    });
    const fileName = lcp.original_filename + '.' + lcp.format;

    return (
      <Fragment>
        <div className="lcp-item">
          <div className="lcp-header">
            <div className="image-data-header">
              <div className="image-data-header-top">
                <h3 className="image-data-name" title={fileName}>
                  {fileName}
                </h3>
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
              </div>
            </div>
            <button onClick={this.props.toggleImageInfo()} className={btnCls}>
              {this.props.expanded && this.props.t('CollapseButton')}
              {!this.props.expanded && this.props.t('ExpandButton')}
              <Image publicId="icon-expand.svg" type="asset" width="12"></Image>
            </button>
          </div>
          <div className="lcp-top">
            <div className="image-data">
              <div className="image-stats-grid">
                <div className="image-stat-card image-score-card">
                  <h3 className="image-stat-title">Image Score</h3>
                  <div className={'image-data-grading grade grade-' + grade}>
                    {grade}
                  </div>
                </div>
                <div className="image-stat-card image-current-card">
                  <h3 className="image-stat-title">
                    {this.props.t('ExpandedTabOriginal')}
                  </h3>
                  <div className="image-stat-main">
                    {numbro(lcp.bytes).format('0.0 b')}
                  </div>
                  <div className="image-stat-sub">{lcp.format.toUpperCase()}</div>
                </div>
                <div className="image-stat-card image-loading-time">
                  <h3 className="image-stat-title">
                    {this.props.t('TimeToLoad')}
                  </h3>
                  <div
                    className={cx(
                      'image-loading-time-grade',
                      'time-grade-' + grade,
                      'image-stat-main'
                    )}
                  >
                    {`${numbro(event.time / 1000).format('3a')}s`}
                    <span>{this.props.t('TimeGrade' + grade)}</span>
                  </div>
                  <div className="image-stat-footnote">
                    {this.props.t('TimeToLoadShouldBe')}
                  </div>
                </div>
                <div className="image-stat-card image-final-percent">
                  <h3 className="image-stat-title">
                    {this.props.t('CollapsedPotentialCompressionTitle')}
                  </h3>
                  <div className="image-final-percent-value image-stat-main">
                    {numbro(1 - this.getBestReduction(transformations)).format(
                      '0.0%'
                    )}
                  </div>
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
              </div>
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
                  originalSize={lcp.analyze.data.bytes}
                  best={transform.best}
                />
              ))}
            </div>
          </div>
        </div>
        <ImageExpanded result={lcp} />
      </Fragment>
    );
  }
}

export default withTranslation()(ImageLCP);
