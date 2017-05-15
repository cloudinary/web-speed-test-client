import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Image, Transformation } from 'cloudinary-react';
import CompressionBar from './CompressionBar/CompressionBar';

import './ResultsItem.scss';

export default class ResultsItem extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { result } = this.props;

    const transformations = [
      result.transformedImage,
      ...result.dynamicFormats
    ];

    return (
      <div className="resultsItem">
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
            <CompressionBar format={result.analyze.data.format} size={result.analyze.data.bytes} />
          </div>
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
        </div>
      </div>
    );
  }
}

ResultsItem.contextTypes = {
  t: React.PropTypes.func.isRequired
}
