import React, { Component, PropTypes } from 'react';
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

  toggleImageInfo() {
    this.setState({expanded: !this.state.expanded})
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
          <div className="image-orig">
            <Image publicId={result.public_id}>
              <Transformation height="300" width="400" background="auto:predominant" crop="pad" />
            </Image>
          </div>
          <div className="image-data">
            <div className="image-data-header">
              <div className={'image-data-grading grade grade-' + result.analyze.grading.aggregated.value}>
                {result.analyze.grading.aggregated.value}
              </div>
              <h3 className="image-data-name">{result.original_filename + '.' + result.format}</h3>
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
                  />
                ))}
              </div>
              <div className="image-final">
                <div className="image-final-percent">
                  <Image publicId="icon-compress.svg.svg" type="asset" width="35"></Image>
                  {/*ToDo*/}
                  {numbro(0.521).format('0.0%')}
                </div>
                <div className="image-final-pixel">
                  {result.width}x{result.height} -> {result.transformedImage.width}x{result.transformedImage.height}
                </div>
                <button onClick={this.toggleImageInfo} className="toggle-btn toggle-show">
                  <Image publicId="icon-expand.svg.svg" type="asset" width="12"></Image>
                  {this.context.t('ExpandButton')}
                </button>
                <button onClick={this.toggleImageInfo} className="toggle-btn toggle-hide">
                  <Image publicId="icon-expand.svg.svg" type="asset" width="12"></Image>
                  {this.context.t('CollapseButton')}
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
