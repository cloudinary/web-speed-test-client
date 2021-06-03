import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Image, Transformation } from 'cloudinary-react';
// import Share from '../Share/Share';
import numbro from 'numbro';
import cloudinary from 'cloudinary-core';

import './ResultSumm.scss';

class ResultSumm extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
    testId: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      screenshotLoaded: false,
    };
    this.handleScreenshotOnLoad = this.handleScreenshotOnLoad.bind(this);
    this.getBrowserIcon = this.getBrowserIcon.bind(this);
  }

  handleScreenshotOnLoad() {
    if (this.state.screenshotLoaded === false) {
      this.setState({ screenshotLoaded: true });
    }
  }

  getBrowserIcon() {
    const { result } = this.props;
    if (result.browserName.includes('Chrome')) {
      return 'browser-Google Chrome.svg';
    } else {
      return 'browser-' + result.browserName + '.svg';
    }
  }

  render() {
    const { result, testId } = this.props;

    const cloudinaryCore = new cloudinary.Cloudinary({
      cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
      cname: process.env.REACT_APP_CLOUDINARY_CNAME,
    });
    let url2png;
    if (result.url) {
      url2png =
        cloudinaryCore.url(result.url.replace(/\/$/, ''), {
          width: 300,
          crop: 'limit',
          type: 'url2png',
          fetchFormat: 'jpg',
          dpr: 'auto',
        }) +
        '/url2png/fullpage=false%7Cviewport=' +
        result.viewportSize.width +
        'x2200%7Cthumbnail_max_width=900';
    }

    return (
      <div className="resultSumm">
        <div className="container">
          <h1>{this.props.t('PageTitleResults')}</h1>
          {/* <Share shareUrl={window.location.href} title={this.props.t("PageTitleA") + ' - ' + this.props.t('PageTitleB')}><span>{this.props.t('ShareResults')}</span></Share> */}
          <a
            className="support"
            href={this.props.t('SupportURL')}
            title={this.props.t('SupportText')}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              publicId="icon-support-blue.svg"
              width="24"
              type="asset"
            ></Image>
          </a>
          <div className="test-url">{result.url}</div>

          {result.totalImagesCount === 0 && (
            <div className="test-empty-summ">
              <div className="test-empty">{this.props.t('EmptyTest')}</div>
            </div>
          )}

          {result.totalImagesCount > 0 && (
            <div className="test-summ">
              <div className="test-meta">
                <div className="test-grade test-meta-box">
                  <div className="label">
                    {this.props.t('PageImageScoreTitle')}
                  </div>
                  <div className="grade-content">
                    <div className={'grade grade-' + result.totalPageRank}>
                      {result.totalPageRank}
                    </div>
                    <div
                      className={
                        'grade-text grade-text-' + result.totalPageRank
                      }
                    >
                      {this.props.t('AverageGrade' + result.totalPageRank)}
                    </div>
                  </div>
                </div>
                <div className="test-stats test-meta-box">
                  <div className="label">
                    {this.props.t('ImageWeightComparisonTitle')}
                  </div>
                  <div className="original-images-label">
                    {this.props.t('OriginalImages')}
                  </div>
                  <div className="original-images-weight">
                    {numbro(result.totalImagesWeight).format('0.0 d')}
                  </div>
                  <div className="original-images-indicator"></div>
                  <div
                    className="trans-images"
                    style={{ width: result.totalPercentChange + '%' }}
                  >
                    <div className="trans-images-indicator"></div>
                    <div className="trans-images-weight">
                      {numbro(
                        (result.totalImagesWeight * result.totalPercentChange) /
                          100
                      ).format('0.0 d')}
                    </div>
                  </div>
                  <div className="trans-images-label">
                    <Image
                      publicId="cloudinary_logo.svg"
                      type="asset"
                      width="30"
                    ></Image>
                    {this.props.t('PotentialCompression')}
                    <span className="more-info">
                      <Image
                        publicId="icon-info.svg"
                        type="asset"
                        width="14"
                      ></Image>
                      <span className="tooltip">
                        {this.props.t('PotentialCompressionMoreInfo')}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="test-totals">
                  <div className="image-count test-meta-box">
                    <div className="label">
                      {this.props.t('TotalImagesNumber')}
                    </div>
                    <div className="value">
                      <Image
                        publicId="icon-layers-v2.svg"
                        type="asset"
                        width="41"
                      ></Image>
                      {numbro(result.totalImagesCount).format('0a')}
                    </div>
                    {result.imageList && result.imageList.isCut && (
                      <div className="description">
                        {this.props.t('TotalImagesNumber_TooMany_A') +
                          ' ' +
                          numbro(result.totalImagesCount).format('0a') +
                          ' ' +
                          this.props.t('TotalImagesNumber_TooMany_B')}
                      </div>
                    )}
                  </div>
                  <div className="image-weight test-meta-box">
                    <div className="label">
                      {this.props.t('TotalImagesWeight')}
                    </div>
                    <div className="value">
                      <Image
                        publicId="icon-weight-v2.svg"
                        type="asset"
                        width="41"
                      ></Image>
                      {numbro(result.totalImagesWeight).format('0d')}
                    </div>
                  </div>
                  <div className="compression test-meta-box">
                    <div className="label">
                      {this.props.t('PotentialCompressionPercentage')}
                      <span className="more-info">
                        <Image
                          publicId="icon-info.svg"
                          type="asset"
                          width="16"
                        ></Image>
                        <span className="tooltip">
                          {this.props.t(
                            'PotentialCompressionPercentageMoreInfo'
                          )}
                        </span>
                      </span>
                    </div>
                    <div className="value">
                      <Image
                        publicId="icon-compress-v2.svg"
                        type="asset"
                        width="41"
                      ></Image>
                      {numbro(result.totalPercentChange / 100).format('0.0%')}
                    </div>
                  </div>
                </div>
                <div className="test-info">
                  <div className="browser test-meta-box">
                    <div className="label">
                      {this.props.t('Tested_BrowserType')}
                    </div>
                    <div className="icon">
                      <Image
                        publicId={this.getBrowserIcon()}
                        type="asset"
                      ></Image>
                    </div>
                    <div className="value">{result.browserName}</div>
                  </div>
                  <div className="location test-meta-box">
                    <div className="label">
                      {this.props.t('Tested_Location')}
                    </div>
                    <div className="icon">
                      <Image publicId="icon-location.svg" type="asset"></Image>
                    </div>
                    <div className="value">{result.location}</div>
                  </div>
                  <div className="viewport test-meta-box">
                    <div className="label">
                      {this.props.t('Tested_Viewport')}
                    </div>
                    <div className="icon">
                      <Image publicId="icon-screen.svg" type="asset"></Image>
                    </div>
                    <div className="value">
                      {result.viewportSize.width +
                        ' x ' +
                        result.viewportSize.height +
                        ' px'}
                    </div>
                  </div>
                  <div className="dpi test-meta-box">
                    <div className="label">
                      {this.props.t('Tested_DeviceDPI')}
                    </div>
                    <div className="icon">
                      <Image publicId="icon-dpi.svg" type="asset"></Image>
                    </div>
                    <div className="value">{result.dpi + ' DPI'}</div>
                  </div>
                  <div className="wpt test-meta-box">
                    <div className="label">
                      {this.props.t('IntegratedWith')}
                    </div>
                    <a
                      href={'https://www.webpagetest.org/result/' + testId}
                      target="_blank"
                      className="icon"
                      rel="noreferrer"
                    >
                      <Image
                        publicId="https://nullvoid.org/jason.khanlar/assets/img/logos/webpagetest-logo.png"
                        type="fetch"
                        width="107"
                      >
                        <Transformation width="107" crop="fit" />
                      </Image>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={
                  this.state.screenshotLoaded
                    ? 'test-screen loaded'
                    : 'test-screen'
                }
              >
                <Image
                  className="placeholder"
                  publicId="placeholder.png"
                  type="asset"
                ></Image>
                <div className="placeholder-text">
                  {this.props.t('URL2PNG_PlaceHolderText')}
                </div>
                <img
                  className="screenshot"
                  width="300"
                  src={url2png}
                  alt={this.props.t('Screenshot of ') + result.url}
                  onLoad={this.handleScreenshotOnLoad}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withTranslation()(ResultSumm);
