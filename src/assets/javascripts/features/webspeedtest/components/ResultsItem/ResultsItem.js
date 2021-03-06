import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Image, Transformation } from 'cloudinary-react';
import numbro from 'numbro';
import CompressionBar from './CompressionBar/CompressionBar';
import ImageExpanded from './ImageExpanded/ImageExpanded';
import classnames from 'classnames';

import './ResultsItem.scss';

export default class ResultsItem extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
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

    const ripple = ReactDOM.findDOMNode(this.refs.ripple);
    const btn = ripple.parentElement;
    btn.classList.remove("btn-animate");
    btn.setAttribute("data-state", this.state.expanded ? "toggle-show" : "toggle-hide");
    const d = Math.max(btn.offsetWidth, btn.offsetHeight);
		ripple.style.height = d + "px";
    ripple.style.width = d + "px";
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - d/2;
    const y = e.clientY - rect.top - d/2;
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    btn.classList.add("btn-animate");
  }

  getBestReduction(transformations) {
    const best = transformations.filter(function( t ) {
      return t.best;
    });
    return best[0] ? best[0].percentChange / 100 : 'N/A';
  }

  render() {
    const { result } = this.props;
    const transformations = [
      result.transformedImage,
      ...result.dynamicFormats
    ];
    const resultCls = classnames(
      'resultsItem',
      { 'expanded': this.state.expanded }
    );
    return (
      <div className={resultCls}>
        <div className="image-intro">
          <div className={"image-orig image-" + result.format}>
            <Image
              publicId={result.public_id}
              height="300"
              width="400"
              crop="limit"
              dpr="auto">
            </Image>
          </div>
          <div className="image-data">
            <div className="image-data-header">
              <div className={'image-data-grading grade grade-' + result.analyze.grading.aggregated.value}>
                {result.analyze.grading.aggregated.value}
              </div>
              {result.server == 'cloudinary' &&
                <span className="from-cloudinary">
                  <Image publicId="icon-cloudinary-gray.svg" type="asset" width="30"></Image>
                  <span className="tooltip">{this.context.t("FromCloudinary")}</span>
                </span>
              }
              <h3 className="image-data-name">
                {result.original_filename + '.' + result.format}
              </h3>
              <CompressionBar format={result.format} size={result.bytes} />
            </div>
            <div className="image-data-inner">
              <div className="image-compression-bars">
                <h3 className="image-compressions-title">{this.context.t('CollapsedPotentialCompressionTitle')}</h3>
                {transformations.map((transform, key) => (
                  <CompressionBar key={key}
                    format={transform.analyze.data.format}
                    size={transform.analyze.data.bytes}
                    originalSize={result.analyze.data.bytes}
                    best={transform.best}
                  />
                ))}
              </div>
              <div className="image-final">
                <div className="image-final-percent">
                  <Image publicId="icon-compress.svg" type="asset" width="35"></Image>
                  {numbro(this.getBestReduction(transformations)).format('0.0%')}
                </div>
                <div className="image-final-pixel">
                  {result.width}x{result.height}
                  <Image publicId="icon-arrow-gray.svg" type="asset" width="18"></Image>
                  {result.transformedImage.width}x{result.transformedImage.height}
                </div>
                <button onClick={this.toggleImageInfo} className="toggle-btn">
                  <Image publicId="icon-expand.svg" type="asset" width="12"></Image>
                  {this.state.expanded &&
                    this.context.t('CollapseButton')
                  }
                  {!this.state.expanded &&
                    this.context.t('ExpandButton')
                  }
                  <div ref="ripple" className="ripple"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ImageExpanded result={result} />
      </div>
    );
  }
}

ResultsItem.contextTypes = {
  t: React.PropTypes.func.isRequired
}
