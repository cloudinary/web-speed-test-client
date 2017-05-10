import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
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
            <h3 className="image-data-name">{result.original_filename + '.' + result.format}</h3>
            <div className="image-data-meta">
              <div className="image-data-type">{result.format}</div>
              <div className="image-data-bytes">{result.bytes}B</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
