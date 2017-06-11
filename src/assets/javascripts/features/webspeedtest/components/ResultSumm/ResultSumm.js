import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import Share from '../Share/Share';
import numbro from 'numbro';

import './ResultSumm.scss';

export default class ResultSumm extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
    testId: PropTypes.string.isRequired,
  };

  render() {
    const { result, testId } = this.props;
    return (
      <div className="resultSumm">
        <div className="container">
          <h1>{this.context.t("PageTitleResults")}</h1>
          <Share shareUrl={window.location.href} title={this.context.t("PageTitleA") + ' - ' + this.context.t('PageTitleB')}><span>{this.context.t('ShareResults')}</span></Share>
          <div className="test-url">{result.url}</div>
          <div className="test-summ">
            <div className="test-meta">
              <div className="test-grade test-meta-box">
                <div className="label">
                  {this.context.t("PageImageScoreTitle")}
                </div>
                <div className="grade-content">
                  <div className={'grade grade-' + result.totalPageRank}>
                    {result.totalPageRank}
                  </div>
                  <div className={'grade-text grade-text-' + result.totalPageRank}>
                    {this.context.t("AverageGrade"+result.totalPageRank)}
                  </div>
                </div>
              </div>
              <div className="test-stats test-meta-box">
                <div className="label">
                  {this.context.t("ImageWeightComparisonTitle")}
                </div>
                <div className="original-images-label">
                  {this.context.t("OriginalImages")}
                </div>
                <div className="original-images-weight">
                  {numbro(result.totalImagesWeight).format('0.0d')}
                </div>
                <div className="original-images-indicator"></div>
                <div className="trans-images" style={{'width': result.totalPercentChange + '%'}}>
                  <div className="trans-images-indicator"></div>
                  <div className="trans-images-weight">
                    {numbro(result.totalImagesWeight * result.totalPercentChange / 100).format('0.0d')}
                  </div>
                </div>
                <div className="trans-images-label">
                  <Image publicId="cloudinary_logo.svg.svg" type="asset" width="30"></Image>
                  {this.context.t("PotentialCompression")}
                </div>
              </div>
              <div className="test-totals">
                <div className="image-count test-meta-box">
                  <div className="label">
                    {this.context.t("TotalImagesNumber")}
                  </div>
                  <div className="value">
                    <Image publicId="icon-layers.svg.svg" type="asset" width="41"></Image>
                    {numbro(result.totalImagesCount).format('0a')}
                  </div>
                  {/*<div className="description">
                    {this.context.t("TotalImagesNumber")}
                  </div>*/}
                </div>
                <div className="image-weight test-meta-box">
                  <div className="label">
                    {this.context.t("TotalImagesWeight")}
                  </div>
                  <div className="value">
                    <Image publicId="icon-weight.svg.svg" type="asset" width="41"></Image>
                    {numbro(result.totalImagesWeight).format('0d')}
                  </div>
                 </div>
                <div className="compression test-meta-box">
                  <div className="label">
                    {this.context.t("PotentialCompressionPercentage")}
                  </div>
                  <div className="value">
                    <Image publicId="icon-compress.svg.svg" type="asset" width="41"></Image>
                    {numbro(result.totalPercentChange/100).format('0.0%')}
                  </div>
                </div>
              </div>
              <div className="test-info">
                <div className="browser test-meta-box">
                  <div className="label">
                    {this.context.t("Tested_BrowserType")}
                  </div>
                  <div className="icon">
                    <Image publicId={'browser-' + result.browserName + '.svg.svg'} type="asset"></Image>
                  </div>
                  <div className="value">
                    {result.browserName}
                  </div>
                </div>
                <div className="location test-meta-box">
                  <div className="label">
                    {this.context.t("Tested_Location")}
                  </div>
                  <div className="icon">
                    <Image publicId="icon-location.svg.svg" type="asset"></Image>
                  </div>
                  <div className="value">
                    {result.location}
                  </div>
                </div>
                <div className="viewport test-meta-box">
                  <div className="label">
                    {this.context.t("Tested_Viewport")}
                  </div>
                  <div className="icon">
                    <Image publicId="icon-screen.svg.svg" type="asset"></Image>
                  </div>
                  <div className="value">
                    {result.viewportSize.width + ' x ' + result.viewportSize.height + ' px'}
                  </div>
                </div>
                <div className="dpi test-meta-box">
                  <div className="label">
                    {this.context.t("Tested_DeviceDPI")}
                  </div>
                  <div className="icon">
                    <Image publicId="icon-dpi.svg.svg" type="asset"></Image>
                  </div>
                  <div className="value">
                    {result.dpi + ' DPI'}
                  </div>
                </div>
                <div className="wpt test-meta-box">
                  <div className="label">
                    {this.context.t("IntegratedWith")}
                  </div>
                  <a href={'https://www.webpagetest.org/result/' + testId} target="_blank" className="icon">
                    <Image publicId="https://nullvoid.org/jason.khanlar/assets/img/logos/webpagetest-logo.png" type="fetch" width="107">
                      <Transformation width="107" crop="scale" />
                    </Image>
                  </a>
                </div>
              </div>
            </div>
            <div className="test-screen">
              <Image publicId={result.url} type="url2png" width="300" fetch_format="jpg"></Image>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ResultSumm.contextTypes = {
  t: React.PropTypes.func.isRequired
}
