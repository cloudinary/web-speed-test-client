import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import numbro from 'numbro';
import classnames from 'classnames';

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
          <div className="test-url">{result.metaData.url}</div>
          <div className="test-summ">
            <div className="test-meta">
              <div className="test-grade test-meta-box">
                <div className="label">
                  {this.context.t("PageImageScoreTitle")}
                </div>
                <div className={'grade grade-' + result.totalPageRank}>
                  {result.totalPageRank}
                </div>
                <div className={'grade-text grade-text-' + result.totalPageRank}>
                  {this.context.t("AverageGrade"+result.totalPageRank)}
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
                  {numbro(1231231231).format('0.0d')}
                </div>
                <div className="original-images-indicator"></div>
                <div className="trans-images">
                  <div className="trans-images-indicator" style={{'width': '80px'}}></div>
                  <div className="trans-images-weight">
                    {numbro(31231231).format('0.0d')}
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
                    {numbro(160000).format('0a')}
                  </div>
                  <div className="description">
                    {this.context.t("TotalImagesNumber")}
                  </div>
                </div>
                <div className="image-weight test-meta-box">
                  <div className="label">
                    {this.context.t("TotalImagesWeight")}
                  </div>
                  <div className="value">
                    <Image publicId="icon-weight.svg.svg" type="asset" width="41"></Image>
                    {numbro(150100).format('0d')}
                  </div>
                 </div>
                <div className="compression test-meta-box">
                  <div className="label">
                    {this.context.t("PotentialCompressionPercentage")}
                  </div>
                  <div className="value">
                    <Image publicId="icon-compress.svg.svg" type="asset" width="41"></Image>
                    {numbro(0.521).format('0.0%')}
                  </div>
                </div>
              </div>
              <div className="test-info">
                <div className="browser test-meta-box">
                  <div className="label">
                    {this.context.t("Tested_BrowserType")}
                  </div>
                  <div className="icon">
                    <Image publicId={'browser-' + result.metaData.browserName + '.svg.svg'} type="asset" height="22"></Image>
                  </div>
                  <div className="value">
                    {result.metaData.browserName}
                  </div>
                </div>
                <div className="location test-meta-box">
                  <div className="label">
                    {this.context.t("Tested_Location")}
                  </div>
                  <div className="icon">
                    <Image publicId="icon-location.svg.svg" type="asset" height="22"></Image>
                  </div>
                  <div className="value">
                    {result.metaData.location}
                  </div>
                </div>
                <div className="viewport test-meta-box">
                  <div className="label">
                    {this.context.t("Tested_Viewport")}
                  </div>
                  <div className="icon">
                    <Image publicId="icon-screen.svg.svg" type="asset" height="22"></Image>
                  </div>
                  <div className="value">
                    {result.metaData.viewportSize.width + ' x ' + result.metaData.viewportSize.height + ' px'}
                  </div>
                </div>
                <div className="dpi test-meta-box">
                  <div className="label">
                    {this.context.t("Tested_DeviceDPI")}
                  </div>
                  <div className="icon">
                    <Image publicId="icon-dpi.svg.svg" type="asset" height="22"></Image>
                  </div>
                  <div className="value">
                    {result.metaData.dpi + ' DPI'}
                  </div>
                </div>
                <div className="wpt test-meta-box">
                  <div className="label">
                    {this.context.t("IntegratedWith")}
                  </div>
                  <div className="icon">
                    <Image publicId="icon-wpt.png.png" type="asset"></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="test-screen">
              <Image publicId={result.metaData.url} type="url2png" width="300"></Image>
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
