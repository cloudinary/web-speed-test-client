import React, { Component, PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import classnames from 'classnames';

import './ResultSumm.scss';

export default class ResultSumm extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { result } = this.props;
    return (
      <div className="resultSumm">
        <div className="container">
          <h1>{this.context.t("Image Analysis Results")}</h1>
          <div className="test-url">{result.testId}</div>
          <div className="test-summ">
            <div className="test-meta">
              <div className="test-grade test-meta-box">
                <div className="label">
                  {this.context.t("Page Image Score")}
                </div>
                <div className={'grade grade-' + result.totalPageRank}>
                  {result.totalPageRank}
                </div>
              </div>
              <div className="test-stats test-meta-box">
                <div className="label">
                  {this.context.t("Image Weight Comparison")}
                </div>
              </div>
              <div className="test-totals">
                <div className="image-count test-meta-box">
                  <div className="label">
                    {this.context.t("Total Image Count")}
                  </div>
                </div>
                <div className="image-weight test-meta-box">
                  <div className="label">
                    {this.context.t("Total Image Weight")}
                  </div>
                </div>
                <div className="compression test-meta-box">
                  <div className="label">
                    {this.context.t("Potential Smart Compress Percentage")}
                  </div>
                </div>
              </div>
              <div className="test-info">
                <div className="browser test-meta-box">
                  <div className="label">
                    {this.context.t("Tested on browser")}
                  </div>
                </div>
                <div className="location test-meta-box">
                  <div className="label">
                    {this.context.t("From location")}
                  </div>
                </div>
                <div className="viewport test-meta-box">
                  <div className="label">
                    {this.context.t("Viewport Size")}
                  </div>
                </div>
                <div className="dpi test-meta-box">
                  <div className="label">
                    {this.context.t("Device DPI")}
                  </div>
                </div>
                <div className="wpt test-meta-box">
                  <div className="label">
                    {this.context.t("Integrated with")}
                  </div>
                </div>
              </div>
            </div>
            <div className="test-screen">
              <Image publicId="sample" width="300" />
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
