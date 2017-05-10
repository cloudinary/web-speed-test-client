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
        <a href={result.secure_url} target="_blank">{result.original_filename + '.' + result.format}</a>
        <Image publicId={result.public_id}>
          <Transformation width="200" crop="scale" angle="10"/>
        </Image>
      </div>
    );
  }
}
