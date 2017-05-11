import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import numbro from 'numbro';
import { Image, Transformation } from 'cloudinary-react';

import './ResultsItem.scss';

export default class ResultsItem extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { result } = this.props;

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
            <div className="image-data-meta">
              <div className="image-data-type">{result.format}</div>
              <div className="image-data-bytes">
                {numbro(result.analyze.data.bytes).format('0.0d')}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
